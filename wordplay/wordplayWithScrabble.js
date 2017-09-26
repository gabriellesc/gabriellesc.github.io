let src = 'https://raw.githubusercontent.com/jesstess/Scrabble/master/scrabble/sowpods.txt';

var a = document.createElement('a');
a.href = src;
a.textContent = src;

var small = document.createElement('small');
small.style['font-size'] = '60%';
small.appendChild(document.createTextNode('using '));
small.appendChild(a);

document.querySelector('.page-header h2').appendChild(small);

let main = document.querySelector('main'),
    note = document.getElementById('note');

let get = fetch(src)
    .then(resp => resp.text())
    .then(processWords);

function print(tag, content) {
    let elem = document.createElement(tag);
    elem.textContent = content;
    main.insertBefore(elem, note);
}

function prettyPrint(title, content) {
    let h = document.createElement('h3');
    h.textContent = title;
    main.insertBefore(h, note);

    let pre = document.createElement('pre');
    pre.textContent = content;
    pre.style.columns = '3';
    main.insertBefore(pre, note);
}

function processWords(resp) {
    let words = resp.split(/\r*\n/g);

    let elem = document.createElement('h3');
    elem.innerHTML = '<b>' + words.length + ' words in total</b>';
    main.insertBefore(elem, note);

    UU(words);
    
    QU(words);
    
    undoubled(words);
    
    longPal(words);
    
    vowelsY(words);
    
    freqLetter(words);
    
    anagrams(words);
}

// what words contain "UU"?
function UU(array) {
    let matches = array.filter(elem => elem.match(/UU/));
    prettyPrint(matches.length + ' words containing "UU"', matches.join('\n'));
}

// What words contain "Q" without "U"?
function QU(array) {
    let matches = array.filter(elem => elem.match(/^[^U]*Q[^U]*$/));
    prettyPrint(matches.length + ' words containing "Q" without "U"', matches.join('\n'));
}

// what letters, if any, never appear doubled?
function undoubled(array) {
    let doubled = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    for (var elem of array) {
	if (!doubled) {
	    break;
	}
	
	let letters = elem.match(/([A-Z])\1/g);
	if (letters) {
	    letters.forEach(letter => {
		var i = doubled.indexOf(letter[0]);
		if (i != -1) {
		    doubled.splice(i, 1);
		}
	    });
	}
    }

    print('h3', doubled.length + ' letters that never appear doubled: ' + doubled.join(', '));
}

// what is the longest palindrome?
function longPal(array) {    
    let pals = array.filter(elem => {
	var start = 0, end = elem.length - 1;

	while (start < end) {
	    if (elem[start] != elem[end]) {
		return false;
	    }
	    start += 1;
	    end -= 1;
	}
	return true;
    });

    let maxLen = 0, maxPal = [];
    for (var pal of pals) {
	var palLen = pal.length;
	
	if (palLen == maxLen) {
	    maxLen = palLen;
	    maxPal.push(pal);
	} else if (palLen > maxLen) {
	    maxLen = palLen;
	    maxPal = [pal];
	}
    }

    if (maxPal.length > 1) {
	print('h3', maxPal.join(',') + ' are the longest palindromes');
    } else {
	print('h3', maxPal[0] + ' is the longest palindrome');
    }
}

// what words contain all of the vowels and Y, in alphabetical order?
// what words contain all of the vowels and Y, in any order?
function vowelsY(array) {
    let any = array.filter(elem => elem.match(/.*A.*E.*I.*O.*U.*Y/));
    let alph = any.filter(elem => elem.match(/[AEIOUY]/g).reduce((prev, curr) => curr >= prev ? curr : false));

    prettyPrint(alph.length + ' words containing all of the vowels and Y, in alphabetical order',
		alph.join('\n'));
    
    prettyPrint(any.length + ' words containing all of the vowels and Y, in any order',
		any.join('\n'));
}

// what letter makes the most appearances in a single word, and what is that word?
function freqLetter(array) {
    let freqs = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0,
		  'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0,
		  'S': 0, 'T': 0, 'U': 0, 'V': 0, 'W': 0, 'X': 0, 'Y': 0, 'Z': 0 };

    let maxFreq = 0, maxLetter = {};

    for (var word of array) {
	for (var letter of word) {
	    freqs[letter] += 1;
	}

	for (var letter in freqs) {  
	    // letter freq is greater in this word than previous max freq of this letter
	    if (freqs[letter] > maxFreq) {
		maxFreq = freqs[letter];
		maxLetter = { [letter]: [word] };

	    // letter freq is equal in this word to max freq of this (or another) letter elsewhere
	    } else if (freqs[letter] && freqs[letter] == maxFreq) {
		if (maxLetter[letter]) {
		    maxLetter[letter].push(word);
		} else {
		    maxLetter[letter] = [word];
		}
	    }
	    
	    // reset freq
	    freqs[letter] = 0;
	}
    }

    let first = true;
    for (var letter in maxLetter) {
	prettyPrint('The letter ' + letter + (first ? '' : ' also') +
		    ' makes the most appearances in a single word, in',
		    maxLetter[letter].join(', '));
	first = false;
    }
}

// what words are the longest anagrams of each other?
function anagrams(array) {
    let primes = { 'A': 2, 'B': 3, 'C': 5, 'D': 7, 'E': 11, 'F': 13, 'G': 17, 'H': 19, 'I': 23,
		   'J': 29, 'K': 31, 'L': 37, 'M': 41, 'N': 43, 'O': 47, 'P': 53, 'Q': 59, 'R': 61,
		   'S': 67, 'T': 71, 'U': 73, 'V': 79, 'W': 83, 'X': 89, 'Y': 97, 'Z': 101 };
    
    let map = {};
    for (var elem of array) {
	let hash = elem.split('').reduce((prod, letter) => primes[letter] * prod, 1);

	if (map[hash]) {
	    map[hash].push(elem);
	} else {
	    map[hash] = [elem];
	}
    }

    let maxLen = 0, maxAna = [];
    for (var ana in map) {
	if (map[ana].length > 1) {
	    var anaLen = map[ana][0].length;
	    
	    if (anaLen == maxLen) {
		maxLen = anaLen;
		maxAna.push(map[ana]);
	    } else if (anaLen > maxLen) {
		maxLen = anaLen;
		maxAna = [map[ana]];
	    }
	}
    }

    print('h3', 'Words that are the longest anagrams of each other:');

    let pre = document.createElement('pre');
    pre.textContent = maxAna.map(ana => ana.join(' & ')).join('\n');
    main.insertBefore(pre, note);
}
