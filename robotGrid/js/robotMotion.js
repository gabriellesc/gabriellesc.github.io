/***********************************************************************
 * Motion functions for the Javascript implementation of simplified robot 
 * warehouse navigation, based on https://github.com/csc301-fall-2016/a5-fake2
 *
 * 21.05.2017 G.S.C.
***********************************************************************/

"use strict";

// keep track of grid states as array of [state index, robot ID]
let wh;

/* possible cell states */
const STATE = ["empty", "robot", "rack", "goal"];

const DIRECTION = {NORTH: 0, SOUTH: 1, EAST: 2, WEST: 3};

function Cell(x, y) {
    this.x = x;
    this.y = y;
}

// redefine Cell.toString() to allow Cell to be used as a property in an object
Cell.prototype.toString = function celltoString() {
    return String(this.x) + ":" + String(this.y);
}

function pathPlanner() {
    console.log(JSON.stringify(wh));

    let i,j, s, t;
    for (i = 0; i < wh.length; i++) {
	for (j = 0; j < wh.length; j++) {
	    if (wh[i][j][1] == "r0")
		s = new Cell(j,i);

	    if (wh[i][j][1] == "g0")
		t = new Cell(j,i);
	}
    }

    return shortestPath(wh, s, t);
}

/* Uses Dijkstra's algorithm to find shortest path between two locations in warehouse */
function shortestPath(warehouse, source, target) {
    // construct set of unoccupied cells in warehouse
    let Q = unoccupied(warehouse);
    // re-add the source cell (will be excluded by unoccupied() because it contains a robot)
    Q.push(source);

    // initialize distance and previous arrays
    let dist = {}, prev = {}, i;
    for (i = 0; i < Q.length; i++) {
	dist[Q[i]] = Number.POSITIVE_INFINITY;
	prev[Q[i]] = undefined;
    }

    dist[source] = 0.0; // distance from source to itself

    while (Q.length > 0){
	let u = extractMin(Q, dist); // find closest node

	if (u.x == target.x && u.y == target.y) // we have reached the target
	    break;
	Q.splice(Q.indexOf(u), 1); // otherwise, remove u from the set

	// examine each neighbour v of closest node u
	let ns = neighbours(u), v, alt;
	for (v = 0; v < ns.length; v++) {
	    alt = dist[u] + 1;

	    if (alt < dist[ns[v]]) { // a shorter path to v has been found
		dist[ns[v]] = alt;
		prev[ns[v]] = u;
	    }
	}
    }
    
    // build path based on prev
    let path = [];
    let cell = target;
    
    while (prev[cell] != undefined) {
	path.unshift(cell);
	cell = prev[cell];
    }
    path.unshift(source);
    
    return path;
}

/* Return the set of all unoccupied cells in the warehouse.
 * NOT FOR NOW - Include all cells that contain a robot because those robots might be moved.
 */
function unoccupied(warehouse){
    let i, j, set = [];

    for (i = 0; i < warehouse.length; i++) {
	for (j = 0; j < warehouse[0].length; j++) {
	    if (STATE[warehouse[i][j][0]] == "empty" ||
		STATE[warehouse[i][j][0]] == "goal")// || STATE[warehouse[i][0]] == "robot")
		set.push(new Cell(j, i));
	}
    }
    
    return set;
}

/* Return direction to travel between source and target (adjacent cells) */
function cells2dir(source, target){
    if (source.x != target.x){
	if (source.x < target.x)
	    return DIRECTION.EAST;
	return DIRECTION.WEST;
    }
    if (source.y < target.y)
	return DIRECTION.NORTH;
    return DIRECTION.SOUTH;
}

/* Find the cell in array Q with the minimum distance in the distance array. */
function extractMin(Q, dist){
    let minCell = Q[0], i;
    
    for (i = 0; i < Q.length; i++) {
	if (dist[Q[i]] < dist[minCell])
	    minCell = Q[i];
    }
    
    return minCell;
}

/* Find the cell that is one cell over in the direction, or null if the cell is on the edge
 * of the grid.
 */
function oneCellOver(cell, direction){
    switch (direction) {
    case DIRECTION.NORTH:
	if (cell.y - 1 < 0)
	    break;
	return new Cell(cell.x, cell.y - 1);
	    
    case DIRECTION.EAST:
	if (cell.x + 1 == wh[0].length)
	    break;
	return new Cell(cell.x + 1, cell.y);
	    
    case DIRECTION.SOUTH:
	if (cell.y + 1 == wh.length)
	    break;
	return new Cell(cell.x, cell.y + 1);
	    
    case DIRECTION.WEST:
	if (cell.x - 1 < 0)
	    break;
	return new Cell(cell.x - 1, cell.y);
    }
    
    return null;
}

