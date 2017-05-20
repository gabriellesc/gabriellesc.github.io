/*******************************************************
 * From:
 * http://www.cs.mcgill.ca/~cs202/2011-01/assignments/specifications/a4/Patterns.java
 * http://www.radicaleye.com/lifepage/glossary.html
 *
 * 17.05.2017 G.S.C.
******************************************************/

let patterns = {
// oscillators
BLINKER : [[0,0,0],
           [1,1,1],
           [0,0,0]],
    
TOAD : [[0,1,1,1],
	[1,1,1,0]],
    
PULSAR : [
    [0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [0,0,1,1,1,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,1,1,1,0,0],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [1,0,0,0,0,1,0,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,1,1,1,0,0]],

QUEEN_BEE_SHUTTLE : [
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]],      

BEACON : [[1,1,0,0],
          [1,1,0,0],
          [0,0,1,1],
          [0,0,1,1]],                                

// spaceships
GLIDER : [[0,1,0],
          [0,0,1],
          [1,1,1]],
    
LWSS : [[0,1,1,1,1],
        [1,0,0,0,1],
        [0,0,0,0,1],
        [1,0,0,1,0]],
    
SPARKY : [
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0],
    [1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0],
    [1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1],
    [1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
    [1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0],
    [1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1],
    [1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    
// Methuselahs
ACORN : [[0,0,0,0,0,0,0,0,0],
         [0,0,1,0,0,0,0,0,0],
         [0,0,0,0,1,0,0,0,0],
         [0,1,1,0,0,1,1,1,0],
         [0,0,0,0,0,0,0,0,0]],

// still lifes
BLOCK : [[1,1],
         [1,1]],

BEEHIVE : [[0,1,1,0],
           [1,0,0,1],
           [0,1,1,0]],

LOAF : [[0,1,1,0],
        [1,0,0,1],
        [0,1,0,1],
        [0,0,1,0]],

BOAT : [[1,1,0],
        [1,0,1],
        [0,1,0]],

TUB : [[0,1,0],
       [1,0,1],
       [0,1,0]],

SHIP : [[1,1,0],
        [1,0,1],
        [0,1,1]],

// unclassified -- too lazy to look these up...
ONEOHONE : [
    [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1],
    [1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1],
    [0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0],
    [1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1],
    [1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0]],

AFORALL : [
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,1,0,1,0,0,1,0,1,0],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [0,1,0,1,0,0,1,0,1,0],
    [0,0,0,1,1,1,1,0,0,0],
    [0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,1,1,0,0,0,0]],

AIRCRAFTCARRIER : [
    [1,1,0,0],
    [1,0,0,1],
    [0,0,1,1]],

AIRFORCE : [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,1,1],
    [0,0,0,1,0,1,1,0,0,0,1,0,1,1],
    [0,0,0,1,0,1,0,0,1,0,1,0,0,0],
    [1,1,0,1,0,0,0,1,1,0,1,0,0,0],
    [1,1,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0]],

ANTS : [
    [1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0],
    [0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1],
    [0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1],
    [1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
    
AVERAGE : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,1,0,0,1,0,0,1,0,0],
    [0,1,0,1,1,0,1,1,0,1,0],
    [0,1,0,1,0,0,0,1,0,1,0],
    [1,1,0,1,0,0,0,1,0,1,1],
    [1,0,0,1,0,1,0,1,0,0,1],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0]],

BHEPTOMINO : [
    [0,1,0,0],
    [1,1,1,0],
    [1,0,1,1]],

BARGE : [
    [0,1,0,0],
    [1,0,1,0],
    [0,1,0,1],
    [0,0,1,0]],

BLOCKER : [
    [0,0,0,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,1,0,0,0],
    [1,1,0,0,1,0,0,0,0,1],
    [1,1,0,1,0,0,1,0,1,1],
    [0,0,0,0,0,1,1,0,0,0]],

BOOKENDS : [
    [1,1,0,0,0,1,1],
    [1,0,1,0,1,0,1],
    [0,0,1,0,1,0,0],
    [0,1,1,0,1,1,0]],

BOSS : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,1,1,0,1,1,0,0,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,1,0,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,0,0,1,0,1,0],
    [1,1,0,1,0,0,0,1,0,1,1],
    [1,0,0,1,0,1,0,1,0,0,1],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,1,0,1,1,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0]],

