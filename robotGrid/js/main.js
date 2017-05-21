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

// cell border thickness
const BORDER = 2;

/* selectors */
const world = "#warehouse";
const goal = '#robots img[id^="g"]';
const robot = '#robots img[id^="r"]';
const rack = "#rack-placeholder";

/* image files */
const robotImgs = ["img/r1.jpg","img/r2.jpg","img/r3.jpg","img/r4.jpg"];
const goalImgs = ["img/g1.jpg","img/g2.jpg","img/g3.jpg","img/g4.jpg"];
const rackImg = "img/rack.png";

/* possible cell states and corresponding functions
 */
const STATE = ["empty", "robot", "rack", "goal"];
const STATE_FUNC = [[clearCell, unclearCell], [addRobot, removeRobot], [addRack, removeRack],
		    [addGoal, removeGoal]];

const FREE_ROBOTS = [];
const FIXED_ROBOTS = [];
const FREE_GOALS = [];
const FIXED_GOALS = [];


/* Convert DOM coordinates to canvas coordinates
 * From: http://www.informit.com/articles/article.aspx?p=1903884&seqNum=6
 */
function windowToCanvas(canvas, x, y) {
    let bbox = canvas.getBoundingClientRect();

    return { x: x - bbox.left * (c.width  / bbox.width),
	     y: y - bbox.top  * (c.height / bbox.height)
	   };
}

/* Return the top-left coordinates/dimensions {x, y, width, height} of the cell that contains 
 * these coordinates, or null if they are on a border between two cells.
 */    
function getCellCoords(x, y) {
    if (x % cellDim == 0 || y % cellDim == 0)  // (x,y) is on the border between two cells
	return null;
    
    return { x: Math.floor(x / cellDim) * cellDim + BORDER,
	     y: Math.floor(y / cellDim) * cellDim + BORDER };
}

/* Return the indices {x, y} of the cell that contains these coordinates, or null if they are on
 * a border between two cells.
 */    
function getCellInds(x, y) {
    if (x % cellDim == 0 || y % cellDim == 0)  // (x,y) is on the border between two cells
	return null;
    
    return { x: Math.floor(x / cellDim), y: Math.floor(y / cellDim) };
}

function clearCell(x, y) {
    ctx.clearRect(x*cellDim + BORDER, y*cellDim + BORDER, cellDim - BORDER*2, cellDim - BORDER*2);
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
	
	ctx.drawImage(document.getElementById(robotID),
		      x*cellDim + BORDER*2, y*cellDim + BORDER*2,
		      cellDim - BORDER*4, cellDim - BORDER*4);

	$(robot + '[id="' + robotID + '"]').prop("draggable", false);
	$(robot + '[id="' + robotID + '"]').css("opacity", 0.5);
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

	$(robot + '[id="' + robotID + '"]').prop("draggable", true);
	$(robot + '[id="' + robotID + '"]').css("opacity", 1);
    }
}

function addRack(x, y) {
    ctx.drawImage(document.getElementById("rack-placeholder"),
		  x*cellDim + BORDER*2, y*cellDim + BORDER*2,
		  cellDim - BORDER*4, cellDim - BORDER*4);
}

function removeRack(x, y) {
    clearCell(x,y);
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
	
	ctx.drawImage(document.getElementById(goalID),
		      x*cellDim + BORDER*2, y*cellDim + BORDER*2,
		      cellDim - BORDER*4, cellDim - BORDER*4);

	$(goal + '[id="' + goalID + '"]').prop("draggable", false);
	$(goal + '[id="' + goalID + '"]').css("opacity", 0.5);
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

	$(goal + '[id="' + goalID + '"]').prop("draggable", true);
	$(goal + '[id="' + goalID + '"]').css("opacity", 1);
    }
}

/* Draw the canvas "warehouse" grid of the specified dimensions, with all cells empty. */
function resizeGrid(height, width) {
    ctx.clearRect(0, 0, $(world).width(), $(world).height()); // clear canvas

    cellDim = Math.round(Math.min((screen.height * 0.6)/height, (screen.width * 0.8)/width));
    
    // resize canvas
    $(world).prop("height", cellDim * height);
    $(world).prop("width", cellDim * width);

    ctx.lineWidth = BORDER;
    ctx.strokeStyle = 'Grey';

    wh = [];
    let i, j, row;
    for (i = 0; i < height; i++){
	row = [];
	for (j = 0; j < width; j++){
	    ctx.strokeRect(j*cellDim, i*cellDim, cellDim, cellDim);
	    row.push([STATE.indexOf("empty"), undefined]);
	}
	wh.push(row);
    }

    // also resize robot and grid icons
    $(robot).width(cellDim * 0.75);
    $(goal).width(cellDim * 0.75);
}

