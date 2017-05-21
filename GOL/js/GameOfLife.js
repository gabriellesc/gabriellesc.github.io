/***********************************************************************
* Javascript implementation of Conway's Game of Life, based on 
* http://www.cs.mcgill.ca/~cs202/2011-01/assignments/specifications/a4/a4--specification.pdf
*
* Patterns stored in PatternsDict.js
*
* 15.05.2017 G.S.C.
***********************************************************************/

"use strict";

/* running parameters */

const DEF_STEPS = 100;
const MIN_STEPS = 1;

// duration (ms) of each state
const DEF_DURATION = 500;
const MIN_DURATION = 100;
const MAX_DURATION = 5000;
const STEP_DURATION = 100; // step between durations

/* world heights and widths */

// defaults
const DEF_HEIGHT = 24;
const DEF_WIDTH = 60;

// min/max allowed for user selection
const MIN_HEIGHT = 1;
const MAX_HEIGHT = 50;
const MIN_WIDTH = 1;
const MAX_WIDTH = 100;

// cell border thickness
const BORDER = 1;

/* selectors */
const world = "#world";

/* display */
const alive = "black";
const dead = "white";


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

/* Return 0 if the cell at these indices is dead (or does not exist), or 1 otherwise.
*/
function isAlive(x, y, env) {
    return x >= 0 && y >= 0 && x < width && y < height && env[y][x];
}

// Return an int that represents the number of live neighbours around this cell.
function getNumLiveNeighbours(x, y, env) {
    let total = 0;

    // cell has neighbour(s) below
    total += isAlive(x, y + 1, env);

    // cell has neighbour below left
    total += isAlive(x - 1, y + 1, env);
    
    // cell has neighbour below right
    total += isAlive(x + 1, y + 1, env);

    // cell has neighbour(s) above
    total += isAlive(x, y - 1, env);

    // cell has neighbour above left
    total += isAlive(x - 1, y - 1, env);

    // cell has neighbour above right
    total += isAlive(x + 1, y - 1, env);

    // cell has neighbour(s) left
    total += isAlive(x - 1, y, env);

    // cell has neighbour(s) right
    total += isAlive(x + 1, y, env);

    return total;
}

/* Update the status of the cell in the current world according to the following rules:
 * - Any live cell with fewer than two live neighbours in the most 
 * recent environment state dies, as if caused by under-population
 * - Any live cell with two or three live neighbours in the most recent 
 * environment state lives on to the next generation
 * - Any live cell with more than three live neighbours in the most 
 * recent environment state dies, as if by overcrowding
 * - Any dead cell with exactly three live neighbours in the most 
 * recent environment state becomes a live cell, as if by reproduction
 */
function updateCellStatus(x, y, snapshot) {
    let dims = getCellCoords(x, y);
    let inds = getCellInds(x, y);
    let numLiveNeighbours = getNumLiveNeighbours(inds.x, inds.y, snapshot);

    if (numLiveNeighbours < 2 || numLiveNeighbours > 3) {
	env[inds.y][inds.x] = false;
	ctx.fillStyle = dead;
	ctx.fillRect(dims.x, dims.y, cellDim - BORDER*2, cellDim - BORDER*2);
	
    } else if (numLiveNeighbours == 3) {
	env[inds.y][inds.x] = true;
	ctx.fillStyle = alive;
	ctx.fillRect(dims.x, dims.y, cellDim - BORDER*2, cellDim - BORDER*2);
    }
}

/* Update the status of all cells based on the previous state of the world. */
function updateWorld(snapshot) {
    let i, j;
    for (i = 0; i < width; i++) {
	for (j = 0; j < height; j++) {
	    updateCellStatus(i*cellDim + 1, j*cellDim + 1, snapshot);
	}
    }
}
    
/* Draw the canvas "world" grid of the specified dimensions, with all cells dead.
 */
function resizeGrid(height, width) {
    ctx.clearRect(0, 0, $(world).width(), $(world).height()); // clear canvas

    cellDim = Math.round(Math.min((screen.height * 0.9)/height, (screen.width * 0.9)/width));
    
    // resize canvas
    $(world).prop("height", cellDim * height);
    $(world).prop("width", cellDim * width);
    
    ctx.fillStyle = 'Grey';
    ctx.fillRect(0, 0, $(world).width(), $(world).height());
    
    ctx.fillStyle = dead;

    env = [];
    let i, j, row;
    for (i = 0; i < height; i++){
	row = [];
	for (j = 0; j < width; j++){
	    ctx.fillRect(j*cellDim + BORDER, i*cellDim + BORDER,
			 cellDim - BORDER*2, cellDim - BORDER*2);
	    row.push(false);
	}
	env.push(row);
    }
}