BRAIN : [
    [0,1,1,0,0,0,0,0,0,0,0],
    [1,0,0,1,0,0,0,0,0,1,1],
    [1,1,1,0,0,0,1,1,1,0,0],
    [1,0,0,1,0,1,1,1,1,0,0],
    [0,1,1,1,0,0,0,1,0,0,0],
    [0,1,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,0,0,0,0,1,1,0],
    [0,0,0,1,1,1,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,1,0],
    [0,0,0,1,0,0,0,0,1,1,0],
    [0,1,0,0,1,1,1,0,0,0,0],
    [0,1,1,1,0,0,0,1,0,0,0],
    [1,0,0,1,0,1,1,1,1,0,0],
    [1,1,1,0,0,0,1,1,1,0,0],
    [1,0,0,1,0,0,0,0,0,1,1],
    [0,1,1,0,0,0,0,0,0,0,0]],

BUNNIES : [
    [1,0,0,0,0,0,1,0],
    [0,0,1,0,0,0,1,0],
    [0,0,1,0,0,1,0,1],
    [0,1,0,1,0,0,0,0]],

BURLOAFERIMETER : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,1,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,1,0,0,0],
    [1,1,0,1,0,1,0,1,0,1,1],
    [1,1,0,1,0,0,0,0,1,0,1],
    [0,0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0]],

CATERER : [
    [0,0,0,0,0,1,0,0],
    [1,1,1,1,0,0,0,1],
    [0,0,0,1,0,0,0,1],
    [0,0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0,0],
    [0,0,0,0,0,1,1,0]],

CHEMIST : [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,1,0,0,1,1],
    [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1],
    [0,0,0,0,1,0,0,0,1,0,1,0,1,0,0],
    [0,1,1,0,1,0,1,0,1,0,1,0,1,1,0],
    [0,0,1,0,1,0,1,0,0,0,1,0,0,0,0],
    [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
    [1,1,0,0,1,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]],
    
CLOCK : [
    [0,0,1,0],
    [1,1,0,0],
    [0,0,1,1],
    [0,1,0,0]],

CLOVERLEAF : [
    [0,0,0,1,0,1,0,0,0],
    [0,1,1,1,0,1,1,1,0],
    [1,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1,0,1],
    [0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,0],
    [1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,1],
    [0,1,1,1,0,1,1,1,0],
    [0,0,0,1,0,1,0,0,0]],

CROSS : [
    [0,0,1,1,1,1,0,0],
    [0,0,1,0,0,1,0,0],
    [1,1,1,0,0,1,1,1],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [1,1,1,0,0,1,1,1],
    [0,0,1,0,0,1,0,0],
    [0,0,1,1,1,1,0,0]],

DART : [
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,1,0,0,0,1],
    [0,0,1,0,0,1,0,0,0,0],
    [0,1,0,1,0,0,1,1,1,1],
    [1,0,0,1,0,0,0,0,0,0],
    [0,1,0,1,0,0,1,1,1,1],
    [0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0]],

DIAMONDRING : [
    [0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,1,1,0,0,1,0,0,1,1,0,0],
    [0,1,0,0,0,0,1,0,0,0,0,1,0],
    [1,0,1,0,1,1,0,1,1,0,1,0,1],
    [0,1,0,0,0,0,1,0,0,0,0,1,0],
    [0,0,1,1,0,0,1,0,0,1,1,0,0],
    [0,0,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0]],

DOUBLEWING : [
    [1,1,0,0,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,1],
    [0,1,1,1,0,1,1,1,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0]],

ELEVENER : [
    [0,0,0,0,1,1],
    [0,0,0,0,0,1],
    [0,0,1,1,1,0],
    [0,0,1,0,0,0],
    [1,0,1,0,0,0],
    [1,1,0,0,0,0]],

FOURTEENER : [
    [0,0,0,0,1,1,0],
    [1,1,0,0,1,0,1],
    [1,0,0,0,0,0,1],
    [0,1,1,1,1,1,0],
    [0,0,0,1,0,0,0]],

FUMAROLE : [
    [0,0,0,1,1,0,0,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,0,1,0,0,1,0,0],
    [1,0,1,0,0,1,0,1],
    [1,1,0,0,0,0,1,1]],

GRAYCOUNTER : [
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,0,0],
    [0,1,0,0,0,0,0,1,0],
    [1,0,1,0,0,0,1,0,1],
    [0,1,0,0,0,0,0,1,0],
    [0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0]],

GREATONOFF : [
    [0,0,1,1,0,0,0,0],
    [0,1,0,0,1,0,0,0],
    [0,1,0,1,1,0,0,0],
    [1,1,0,1,0,1,1,0],
    [0,0,0,0,1,1,0,1],
    [0,0,0,0,0,0,0,1],
    [0,0,0,0,1,1,1,0],
    [0,0,0,0,1,0,0,0]],

