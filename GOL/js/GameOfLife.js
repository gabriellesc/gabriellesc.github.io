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

// running parameters
const DEF_STEPS = 100;

const DEF_DURATION = 2000; // duration (ms) of each state
const MIN_DURATION = 100;
const MAX_DURATION = 5000;
const STEP_DURATION = 100;

// world heights and widths
const DEF_HEIGHT = 24;
const DEF_WIDTH = 60;

const MIN_HEIGHT = 1;
const MAX_HEIGHT = 50;

const MIN_WIDTH = 1;
const MAX_WIDTH = 100;

// jQuery selectors
const world = "#world";


/* Return true if the coord is a valid vertical coordinate in 
 * the population grid of this environment.
 */
function isWithinBoundsV(coord) {
    return coord < height && coord > -1;
}

/* Return true if the coord is a valid horizontal coordinate in 
 * the population grid of this environment.
 */
function isWithinBoundsH(coord) {
    return coord < width && coord > -1;
}

/* Return the jQuery object representing the cell that resides 
 * at these coordinates in the population grid env.
 */    
function getCell(vcoord, hcoord, env) {
    return env.find("#cell-" + vcoord + "-" + hcoord);
}

/* Return 0 if the cell at these coordinates is dead (or does not exist), or 1 otherwise.
*/
function isAlive(vcoord, hcoord, env) {
    if (isWithinBoundsV(vcoord) && isWithinBoundsH(hcoord) &&
	getCell(vcoord, hcoord, env).children(".cell").css("opacity") != "0")
	return 1;
    return 0;
}

// Return an int that represents the number of live neighbours around this Cell.
function getNumLiveNeighbours(vcoord, hcoord, env) {
    vcoord = Number(vcoord);
    hcoord = Number(hcoord);

    let total = 0;

    // cell has neighbour(s) below
    total += isAlive(vcoord - 1, hcoord, env); //T

    // cell has neighbour below left
    total += isAlive(vcoord - 1, hcoord - 1, env); //TL
    
    // cell has neighbour below right
    total += isAlive(vcoord - 1, hcoord + 1, env); //TR

    // cell has neighbour(s) above
    total += isAlive(vcoord + 1, hcoord, env); //B

    // cell has neighbour above left
    total += isAlive(vcoord + 1, hcoord - 1, env); //BL

    // cell has neighbour above right
    total += isAlive(vcoord + 1, hcoord + 1, env); //BR

    // cell has neighbour(s) left
    total += isAlive(vcoord, hcoord - 1, env); //L

    // cell has neighbour(s) right
    total += isAlive(vcoord, hcoord + 1, env); //R		

    return total;
}

/* Update the status of the cell according to the following rules:
 * - Any live cell with fewer than two live neighbours in the most 
 * recent environment state dies, as if caused by under-population
 * - Any live cell with two or three live neighbours in the most recent 
 * environment state lives on to the next generation
 * - Any live cell with more than three live neighbours in the most 
 * recent environment state dies, as if by overcrowding
 * - Any dead cell with exactly three live neighbours in the most 
 * recent environment state becomes a live cell, as if by reproduction
 */
function updateCellStatus(cell, env) {
    // extract position of cell in grid from its id
    let loc = cell.prop("id").match(/-[0-9]+/g);

    let numLiveNeighbours = getNumLiveNeighbours(loc[0].substring(1),
						 loc[1].substring(1), env);

    if (numLiveNeighbours < 2 || numLiveNeighbours > 3)
	cell.children(".cell").animate({opacity: "0"}, duration);
    
    else if (numLiveNeighbours == 3)
	cell.children(".cell").animate({opacity: "1"}, duration);
}

/* Update the status of all cells based on the previous state of the world.
 */
function updateWorld(snapshot) {
    $(world + " td").each(function() {
	updateCellStatus($(this), snapshot);
    });
}
    