/* Toggle the state of the cell that contains these coordinates, according to the following scheme:
 * - if the cell contains a robot, goal, or rack, make it empty
 * - if the cell is empty, create a rack
 */
function toggleCell(coords) {
    let x = Math.round(coords.x);
    let y = Math.round(coords.y);

    let inds = getCellInds(x, y);
    if (inds == null) // (x,y) is on the border between two cells
	return;

    let prevState = wh[inds.y][inds.x][0];
    // cell is empty, so create a rack
    if (STATE[prevState] == "empty") {
	setCell(coords, "rack");
	
    } else {
	// otherwise, make cell empty
	setCell(coords, "empty");
    }
}

/* Set the state of the cell that contains these coordinates, with the robotID if necessary. */
function setCell(coords, newState, robotID) {
    let x = Math.round(coords.x);
    let y = Math.round(coords.y);

    let inds = getCellInds(x, y);
    if (inds == null) // (x,y) is on the border between two cells
	return;

    // call cell remove state function of previous state
    let prevState = wh[inds.y][inds.x][0];
    let prevRobotID = wh[inds.y][inds.x][1];
    STATE_FUNC[prevState][1](inds.x, inds.y, prevRobotID);

    // update state in wh array					     
    wh[inds.y][inds.x][0] = STATE.indexOf(newState);
    
    // call cell state function of new state, to update canvas
    STATE_FUNC[STATE.indexOf(newState)][0](inds.x, inds.y, robotID);
}


// canvas-related variables
let c = document.getElementById("warehouse");
let ctx = c.getContext("2d");

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

// add rack image to placeholder
$(rack).prop("src", rackImg);

// set the min/max/default values for the grid size inputs
$("#grid-height").val(DEF_HEIGHT);
$("#grid-height").prop("min", String(MIN_HEIGHT));
$("#grid-height").prop("max", String(MAX_HEIGHT));

$("#grid-width").val(DEF_WIDTH);
$("#grid-width").prop("min", String(MIN_WIDTH));
$("#grid-width").prop("max", String(MAX_WIDTH));

// create grid of default size
let height = DEF_HEIGHT, width = DEF_WIDTH, cellDim;

// keep track of state as array of [state index, robot ID]
let wh;
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

    if (!error) {
	height = heightIn;
	width = widthIn;
	resizeGrid(height, width);
    }
});

// set the min/max/step/default values for the duration of each step
$("#speed").prop("min", String(MIN_DURATION));
$("#speed").prop("max", String(MAX_DURATION));
$("#speed").prop("step", String(STEP_DURATION));

let duration = DEF_DURATION;
$("#speed").val(duration);

// listen for change in duration
$("#speed").change(function() {
    duration = $("#speed").val();
});

// listen for dragging and dropping robots/goals into cells

$(robot).on("dragstart", function(e) {
    e.originalEvent.dataTransfer.effectAllowed = "copy";
    e.originalEvent.dataTransfer.setData("text", e.target.id);
});
$(goal).on("dragstart", function(e) {
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

$(world).on("drop", function(e) {
    e.preventDefault();
    e = e.originalEvent;
    
    let ID = e.dataTransfer.getData("text");

    if (ID[0] == "r")
	// add robot to cell
	setCell(windowToCanvas(this, e.clientX, e.clientY), "robot", ID);
    else
	// add goal to cell
	setCell(windowToCanvas(this, e.clientX, e.clientY), "goal", ID);
});

// listen for cell clicks to toggle cell state
$(world).click(function(e) {
    toggleCell(windowToCanvas(this, e.clientX, e.clientY));
});

// listen for step button click to step through simulation
$("#step-btn").click(function() {

});

// listen for run button click to start animation
let intervalID;
$("#run-btn").click(function() {
    
    intervalID = setTimeout(function timedUpdate() {
    }, duration);
});