HAT : [
    [0,0,1,0,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [1,1,0,1,1]],

HERTZOSCILLATOR : [
    [0,0,0,1,1,0,1,0,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,1,0,1,0,1,0,1,1],
    [0,0,0,1,0,0,0,1,0,1,1],
    [1,1,0,1,0,0,0,1,0,0,0],
    [1,1,0,1,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,0,0,0],
    [0,0,0,0,1,0,1,1,0,0,0]],

HUSTLER : [
    [0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0,0],
    [1,0,1,0,0,0,0,1,0,0,0],
    [1,1,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,1,1],
    [0,0,0,1,0,0,0,0,1,0,1],
    [0,0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0]],

INDUCTIONCOIL : [
    [0,1,1,0,0,0,0],
    [0,1,0,0,1,0,0],
    [0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,0,0,1,0,0,1]],

INTEGRALSIGN : [
    [0,0,0,1,1],
    [0,0,1,0,1],
    [0,0,1,0,0],
    [1,0,1,0,0],
    [1,1,0,0,0]],

JAM : [
    [0,0,0,0,1,1,0],
    [0,0,0,1,0,0,1],
    [0,1,0,0,1,0,1],
    [1,0,0,0,0,1,0],
    [1,0,0,0,0,0,0],
    [0,0,1,1,1,0,0]],

KEYS : [
    [0,1,0,0,0,0,0,0,0,0,1,0],
    [1,0,1,1,1,0,0,1,1,1,0,1],
    [0,1,0,0,1,0,0,1,0,0,1,0],
    [0,0,0,0,1,0,0,1,0,0,0,0]],

KICKBACKREACTION : [
    [0,0,0,0,1,0,1],
    [1,1,1,0,0,1,1],
    [0,0,1,0,0,1,0],
    [0,1,0,0,0,0,0]],

KOKSGALAXY : [
    [1,1,1,1,1,1,0,1,1],
    [1,1,1,1,1,1,0,1,1],
    [0,0,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,1,1],
    [1,1,0,1,1,1,1,1,1]],

LIGHTBULB : [
    [0,1,1,0,1,0,0],
    [0,1,0,1,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0],
    [0,1,0,0,0,1,0],
    [0,1,0,0,0,1,0],
    [0,0,1,0,1,0,0],
    [1,0,1,0,1,0,1],
    [1,1,0,0,0,1,1]],

LOOP : [
    [1,0,0,0],
    [1,1,1,0],
    [0,0,0,1],
    [1,1,0,1],
    [1,0,1,0]],

MANGO : [
    [0,1,1,0,0],
    [1,0,0,1,0],
    [0,1,0,0,1],
    [0,0,1,1,0]],

MAZING : [
    [0,0,0,1,1,0,0],
    [0,1,0,1,0,0,0],
    [1,0,0,0,0,0,1],
    [0,1,0,0,0,1,1],
    [0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0]],

CUPHOOK : [
    [0,0,0,0,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,0,0,0,0],
    [1,1,0,1,0,0,0,0,0],
    [1,1,0,1,0,0,1,0,0],
    [0,0,0,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,1,1]],

MOLD : [
    [0,1,1,0,0,0],
    [1,0,0,1,0,0],
    [1,0,1,0,0,1],
    [0,1,0,0,0,0],
    [0,0,1,1,0,1],
    [0,0,0,0,1,0]],

MONOGRAM : [
    [1,1,0,0,0,1,1],
    [0,1,0,1,0,1,0],
    [0,1,1,0,1,1,0],
    [0,1,0,1,0,1,0],
    [1,1,0,0,0,1,1]],

NEGENTROPY : [
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,0,0,1,1],
    [1,1,0,1,0,0,1,0,1,0,0,1],
    [0,1,0,1,0,0,0,1,1,0,1,0],
    [1,0,0,1,0,0,0,0,1,0,1,1],
    [1,1,0,0,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,0]],

OCTAGON : [
    [0,0,0,1,1,0,0,0],
    [0,0,1,0,0,1,0,0],
    [0,1,0,0,0,0,1,0],
    [1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1],
    [0,1,0,0,0,0,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,0,1,1,0,0,0]],

ORION : [
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,1,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,0,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,1,1],
    [0,0,0,0,0,0,1,1,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,0,0,0,0,0,0]],

PAPERCLIP : [
    [0,0,1,1,0],
    [0,1,0,0,1],
    [0,1,0,1,1],
    [1,1,0,1,0],
    [1,0,0,1,0],
    [0,1,1,0,0]],    