/* Create the HTML "world" grid of the specified dimensions, with all cells dead.
 * Each "cell" has a unique id of the form "cell-<rowIndex>-<colIndex>".
 */
function resizeGrid(height, width) {
    let rows = "";

    var i, j;
    for (i = 0; i < height; i++){
	rows += "<tr>\n";
	for (j = 0; j < width; j++){
	    rows += "<td id=\"cell-" + i + "-" + j +
		"\"><div class=\"cell\" style=\"opacity:0;\"></div></td>\n";
	}
	rows += "</tr>\n";
    }
    
    $(world).html(rows);
}

/* Convert a pattern (2D array of booleans) into an HTML table representation.
 * Not currently used because patterns are pre-converted to HTML tables.
 */
/*function parsePattern(pattern) {
    let table = "";
    
    rowlen += Math.round(pattern[0].length / 12 + 1);
    if (rowlen > 12){
	table += "</div><div class=\"row\">";
	rowlen = Math.round(pattern[0].length / 12 + 1);
    }
    
    table += "<div class=\"col-xs-" + Math.round(pattern[0].length / 12 + 1) + "\">" +
	"<table class=\"table-bordered grid\">";

    var i, j;
    for (i = 0; i < pattern.length; i++){
	table += "<tr>\n";
	for (j = 0; j < pattern[0].length; j++){
	    table += "<td><div class=\"cell\" style=\"opacity:";
	    table += pattern[i][j] ? "1" : "0";	    
	    table += ";\"></div></td>\n";
	}
	table += "</tr>\n";
    }
    table += "</table></div>\n";

    return table;
}*/


// set the min/max/default values for the grid size inputs
$("#grid-height").val(DEF_HEIGHT);
$("#grid-height").prop("min", String(MIN_HEIGHT));
$("#grid-height").prop("max", String(MAX_HEIGHT));

$("#grid-width").val(DEF_WIDTH);
$("#grid-width").prop("min", String(MIN_WIDTH));
$("#grid-width").prop("max", String(MAX_WIDTH));

// create grid of default size
let height = DEF_HEIGHT, width = DEF_WIDTH;
resizeGrid(height, width);

// listen for resize button click to resize grid
$("#resize-btn").click(function() {
    // validate size inputs ?
    height = $("#grid-height").val();
    width = $("#grid-width").val();
    resizeGrid(height, width);
});

// set the default value for the number of steps
let steps = DEF_STEPS;
$("#steps").val(DEF_STEPS);

// listen for change in number of steps
$("#steps").change(function() {
    // validate steps input ?
    steps = $("#steps").val();
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
var pattern;
for (pattern in patternsHTML)
    $("#pattern-menu").append("<option>" + pattern + "</option>");

// listen for table cell clicks to toggle cell state
$(world).on("click", "td", function() {
    $(this).children(".cell").css("opacity", function(index, value) {
	return value == "0" ? "1" : "0";
    });
});

// listen for a hover over the grid to preview pattern
$(world).on("mouseenter", "td", function() {
    // check that a pattern is selected
    let pattern = $("#pattern-menu").val();
    if (pattern != "-"){

	// find position of current cell in order to calculate offset
	let loc = $(this).prop("id").match(/-[0-9]+/g);
	let h = loc[0].substring(1), v = loc[1].substring(1);
	
	var i, j;
	for (i = 0; i < patterns[pattern].length; i++){
	    for (j = 0; j < patterns[pattern][0].length; j++){
		$("#pattern-preview").html(patternsHTML[pattern]);
		/*$(world + ".cell-" + (h+i) + "-" + (v+j)).children(".cell")
		    .prop("opacity", patterns[pattern][i][j]*0.5);*/
	    }
	}
    }
    
}).on("mouseleave", "td", function() {
    $("#pattern-preview").html("");
});

// listen for step button click to step through simulation
$("#step-btn").click(function() {
    updateWorld($(world).clone());
});

// listen for run button click to start simulation
$("#run-btn").click(function() {
    updateWorld($(world).clone());
});
