/***********************************************************************
* Javascript implementation of Conway's Game of Life, based on 
* http://www.cs.mcgill.ca/~cs202/2011-01/assignments/specifications/a4/a4--specification.pdf
*
* Patterns stored in PatternsDict.js
*
* 15.05.2017 G.S.C.
***********************************************************************/

// catch simple errors
"use strict";

const FUNCTIONAULTSPEED = 5;
const FUNCTIONAULTLENGTH = 1000;
const SLEEP_TIME = 0.04; 	// Sleep time (in s) between displaying each state
					// May need to be adjusted for each system! 
					// Used because states were being printed too rapidly 
					// to appreciate the evolution (can also compensate  
					// for this issue by increasing the number of times a 
					// state is displayed, but sleeping seems to work better)

// world heights and widths
const DEF_HEIGHT = 24;
const DEF_WIDTH = 80;

const MIN_HEIGHT = 1;
const MAX_HEIGHT = 50;

const MIN_WIDTH = 1;
const MAX_WIDTH = 150;

// cell representations
const LIVE_CELL = 'o';
const DEAD_CELL = '.';

const ALIVE = true;
const DEAD = false;

function Cell(status, environment, vcoord, hcoord) {
    /* Initialize all the attributes of this Cell with the values of 
     * the four parameters: a boolean status, an Environment environment, 
     * an int vertical coordinate, an int horizontal coordinate.
     */
    this.status = status;
    this.home = environment;
    this.vcoord = vcoord;
    this.hcoord = hcoord;

    // Return a boolean indicating the status of this Cell.
    function isAlive() {
	return this.status;
    }

    // Accept a boolean newStatus and update the status of this Cell accordingly.
    function setStatus(newStatus) {
	this.status = newStatus;
    }

    // Return a String representation of this Cell.
    function toStr() {
	if (this.status == ALIVE)
	    return LIVE_CELL;
	return DEAD_CELL;
    }

    // Return an int that represents the number of live neighbours around this Cell.
    function getNumLiveNeighbours() {
		
	let total = 0;
		
	if (this.home.isWithinBoundsV(this.vcoord - 1)) {
	    total += this.home.getCell(this.vcoord - 1, this.hcoord).isAlive(); //T
			
	    if (this.home.isWithinBoundsH(this.hcoord - 1))
		total += this.home.getCell(this.vcoord - 1, this.hcoord - 1).isAlive(); //TL
	    
	    if (this.home.isWithinBoundsH(this.hcoord + 1))
		total += this.home.getCell(this.vcoord - 1, this.hcoord + 1).isAlive(); //TR
	}
	
	if (this.home.isWithinBoundsV(this.vcoord + 1)) {
	    total += this.home.getCell(this.vcoord + 1, this.hcoord).isAlive(); //B
	    
	    if (this.home.isWithinBoundsH(this.hcoord - 1))
		total += this.home.getCell(this.vcoord + 1, this.hcoord - 1).isAlive(); //BL
	    
	    if (this.home.isWithinBoundsH(this.hcoord + 1))
		total += this.home.getCell(this.vcoord + 1, this.hcoord + 1).isAlive(); //BR
	}
		
	if (this.home.isWithinBoundsH(this.hcoord - 1))
	    total += this.home.getCell(this.vcoord, this.hcoord - 1).isAlive(); //L
	
	if (this.home.isWithinBoundsH(this.hcoord + 1))
	    total += this.home.getCell(this.vcoord, this.hcoord + 1).isAlive(); //R		
		
	return total;
    }

    /* Return a new Cell with the same attributes as this Cell, except 
     * that its home attribute is set to Environment e.
     */
    function getCellCopy(e) {
	return new Cell(this.status, e, this.vcoord, this.hcoord);
    }
}


function Environment(height, width, c) {
    /* Accept an int height and width and use these to initialize a 
     * population of Cell objects that are all dead.
     * Or accept c, a 2D iterable of Cell objects, and assign a copy of c to the 
     * population attribute of this Environment.
     */
    if (c != undefined) {
	this.population = [];
	
	var i, j;
	for (i in c) {
	    let newRow = [];
	    for (j in i) {
		newRow.push(j.getCellCopy(this));
	    }
	    this.population.push(newRow);
	}

    } else {
	this.population = new Array(height).fill(new Array(width).fill(DEAD));
    }

    /* Accept two int parameters, a vertical coordinate and a horizontal 
     * coordinate, and return the Cell that resides at those coordinates 
     * in the population grid.
     */    
    function getCell(vcoord, hcoord) {
	return this.population[vcoord][hcoord];
    }

    /* Return true if the int coord is a valid vertical coordinate in 
     * the population grid of this Environment.
     */
    function isWithinBoundsV(coord) {
	return coord < this.population.length && coord > -1;
    }

    /* Return true if the int coord is a valid horixontal coordinate in 
     * the population grid of this Environment.
     */
    function isWithinBoundsH(coord) {
	if (this.population.length > 0)
	    return coord < this.population[0].length && coord > -1;
	return false;
    }

    /* Return one String that represents the current state of the 
     * population of this Environment.
     */
    function toStr() {
	let rep = "";
	
	var i, j;
	for (i in this.population) {
	    for (j in i) {
		rep += j.toStr();
	    } 
	    rep += "\n";
	}
	
	return rep;
    }

    /* Update the status of the Cell that appears at the coordinates 
     * (vcoord,hcoord) according to the following rules:
     * -Any live cell with fewer than two live neighbours in the most 
     * recent environment state dies, as if caused by under-population
     * -Any live cell with two or three live neighbours in the most recent 
     * environment state lives on to the next generation
     * -Any live cell with more than three live neighbours in the most 
     * recent environment state dies, as if by overcrowding
     * -Any dead cell with exactly three live neighbours in the most 
     * recent environment state becomes a live cell, as if by reproduction.
     */
    function updateCellStatus(vcoord, hcoord) {
	let numLiveNeighbours = this.population.getCell(vcoord, hcoord).getNumLiveNeighbours();
		
	if (numLiveNeighbours < 2 || numLiveNeighbours > 3)
	    this.population.getCell(vcoord, hcoord).setStatus(DEAD);
	
	else if (numLiveNeighbours == 3)
	    this.population.getCell(vcoord, hcoord).setStatus(ALIVE);
    }

    /* Save a copy of this Environment in a local variable named snapshot 
     * and then update the status of each Cell in this Environment with 
     * the help of the snapshot.
     */
    function updatePopulation() {
	let snapshot = new Environment(-1, -1, this);

	var i, j;
	for (i = 0; i < this.population.length; i++) {
	    for (j = 0; j < this.population[0].length; j++) {
		snapshot.updateCellStatus(i, j);
	    }
	}
    }    
}