/* Find the neighbours of this cell. */
function neighbours(cell) {
    let ns = [];

    let dir, n;
    for (dir in DIRECTION){	    
	n = oneCellOver(cell, DIRECTION[dir]);
	if (n != null)
	    ns.push(n);
    }

    return ns;
}


/*public class PathPlanner implements IPathPlanner {
	
	@Override
	public Map<IGridRobot, Direction> allNextSteps(IWarehouse warehouse, 
			Map<IGridRobot, GridCell> robot2dest){
		Set<Map.Entry<IGridRobot, GridCell>> robot2destSet = robot2dest.entrySet();
		Map<IGridRobot, Direction> nextSteps = new HashMap<>();
		
		IGrid<Rack> floorPlan = warehouse.getFloorPlan();

		for (Entry<IGridRobot, GridCell> goal : robot2destSet){
			IGridRobot robot = goal.getKey();
			GridCell start = robot.getLocation();
			GridCell dest = goal.getValue();

			// check that all robots and goals are non-null
			if (start == null || dest == null)
				throw new NullPointerException();
			
			// check that all goals are inside floor plan
			if (!floorPlan.hasCell(dest))
				throw new IllegalArgumentException();
		}
		
		// check that all goals are unique
		if (robot2dest.size() != (new HashSet<>(robot2dest.values())).size())
			throw new IllegalArgumentException();
				
		for (Entry<IGridRobot, GridCell> goal : robot2destSet){
			Entry<IGridRobot, Direction> step = nextStep(warehouse, goal.getKey(),
					goal.getValue());
			
			if (step != null)
				nextSteps.put(step.getKey(), step.getValue());
		}
		
		return nextSteps;
	}
	
	@Override
	public Entry<IGridRobot, Direction> nextStep(IWarehouse warehouse, IGridRobot robot, GridCell dest) {
		// iterate over goals
		GridCell start = robot.getLocation();

		// robot is already at destination
		if (start.equals(dest))
			return null;

		ArrayList<GridCell> path = shortestPath(warehouse, start, dest);
		GridCell nextCell = path.get(1);

		// check if the next step is onto a cell that already contains (or will
		// soon contain) a robot
		boolean cellIsFull = false, fullCellIsEmptying = false, cellIsFilling = false;
		
		IGridRobot bot, obstacle = null;
		GridCell botLocation;
		Direction botDir;
		Iterator<IGridRobot> botIter = warehouse.getRobots();
		Map<IGridRobot, Direction> movingRobots = warehouse.getRobotsInMotion();		
		
		while (botIter.hasNext()){
			bot = botIter.next();
			botLocation = bot.getLocation(); 

			if (botLocation.equals(nextCell)){
				cellIsFull = true;
				obstacle = bot;

				// check if robot currently on that cell is moving out of it
				if (movingRobots.containsKey(bot))
					fullCellIsEmptying = true;
			}
			
			// check if another robot is currently moving into that cell
			botDir = movingRobots.get(bot);
			if (botDir != null){
				if (botLocation.equals(GridRobot.oneCellOver(nextCell, DIRECTION.NORTH)) &&
					botDir.equals(DIRECTION.SOUTH) ||
					
					botLocation.equals(GridRobot.oneCellOver(nextCell, DIRECTION.SOUTH)) &&
					botDir.equals(DIRECTION.NORTH) ||
	
					botLocation.equals(GridRobot.oneCellOver(nextCell, DIRECTION.EAST)) &&
					botDir.equals(DIRECTION.WEST) ||
	
					botLocation.equals(GridRobot.oneCellOver(nextCell, DIRECTION.WEST)) &&
					botDir.equals(DIRECTION.EAST)){
					
					cellIsFilling = true;
				}
			}
		}
		
		if (cellIsFilling)
			return null;
		
		if (cellIsFull)
			if (fullCellIsEmptying){
				return new AbstractMap.SimpleEntry<IGridRobot, Direction>(robot, 
						cells2dir(start, path.get(1)));
			} else {
				// if there is currently a robot in the cell, that is not moving out
				// of it, see if that robot can be moved out
				if (cellIsFree(GridRobot.oneCellOver(nextCell, DIRECTION.NORTH), warehouse))
					return new AbstractMap.SimpleEntry<IGridRobot, Direction>(obstacle, 
							DIRECTION.NORTH);
				
				if (cellIsFree(GridRobot.oneCellOver(nextCell, DIRECTION.SOUTH), warehouse))
					return new AbstractMap.SimpleEntry<IGridRobot, Direction>(obstacle, 
							DIRECTION.SOUTH);
				
				if (cellIsFree(GridRobot.oneCellOver(nextCell, DIRECTION.EAST), warehouse))
					return new AbstractMap.SimpleEntry<IGridRobot, Direction>(obstacle, 
							DIRECTION.EAST);
				
				if (cellIsFree(GridRobot.oneCellOver(nextCell, DIRECTION.WEST), warehouse))
					return new AbstractMap.SimpleEntry<IGridRobot, Direction>(obstacle, 
							DIRECTION.WEST);
			}

		return new AbstractMap.SimpleEntry<IGridRobot, Direction>(robot, 
				cells2dir(start, path.get(1)));
	}
		
	

	
	/* Return whether a cell is free: if currently unoccupied, check that no robot
	 * is moving into it; if currently occupied by a robot, check that the robot is
	 * moving out of it
	 */
