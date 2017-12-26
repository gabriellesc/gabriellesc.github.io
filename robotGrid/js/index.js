/***********************************************************************
 * Javascript implementation of simplified robot warehouse navigation, based on 
 * https://github.com/csc301-fall-2016/a5-fake2
 *
 * 21.05.2017 G.S.C.
 ***********************************************************************/

"use strict";

/* running parameters */

// duration (ms) of each state
const DEF_DURATION = 500;
const MIN_DURATION = 100;
const MAX_DURATION = 5000;
const STEP_DURATION = 100; // step between durations

/* world heights and widths */

// defaults
const DEF_HEIGHT = 5;
const DEF_WIDTH = 8;

// min/max allowed for user selection
const MIN_HEIGHT = 1;
const MAX_HEIGHT = 25;
const MIN_WIDTH = 1;
const MAX_WIDTH = 50;

// minimum cell dimension to avoid cells getting too small in large grids
const MIN_DIM = 70;

/* selectors */
const world = "#warehouse";
const icons = "#robots img";
const goal = '#robots img[id^="g"]';
const robot = '#robots img[id^="r"]';

/* image files */
const robotImgs = ["img/r1.jpg","img/r2.jpg","img/r3.jpg","img/r4.jpg"];
const goalImgs = ["img/g1.jpg","img/g2.jpg","img/g3.jpg","img/g4.jpg"];
const rackImg = 'img/rack.png';

/* functions corresponding to cell states (needs to be in the same order as STATE array)
 */
const STATE_FUNC = [[clearCell, unclearCell], [addRobot, removeRobot], [addRack, removeRack],
		    [addGoal, removeGoal]];

const FREE_ROBOTS = [];
const FIXED_ROBOTS = [];
const FREE_GOALS = [];
const FIXED_GOALS = [];


/* Convert grid coordinates to a DOM selector for corresponding grid cell. */
function c2s(x, y) {
    return '.grid-cell[x="' + x + '"][y="' + y + '"]';
}

/* Convert grid coordinates to HTML for corresponding grid cell with state. */
function c2html(x, y, state, ID) {
    let cell = 'class="grid-cell';
    if (y == 0)
	cell += ' top-row';
    if (x == 0)
	cell += ' left-col';
    
    cell += '" x="' + x + '" y="' + y + '">';

    if (state == "empty")
	cell = '<div ' + cell + '</div>';

    else if (state == "robot" || state == "goal")
	cell = '<img src="' + $(icons + '[id="' + ID + '"]').prop("src") + '" ' + cell;
    
    else if (state == "rack")
	cell = '<img src="' + rackImg + '" ' + cell;

    return cell;
}

function clearCell(x, y) {
    $(c2s(x, y)).replaceWith(c2html(x, y, "empty"));
}

function unclearCell() {};

function addRobot(x, y, robotID) {
    if (FREE_ROBOTS.length > 0) {	
	// remove robot from free robots array
	// if a robot is not specified, add the first free robot
	if (robotID == undefined)
	    robotID = FREE_ROBOTS.shift();
	else
	    FREE_ROBOTS.splice(FREE_ROBOTS.indexOf(robotID), 1);

	FIXED_ROBOTS.push(robotID);

	// update wh array with robot ID
	wh[y][x][1] = robotID;

	// create HTML for new robot element
	$(c2s(x, y)).replaceWith(c2html(x, y, "robot", robotID));
	
	$(c2s(x, y)).css({justifySelf: "center", alignSelf: "center",
		    height: cellDim, width: cellDim});

	$(icons + '[id="' + robotID + '"]').prop("draggable", false);
	$(icons + '[id="' + robotID + '"]').css("opacity", 0.5);
    }
}

function removeRobot(x, y, robotID) {
    clearCell(x,y);
    
    if (robotID != undefined) {    
	// remove robot from fixed robots array and add to free robots array
	FIXED_ROBOTS.splice(FIXED_ROBOTS.indexOf(robotID), 1);
	FREE_ROBOTS.push(robotID);

	// update wh array
	wh[y][x][1] = undefined;

	$(icons + '[id="' + robotID + '"]').prop("draggable", true);
	$(icons + '[id="' + robotID + '"]').css("opacity", 1);
    }
}

