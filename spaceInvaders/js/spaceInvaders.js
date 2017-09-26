/***********************************************************************
 * Javascript implementation of the Space Invaders arcade game
 *
 * 11.06.2017 G.S.C.
 ***********************************************************************/

"use strict";

/* running parameters */

// duration (ms) of each ship's movement
const INIT_DURATION = 500;

/* world heights and widths in px */
const WHEIGHT = 700; //Math.min(browser.window.height*0.8, );
const WWIDTH = 1000; //Math.min(browser.window.width*0.8, );

/* ship layout heights and widths in px */
const shipWidth = 70;
const topMargin = 15;
const horizMargin = 100;//WWIDTH % (shipWidth+10) / 2;
const shipsPerRow = Math.floor((WWIDTH-horizMargin*2) / (shipWidth+10));

/* selectors */
const world = '#game-screen';
const ship = '.ship';

/* image files */
const shipImg = { low: 'img/ship1.png',
		  med: 'img/ship6.png',
		  high: 'img/ship2.png',
		  mystery: 'img/ship5.png'
		};
const backgroundImg = 'img/space-background.jpg';

$(world).height(WHEIGHT + 'px');
$(world).width(WWIDTH + 'px');

$(world).css('background-image', 'url(' + backgroundImg + ')');

// add ship images to scoring table
$("#low").html(`<img src="${shipImg.low}" style="width:${shipWidth}px;"/>`);
$("#med").html(`<img src="${shipImg.med}" style="width:${shipWidth}px;"/>`);
$("#high").html(`<img src="${shipImg.high}" style="width:${shipWidth}px;"/>`);
$("#mystery").html(`<img src="${shipImg.mystery}" style="width:${shipWidth}px;"/>`);

// add ship images to screen
function populate() {
    let i;
    for (i = 0; i < shipsPerRow; i++) {
	// one row of high-scoring ships
	$(world).append(`<img class="ship" src="${shipImg.high}" style="width:${shipWidth}px;` +
`top:${topMargin}px; left:${horizMargin + (shipWidth+10)*i}px;" />`);

	// two rows of med-scoring ships
	$(world).append(`<img class="ship" src="${shipImg.med}" style="width:${shipWidth}px;` +
`top:${topMargin*2 + 50}px; left:${horizMargin + (shipWidth+10)*i}px;" />`);
	$(world).append(`<img class="ship" src="${shipImg.med}" style="width:${shipWidth}px;` +
`top:${topMargin*3 + 90}px; left:${horizMargin + (shipWidth+10)*i}px;" />`);

	// two rows of low-scoring ships
	$(world).append(`<img class="ship" src="${shipImg.low}" style="width:${shipWidth}px;` +
`top:${topMargin*4 + 130}px; left:${horizMargin + (shipWidth+10)*i}px;" />`);
	$(world).append(`<img class="ship" src="${shipImg.low}" style="width:${shipWidth}px;` +
`top:${topMargin*5 + 160}px; left:${horizMargin + (shipWidth+10)*i}px;" />`);    
    }
}

function pxOp(px, op) {
    return eval(px.slice(0,-2) + op) + 'px';
}

function startShipMotion() {
//    CSSKeyframesRule
    
//    $(ship).css('left', (i, val) => pxOp(val, '+20'));
}

// attach a one-time listener for the intial start keypress event
function attachStartListener() {
    $(document).one('keypress', function(event) {
	if (event.key == 's' || event.key == 'S') {
	    event.preventDefault();
	    // add ships to screen
	    populate();
	    
	    startShipMotion();
	    attachControlListeners();
	}
    });
}

function attachControlListeners() {
    // attach a listener for the pause keypress event
    $(document).keypress(function(event) {
	if (event.key == 'p' || event.key == 'P') {
	    event.preventDefault();
	    
	    $(ship).css('-webkit-animation-play-state', 'paused');
	    // dim screen
	    $('#game-screen').css('opacity', '0.5');
	}
    });

    // attach a listener for the "unpause" keypress event
    $(document).keypress(function(event) {
	if (event.key == 's' || event.key == 'S') {
	    event.preventDefault();
	    
	    $(ship).css('-webkit-animation-play-state', 'running');
	    // undim screen
	    $('#game-screen').css('opacity', '1');
	}
    });

    // attach a listener for the "quit" keypress event
    $(document).keypress(function(event) {
	if (event.key == 'q' || event.key == 'Q') {
	    event.preventDefault();

	    $('#game-screen').css('opacity', '1');

	    // remove all listeners
	    $(document).unbind();

	    // remove all ships
	    $(ship).remove();

	    // wait for start event
	    attachStartListener();
	}
    });

    // attach a listener for the "move left" keypress event
    $(document).keypress(function(event) {
	if (event.key == 'ArrowLeft') {
	    event.preventDefault();
	}
    });

    // attach a listener for the "move right" keypress event
    $(document).keypress(function(event) {
	if (event.key == 'ArrowRight') {
	    event.preventDefault();
	}
    });

    // attach a listener for the "fire" keypress event
    $(document).keypress(function(event) {
	if (event.key == ' ') {
	    event.preventDefault();
	}
    });
}

attachStartListener();