/*	private static boolean cellIsFree(GridCell cell, IWarehouse warehouse){
		if (!warehouse.getFloorPlan().hasCell(cell))
			return false;
		
		// check if cell contains a rack
		if (warehouse.getFloorPlan().getItem(cell) != null)
			return false;
		
		IGridRobot bot;
		GridCell botLocation;
		Direction botDir;
		Iterator<IGridRobot> botIter = warehouse.getRobots();
		Map<IGridRobot, Direction> movingRobots = warehouse.getRobotsInMotion();	
		
		while (botIter.hasNext()){
			bot = botIter.next();
			botLocation = bot.getLocation(); 
			
			if (botLocation.equals(cell)){	
				// check if robot currently on that cell is moving out of it
				if (!movingRobots.containsKey(bot))
					return false;
			}
			
			botDir = movingRobots.get(bot);
			if (botDir != null){
				// check if another robot is currently moving into that cell
				if (botLocation.equals(GridRobot.oneCellOver(cell, DIRECTION.NORTH)) &&
					botDir.equals(DIRECTION.SOUTH) ||
					
					botLocation.equals(GridRobot.oneCellOver(cell, DIRECTION.SOUTH)) &&
					botDir.equals(DIRECTION.NORTH) ||
	
					botLocation.equals(GridRobot.oneCellOver(cell, DIRECTION.EAST)) &&
					botDir.equals(DIRECTION.WEST) ||
	
					botLocation.equals(GridRobot.oneCellOver(cell, DIRECTION.WEST)) &&
					botDir.equals(DIRECTION.EAST)){
					
					return false;
				}
			}
		}
		
		return true;
	}
}

public class Runner implements IRunner, Runnable {
	
	private IWarehouse warehouse;
	private Queue<Entry<IGridRobot,GridCell>> robot2dest;
	private IPathPlanner planner;
	
	// lock to protect access to warehouse
	final Lock warehouseLock = new ReentrantLock();

	public Runner(IWarehouse warehouse, Map<IGridRobot,GridCell> robot2dest, IPathPlanner pp) {
		Set<Entry<IGridRobot, GridCell>> robot2destSet = robot2dest.entrySet();
		
		if (warehouse == null)
			throw new NullPointerException();
		this.warehouse = warehouse;
		
		IGrid<Rack> floorPlan = warehouse.getFloorPlan();
		
		// populate queue of robots and their destinations
		this.robot2dest = new ConcurrentLinkedQueue<>(robot2destSet);
		
		if (pp == null)
			throw new NullPointerException();
		this.planner = pp;

		// check that all goals are unique
		if (robot2dest.size() != (new HashSet<>(robot2dest.values())).size())
			throw new IllegalArgumentException();

		for (Entry<IGridRobot, GridCell> goal : robot2destSet){

			// check that all robots and goals are non-null
			if (goal.getKey() == null || goal.getValue() == null)
				throw new NullPointerException();
			
			// check that all goals are inside floor plan
			if (!floorPlan.hasCell(goal.getValue()))
				throw new IllegalArgumentException();
		}		
	}
	
	@Override
	public void run() {
		Entry<IGridRobot, GridCell> goal = this.robot2dest.poll();
		
		warehouseLock.lock();
		Entry<IGridRobot, Direction> next = this.planner.nextStep(warehouse, goal.getKey(), 
					goal.getValue());
		warehouseLock.unlock();

		
	}
	
	@Override
	public void irun() {
		

	}

}
*/