function addRack(x, y) {
    // create HTML for new rack element
    $(c2s(x, y)).replaceWith(c2html(x, y, "rack"));

    $(c2s(x, y)).css({justifySelf: "center", alignSelf: "center",
		      height: cellDim, width: cellDim});
}

function removeRack(x, y) {
    clearCell(x, y);
}

function addGoal(x, y, goalID) {
    if (FREE_GOALS.length > 0) {	
	// remove goal from free goals array
	// if a goal is not specified, add the first free goal
	if (goalID == undefined)
	    goalID = FREE_GOALS.shift();
	else
	    FREE_GOALS.splice(FREE_GOALS.indexOf(goalID), 1);

	FIXED_GOALS.push(goalID);

	// update wh array with goal ID
	wh[y][x][1] = goalID;

	// create HTML for new goal element
	$(c2s(x, y)).replaceWith(c2html(x, y, "goal", goalID));
	
	$(c2s(x, y)).css({justifySelf: "center", alignSelf: "center",
		    height: cellDim, width: cellDim});
	
	$(icons + '[id="' + goalID + '"]').prop("draggable", false);
	$(icons + '[id="' + goalID + '"]').css("opacity", 0.5);
    }    
}

function removeGoal(x, y, goalID) {
    clearCell(x,y);

    if (goalID != undefined) {    
	// remove goal from fixed goals array and add to free goals array
	FIXED_GOALS.splice(FIXED_GOALS.indexOf(goalID), 1);
	FREE_GOALS.push(goalID);

	// update wh array
	wh[y][x][1] = undefined;

	$(icons + '[id="' + goalID + '"]').prop("draggable", true);
	$(icons + '[id="' + goalID + '"]').css("opacity", 1);
    }
}

/* Draw the canvas "warehouse" grid of the specified dimensions, with all cells empty. */
function resizeGrid(height, width) {
    // calculate new cell dimension
    cellDim = Math.max(
	Math.round(Math.min((screen.height * 0.6)/height, (screen.width * 0.8)/width)),
	MIN_DIM);

    // re-define the number/size of the grid columns and rows
    $(world).css("grid-template-columns", (cellDim + "px ").repeat(width));
    $(world).css("grid-template-rows", (cellDim + "px ").repeat(height));

    wh = [];
    let i, j, row, cells = "";
    for (i = 0; i < height; i++){
	row = [];
	
	for (j = 0; j < width; j++){
	    cells += c2html(j, i, "empty");

	    row.push([STATE.indexOf("empty"), undefined]);
	}
	wh.push(row);
    }
    
    $(world).html(cells);
    
    // also resize robot and grid icons
    $(robot).width(cellDim * 0.75);
    $(goal).width(cellDim * 0.75);
}

/* Toggle the state of the cell that contains these coordinates, according to the following scheme:
 * - if the cell contains a robot, goal, or rack, make it empty
 * - if the cell is empty, create a rack
 */
function toggleCell(x, y) {
    let prevState = wh[y][x][0];
    // cell is empty, so create a rack
    if (STATE[prevState] == "empty") {
	setCell(x, y, "rack");
	
    } else {
	// otherwise, make cell empty
	setCell(x, y, "empty");
    }
}

/* Set the state of the cell that contains these coordinates, with the robotID if necessary. */
function setCell(x, y, newState, robotID) {
    // call cell remove state function of previous state
    let prevState = wh[y][x][0];
    let prevRobotID = wh[y][x][1];
    STATE_FUNC[prevState][1](x, y, prevRobotID);

    // update state in wh array					     
    wh[y][x][0] = STATE.indexOf(newState);
    
    // call cell state function of new state, to update canvas
    STATE_FUNC[STATE.indexOf(newState)][0](x, y, robotID);
}

/* Simulate a robot's motion from source to target cell. */
function moveRobot(source, target, robotID) {
    window.requestAnimationFrame();
    /*source.x target.x

    if () {
	window.requestAnimationFrame(draw);
    }*/
}


