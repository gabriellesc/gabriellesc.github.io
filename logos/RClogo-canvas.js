var canvas = document.getElementById('canvas');
canvas.width = 120;
canvas.height = 140;

const green = '#3dc06c';

var ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 120, 140);

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 95);
ctx.lineTo(40, 95);
ctx.lineTo(40, 105);
ctx.lineTo(10, 105);
ctx.lineTo(10, 115);
ctx.lineTo(0, 115);
ctx.lineTo(0, 140);
ctx.lineTo(120, 140);
ctx.lineTo(120, 115);
ctx.lineTo(110, 115);
ctx.lineTo(110, 105);
ctx.lineTo(80, 105);
ctx.lineTo(80, 95);
ctx.lineTo(120, 95);
ctx.lineTo(120, 0);
ctx.lineTo(0, 0);
ctx.fill();

ctx.strokeStyle = 'white';
ctx.lineWidth = 10;
ctx.strokeRect(15, 15, 90, 65); /* line exceeds stroke evenly (by 5px) in each direction */

ctx.fillStyle = 'white';
ctx.fillRect(20, 125, 10, 10);
ctx.fillRect(40, 125, 10, 10);
ctx.fillRect(60, 125, 10, 10);
ctx.fillRect(80, 125, 10, 10);

ctx.fillRect(30, 115, 10, 10);
ctx.fillRect(50, 115, 10, 10);
ctx.fillRect(70, 115, 10, 10);
ctx.fillRect(90, 115, 10, 10);

ctx.fillStyle = green;
ctx.fillRect(20, 30, 10, 10);
ctx.fillRect(40, 30, 10, 10);
ctx.fillRect(60, 30, 10, 10);

ctx.fillRect(30, 50, 20, 10);
ctx.fillRect(60, 50, 20, 10);
