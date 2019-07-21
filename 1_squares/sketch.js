let x = 0;
let y = 0;
let angle = 0.0;
let spacing = 40;
let squares = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4; i++) {
    squares.push(new Square());
  }
}

function draw() {
  background(0);
  fill(255, 10, 200);
  let offset = 0;
  translate(width / 2, height / 2);
  for (let i = 0; i < squares.length; i++) {
    squares[i].update();
    squares[i].show(i * spacing)
  }

}