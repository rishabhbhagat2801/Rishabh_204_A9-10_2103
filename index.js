// Name: Rishabh Vinay Bhagat
// ID: C0892204

// fetching the canvas element and context
const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');

// initial setting of drawing
let is_drawing = false;
let color = 'black';
let lineWidth = 2;

// start_drawing Function to start drawing
function start_drawing(event) {
  is_drawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// draw function while moving the mouse
function draw(event) {
  if (is_drawing) {
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

// stop drawing function
function stop_drawing() {
  is_drawing = false;
}

// Adding event listeners to the canvas
canvas.addEventListener('mousedown', start_drawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop_drawing);
canvas.addEventListener('mouseout', stop_drawing);

// Function to handle different colors
function changeColor(newColor) {
  color = newColor;
}

// change_line_width Function to change the width of line
function change_line_width(new_width) {
  lineWidth = new_width;
}

// clear_canvas Function to clear the canvas
function clear_canvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Adding  event listeners to the slider and button
document.getElementById('black').addEventListener('click', () => changeColor('black'));
document.getElementById('pink').addEventListener('click', () => changeColor('pink'));
document.getElementById('blue').addEventListener('click', () => changeColor('blue'));
document.getElementById('yellow').addEventListener('click', () => changeColor('yellow'));
document.getElementById('erase').addEventListener('click', () => changeColor('white'));
document.getElementById('slider').addEventListener('input', (event) => change_line_width(event.target.value));
document.getElementById('new').addEventListener('click', clear_canvas);