PEDESTLE : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,1,0,0,1,1,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,1,1,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,1,0,0,1],
    [0,1,0,1,0,1,0,1,0,1,1],
    [0,1,0,1,0,0,0,1,0,1,0],
    [1,1,0,1,0,1,0,1,0,1,0],
    [1,0,0,1,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,1,1,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,1,1,0,0,1,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0]],

PENNYLANE : [
    [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
    [1,1,0,1,0,0,0,0,0,0,0,1,0,1,1],
    [1,1,0,1,0,1,1,1,1,1,0,1,0,1,1],
    [0,0,0,0,1,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]],

PENTADECATHLON : [
    [0,0,1,0,0,0,0,1,0,0],
    [1,1,0,1,1,1,1,0,1,1],
    [0,0,1,0,0,0,0,1,0,0]],

PHOENIX : [
    [0,0,0,1,0,0,0,0],
    [0,0,0,1,0,1,0,0],
    [0,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1],
    [1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0],
    [0,0,1,0,1,0,0,0],
    [0,0,0,0,1,0,0,0]],

POND : [
    [0,1,1,0],
    [1,0,0,1],
    [1,0,0,1],
    [0,1,1,0]],

PRESSURECOOKER : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,1,1,0,1,1,0,0,0],
    [1,0,1,0,0,0,0,0,1,0,1],
    [1,1,0,1,0,1,0,1,0,1,1],
    [0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0],
    [0,0,0,1,1,0,1,0,0,0,0]],

PYROTECHNECZUM : [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
    [0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0],
    [1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0],
    [0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1],
    [0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0],
    [0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]],

RPENTOMINO : [
    [0,1,1],
    [1,1,0],
    [0,1,0]],

R2D2 : [
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,0],
    [1,0,0,0,0,0,0,1],
    [1,1,1,0,0,0,1,1],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1],
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0]],

RABBITS : [
    [1,0,0,0,1,1,1],
    [1,1,1,0,0,1,0],
    [0,1,0,0,0,0,0]],

REPHASER : [
    [0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,1,0,0,1,1,0],
    [1,0,1,0,0,1,0,1],
    [0,0,1,0,0,1,0,0]],

REVOLVER : [
    [1,1,0,0,0,0,1,1],
    [0,1,0,0,0,0,1,0],
    [0,1,0,1,1,0,1,0],
    [0,0,1,0,0,1,0,0],
    [0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,1,1,0],
    [0,0,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0],
    [0,0,1,0,0,1,0,0],
    [0,1,0,1,1,0,1,0],
    [0,1,0,0,0,0,1,0],
    [1,1,0,0,0,0,1,1]],

ROTEIGHTOR : [
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,0,0,0,1,1],
    [0,0,0,0,1,0,0,0,0,0,0,0,1,0],
    [0,0,0,1,1,0,0,0,0,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,1,0,0,0,1,0,0,0],
    [0,1,0,1,0,0,0,0,0,0,1,0,0,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,0]],
    
SCHICKENGINE : [
    [0,0,0,0,0,1,1,1,1],
    [0,0,0,0,1,0,0,0,1],
    [0,0,0,0,0,0,0,0,1],
    [1,1,0,0,1,0,0,1,0],
    [1,1,1,0,0,0,0,0,0],
    [1,1,0,0,1,0,0,1,0],
    [0,0,0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0,0,1],
    [0,0,0,0,0,1,1,1,1]],

SCORPION : [
    [0,0,0,1,0,0,0],
    [0,1,1,1,0,0,0],
    [1,0,0,0,1,1,0],
    [1,0,1,0,1,0,1],
    [0,1,1,0,1,0,1],
    [0,0,0,0,0,1,0]],

SCRUBBER : [
    [0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,1,0,0,0,0],
    [1,1,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0,1,0,1,1],
    [0,0,0,0,1,1,1,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,1,0,0,0,0]],

SHILLELAGH : [
    [1,1,0,0,0],
    [1,0,0,1,1],
    [0,1,1,0,1]],

SIESTA : [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1],
    [1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0],
    [0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]],

SINKINGSHIP : [
    [0,0,0,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0]],

SMILEY : [
    [1,1,0,1,0,1,1],
    [0,0,0,1,0,0,0],
    [1,0,0,0,0,0,1],
    [0,1,1,1,1,1,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1]],

SNACKER : [
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
    [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]],
    
SNAKE : [
    [1,0,1,1],
    [1,1,0,1]],

SOMBREROS : [
    [0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0],
    [0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1],
    [0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0],
    [0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0]],

GRAPSER : [
    [1,1,0,0,0,0,1,1],
    [1,0,1,0,0,1,0,1],
    [0,0,1,0,0,1,0,0],
    [1,0,1,0,0,1,0,1],
    [1,1,0,0,0,0,1,1]],