/* Update the Environment environment to contain the pattern of 
 * live Cell objects at the coordinates (vcoord,hcoord). The given
 * coordinates correspond to the location of the top-left corner of 
 * the pattern in the Environment.
 * If the given coordinates are invalid for the given Environment, 
 * return false. Otherwise, once a pattern is successfully added to
 * the given Environment, return true.
 */
function makePattern(environment, vcoord, hcoord, pattern) {
    if (!environment.isWithinBoundsV(vcoord) ||
	!environment.isWithinBoundsH(hcoord) ||
	!environment.isWithinBoundsV(vcoord + pattern.length - 1) ||
	!environment.isWithinBoundsH(hcoord + pattern[0].length - 1))
	return false;

    var v, h;
    for (v = 0; v < pattern.length; v++) {
	for (h = 0; h < pattern[0].length; h++) {
	    environment.population[vcoord + v][hcoord + h].setStatus(pattern[v][h]);
	}
    }
    
    return true;
}

/* Given steps and speed, successively print the first steps states 
   of the Environment saved in world, repeating each state speed 
   times, with an empty line in between each displayed state.
   Given speed but not steps, successively print the states saved in
   history, repeating each state speed times, with an empty line in 
   between each displayed state.
*/
/*function displayWorld(steps=None, speed=None) {
    if speed != None {
	// first displayWorld() method, successively prints the first 
	// steps states of the Environment saved in world
	if steps != None {
	    for i in range(steps) {
		for j in range(speed) {
		    print(this.world, "\n")
		    time.sleep(SLEEPTIME)
		    this.world.updatePopulation()
		    
		    // second displayWorld() method, successively print the states 
		    // saved in history
		    else {
			for state in this.history {
			    for j in range(speed) {
				print(state, "\n")
				time.sleep(SLEEPTIME)
			    }}}}}}}}
*/
/* Print in reverse order the states saved in history, repeating 
 * each state speed times, with an empty line in between each 
 * displayed state.
 */
/*function displayWorldReverse(speed) {
    for state in this.history[ ::-1] {
	for j in range(speed) {
	    print(state, "\n")
	    time.sleep(SLEEPTIME)
	}}}
*/
/* If patternName matches (in a case-insensitive fashion) the name 
 * of a pattern declared as a constant in the Patterns class, add 
 * that pattern at the coordinates (vcoord,hcoord) to the Environment 
 * stored in world and return true. If the coordinates are invalid 
 * or if patternName doesn't match any pattern names in Patterns, 
 * return false.
 */
/*function parsePatterns(patternName, vcoord, hcoord) {
    vcoordInt = int(vcoord)
    hcoordInt = int(hcoord)
    
    // assumes that the all patterns (and only patterns) are stored in
    // PatternsDict.py
    if patternName.upper() in dir(PatternsDict) \
    and isinstance(getattr(PatternsDict,patternName.upper()),tuple) {
	return Patterns.makePattern(this.world, vcoordInt, hcoordInt, 
				    getattr(PatternsDict,patternName.upper()))
	return false
    }}
*/
/* Store each state of Environment evolution as a String in history 
 * until either the states no longer change (the system is no longer 
 * evolving) or the maximum number of states is reached, whichever 
 * comes first.
 */
/*function recordSimulation(maxStates) {
    this.history = []
    while len(this.history) < maxStates {
	this.world.updatePopulation()
	this.history += [str(this.world)]
	
	if (len(this.history) > 1) \
	and (this.history[-1] == this.history[-2]) {
	    break
	}}}		
*/

// set the min/max/default values for the grid size inputs

$("#grid-height").value = DEF_HEIGHT;
$("#grid-height").min = MIN_HEIGHT;
$("#grid-height").max = MAX_HEIGHT;

$("#grid-width").value = DEF_WIDTH;
$("#grid-width").min = MIN_WIDTH;
$("#grid-width").max = MAX_WIDTH;

// set grid of default size

function resizeGrid(height, width) {
    let rows = "";

    var i, j;
    for (i = 0; i < height; i++){
	rows += "<tr>\n";
	for (j = 0; j < width; j++){
	    rows += "<td>" + LIVE_CELL + "</td>\n";
	}
	rows += "</tr>\n";
    }
    
    $("#grid").html(rows);
    
}

resizeGrid(DEF_HEIGHT, DEF_WIDTH);

// listen for resize button click to resize grid
$("#resize-btn").click(function() {
    resizeGrid($("#grid-height").value, $("#grid-width").value);
});