function simulate() {
    // Web worker supported by browser
    if (typeof(Worker) !== "undefined") {

	var worker = new Worker('robotMotion.js');

/*	worker.onmessage = function(e) {
	    document.getElementById("PiValue").innerHTML = e.data.PiValue;
	};
	worker.onerror = function(e) {
	    alert('Error: Line ' + e.lineno + ' in ' + e.filename + ': ' + e.message);
	};

	//start the worker
	worker.postMessage({'cmd':   'CalculatePi',
			    'value': document.getElementById("loop").value
			   });
    }
	
    } else {
	
    } */
    }
}


// add robot/goal images to placeholder
let i;
for (i = 0; i < robotImgs.length; i++) {
    $("#robots div").append('<img id="r' + i + '" src="' + robotImgs[i] + '" />');
    $("#robots div").append('<img id="g' + i + '" src="' + goalImgs[i] + '" />');
}

// add free robots/goals to free robots/goals array, initially
$(robot).each(function() {
    FREE_ROBOTS.push($(this).prop("id"));
});
$(goal).each(function() {
    FREE_GOALS.push($(this).prop("id"));
});

// set the min/max/default values for the grid size inputs
$("#grid-height").val(DEF_HEIGHT);
$("#grid-height").prop("min", String(MIN_HEIGHT));
$("#grid-height").prop("max", String(MAX_HEIGHT));

$("#grid-width").val(DEF_WIDTH);
$("#grid-width").prop("min", String(MIN_WIDTH));
$("#grid-width").prop("max", String(MAX_WIDTH));

// create grid of default size
let height = DEF_HEIGHT, width = DEF_WIDTH, cellDim;

resizeGrid(height, width);

// listen for resize button click to resize grid
$("#resize-btn").click(function() {    
    // validate size inputs
    let heightIn = Number($("#grid-height").val());
    let widthIn = Number($("#grid-width").val());
    let error = false;
    
    if (heightIn > MAX_HEIGHT || heightIn < MIN_HEIGHT) {
	$("#grid-height-group").addClass("has-error");
	error = true;
    } else {
	$("#grid-height-group").removeClass("has-error");
    }

    if (widthIn > MAX_WIDTH || widthIn < MIN_WIDTH) {
	$("#grid-width-group").addClass("has-error");
	error = true;
    } else {
	$("#grid-width-group").removeClass("has-error");
    }

    // clear the robot/goal input states
    $(icons).prop("draggable", true);
    $(icons).css("opacity", 1);
    
    if (!error) {
	height = heightIn;
	width = widthIn;
	resizeGrid(height, width);
    }
});

// set the min/max/step/default values for the duration of each step
// subtract the value from the max duration so that the slider is more intuitive
// (as the slider value increases, duration decreases, i.e. simulation gets faster)
$("#speed").prop("min", "0");
$("#speed").prop("max", String(MAX_DURATION - MIN_DURATION));
$("#speed").prop("step", String(STEP_DURATION));

let duration = DEF_DURATION;
$("#speed").val(duration);

// listen for change in duration
$("#speed").change(function() {
    duration = MAX_DURATION - $("#speed").val();
});

// listen for dragging and dropping robots/goals into cells

$(icons).on("dragstart", function(e) {
    e.originalEvent.dataTransfer.effectAllowed = "copy";
    e.originalEvent.dataTransfer.setData("text", e.target.id);
});

// cancel the default dragover/dragenter events
$(world).on("dragover", function(e) {
    e.preventDefault();
});
$(world).on("dragenter", function(e) {
    e.preventDefault();
});

$(world).on("drop", ".grid-cell", function(e) {
    e.preventDefault();
    e = e.originalEvent;
    
    let ID = e.dataTransfer.getData("text");

    if (ID[0] == "r")
	// add robot to cell
	setCell($(this).attr("x"), $(this).attr("y"), "robot", ID);
    else
	// add goal to cell
	setCell($(this).attr("x"), $(this).attr("y"), "goal", ID);
});

// listen for cell clicks to toggle cell state
$(world).on("click", ".grid-cell", function(e) {
    toggleCell($(this).attr("x"), $(this).attr("y"));
});

// listen for step button click to step through simulation
$("#step-btn").click(function() {
    pathPlanner(ctx);
});

// listen for run button click to start animation
let intervalID;
$("#run-btn").click(function() {
    
    intervalID = setTimeout(function timedUpdate() {
    }, duration);
});