/* Toggle the state of the cell that contains these coordinates. */
function toggleCell(coords) {
    let x = Math.round(coords.x);
    let y = Math.round(coords.y);

    let inds = getCellInds(x, y);
    if (inds == null) // (x,y) is on the border between two cells
	return;

    env[inds.y][inds.x] = !isAlive(inds.x, inds.y, env); // update env array
    
    ctx.fillStyle = isAlive(inds.x, inds.y, env) ? alive : dead;
    
    let dims = getCellCoords(x, y);
    ctx.fillRect(dims.x, dims.y, cellDim - BORDER*2, cellDim - BORDER*2);
}

/* Restore the previously-saved states of a group of cells (after previewing a pattern in this
 * group of cells).
 */
function restorePrevState() {
    let cell;
    while (prevState.length > 0) {
	cell = prevState.pop();

	ctx.fillStyle = cell[2] ? alive : dead;
	ctx.fillRect(cell[0], cell[1], cellDim - BORDER*2, cellDim - BORDER*2);	
    }
}

/* Draw pattern as overlay on grid canvas. If perm is true, make the pattern permanent. */
function drawPattern(pattern, origin, perm) {
    let inds = getCellInds(origin.x, origin.y);
    if (inds == null) // (x,y) is on the border between two cells
	return;

    let dims = getCellCoords(origin.x, origin.y);

    let i, j;
    for (i = 0; i < pattern.length; i++) {
	for (j = 0; j < pattern[0].length; j++) {

	    if (!perm) {
		// save previous state of these cells
		prevState.push([dims.x + j*cellDim, dims.y + i*cellDim,
				isAlive(inds.x + j, inds.y + i, env)]);

		ctx.fillStyle = pattern[i][j] ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.15)";
		
	    } else {
		env[inds.y + i][inds.x + j] = pattern[i][j];
		
		ctx.fillStyle = pattern[i][j] ? alive : dead;
	    }
	    
	    ctx.fillRect(dims.x + j*cellDim, dims.y + i*cellDim,
			 cellDim - BORDER*2, cellDim - BORDER*2);
	}
    }
}

// canvas-related variables
let c = document.getElementById("world");
let ctx = c.getContext("2d");

// set the min/max/default values for the grid size inputs
$("#grid-height").val(DEF_HEIGHT);
$("#grid-height").prop("min", String(MIN_HEIGHT));
$("#grid-height").prop("max", String(MAX_HEIGHT));

$("#grid-width").val(DEF_WIDTH);
$("#grid-width").prop("min", String(MIN_WIDTH));
$("#grid-width").prop("max", String(MAX_WIDTH));

// create grid of default size
let height = DEF_HEIGHT, width = DEF_WIDTH, cellDim;

// keep track of state as array
let env = Array(height).fill(Array(width).fill(false));

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

// create a drop-down menu of known patterns
let pattern;
for (pattern in patterns)
    $("#pattern-menu").append("<option>" + pattern + "</option>");

// listen for cell clicks to toggle cell state
$(world).click(function(e) {
    // check whether a pattern is selected
    let patternName = $("#pattern-menu").val();
    
    if (patternName == "-"){
	toggleCell(windowToCanvas(this, e.clientX, e.clientY));
	
    } else {
	// if a pattern is being previewed, make the pattern permanent
	drawPattern(patterns[patternName], windowToCanvas(this, e.clientX, e.clientY), true);
    }
});

let prevState = [];
// listen for a hover over the grid to preview pattern
$(world).on("mousemove", function(e) {
    // restore the state before the previous preview
    restorePrevState();
    
    // check that a pattern is selected
    let patternName = $("#pattern-menu").val();
    if (patternName != "-"){
	drawPattern(patterns[patternName], windowToCanvas(this, e.clientX, e.clientY), false);
    }
});

// listen for the mouse leaving the grid to remove pattern preview
$(world).on("mouseleave", function() {
    // restore the state before the previous preview
    restorePrevState();
});

// listen for step button click to step through simulation
$("#step-btn").click(function() {
    updateWorld(JSON.parse(JSON.stringify(env)));
});

let intervalID;
// listen for button click to stop animation in progress
$('input[type="button"]').click(function() {
    if (intervalID)
	clearTimeout(intervalID);
});

// set the default/min value for the number of steps
let steps = DEF_STEPS;
$("#steps").val(DEF_STEPS);
$("#steps").prop("min", String(MIN_STEPS));

let stepCount;
// listen for run button click to start animation
$("#run-btn").click(function() {
    // validate steps input
    let stepsIn = Number($("#steps").val());
    
    if (stepsIn < MIN_STEPS) {
	$("#steps-group").addClass("has-error");

    } else {
	$("#steps-group").removeClass("has-error");
	steps = stepsIn;
 
	stepCount = 0;

	intervalID = setTimeout(function timedUpdate() {
	    updateWorld(JSON.parse(JSON.stringify(env)));
	    stepCount += 1;

	    if (stepCount < steps) {
		intervalID = setTimeout(timedUpdate, duration);
	    }
	}, duration);
    }
});