SPIRAL : [
    [1,1,0,0,0,0,1],
    [0,1,0,0,1,1,1],
    [0,1,0,1,0,0,0],
    [0,0,1,0,1,0,0],
    [0,0,0,1,0,1,0],
    [1,1,1,0,0,1,0],
    [1,0,0,0,0,1,1]],

STAR : [
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,1,1,1,0,1,1,1,0,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,1,1,0,0,0,0,0,1,1,0],
    [1,1,0,0,0,0,0,0,0,1,1],
    [0,1,1,0,0,0,0,0,1,1,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,1,1,0,1,1,1,0,0],
    [0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0]],

SWITCHENGINE : [
    [0,1,0,1,0,0],
    [1,0,0,0,0,0],
    [0,1,0,0,1,0],
    [0,0,0,1,1,1]],

TESTTUBEBABY : [
    [1,1,0,0,0,0,1,1],
    [1,0,1,0,0,1,0,1],
    [0,0,1,0,0,1,0,0],
    [0,0,1,0,0,1,0,0],
    [0,0,0,1,1,0,0,0]],

TUMBLER : [
    [0,1,1,0,1,1,0],
    [0,1,1,0,1,1,0],
    [0,0,1,0,1,0,0],
    [1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1],
    [1,1,0,0,0,1,1]],

TURTLE : [
    [0,1,1,1,0,0,0,0,0,0,0,1,0,0],
    [0,1,1,0,0,1,0,1,1,0,1,1,0,0],
    [0,0,0,1,1,1,0,0,0,0,1,0,0,0],
    [0,1,0,0,1,0,1,0,0,0,1,0,0,0],
    [1,0,0,0,0,1,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,1,0,0,0,0,1,0,0,1],
    [0,1,0,0,1,0,1,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,0,0,0,0,1,0,0,0],
    [0,1,1,0,0,1,0,1,1,0,1,1,0,0],
    [0,1,1,1,0,0,0,0,0,0,0,1,0,0]],
    
UNIX : [
    [0,1,1,0,0,0,0,0],
    [0,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0],
    [1,0,1,0,0,0,0,0],
    [1,0,0,1,0,0,1,1],
    [0,0,0,0,1,0,1,1],
    [0,0,1,1,0,0,0,0]],
    
};

let patternsHTML = {
BRAIN : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ELEVENER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

DIAMONDRING : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SHILLELAGH : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

MAZING : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SCORPION : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

POND : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

CLOVERLEAF : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

MOLD : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

RABBITS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

TUB : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

GLIDER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

GREATONOFF : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SIESTA : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

OCTAGON : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BOAT : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SHIP : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

QUEEN_BEE_SHUTTLE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

TESTTUBEBABY : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BLOCKER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PHOENIX : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

INTEGRALSIGN : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SMILEY : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

FUMAROLE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

SINKINGSHIP : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

GRAYCOUNTER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SPARKY : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

TOAD : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PRESSURECOOKER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SCRUBBER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ONEOHONE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PAPERCLIP : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BOOKENDS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

MANGO : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

REPHASER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

LWSS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

MONOGRAM : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

KOKSGALAXY : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

CATERER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BEACON : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

TURTLE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

DOUBLEWING : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SNACKER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

AFORALL : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

AIRFORCE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PULSAR : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PENNYLANE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BURLOAFERIMETER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BOSS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

HAT : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

PYROTECHNECZUM : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BHEPTOMINO : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

SCHICKENGINE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

LOOP : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PEDESTLE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

AVERAGE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

LIGHTBULB : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

SPIRAL : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

JAM : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BLINKER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

R2D2 : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

CUPHOOK : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

RPENTOMINO : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

NEGENTROPY : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

CHEMIST : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BEEHIVE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

PENTADECATHLON : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SOMBREROS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ACORN : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

FOURTEENER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

TUMBLER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

INDUCTIONCOIL : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

DART : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

HERTZOSCILLATOR : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ROTEIGHTOR : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

LOAF : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

HUSTLER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BLOCK : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

KICKBACKREACTION : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

AIRCRAFTCARRIER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

REVOLVER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

CLOCK : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

GRAPSER : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

SNAKE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

BUNNIES : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

STAR : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

BARGE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

SWITCHENGINE : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
</table></div>",

UNIX : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

KEYS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ANTS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

CROSS : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",

ORION : "<table class=\"table-bordered grid pattern\"> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
<tr> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:1;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
<td><div class=\"cell\" style=\"opacity:0;\"></div></td> \
</tr> \
</table></div>",
    
}
