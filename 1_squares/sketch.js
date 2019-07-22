let x = 0;
let y = 0;
let angle = 0.0;
let spacing = 100;
let squares = [];
let offsetXd = 0.0;
let offsetYd = 0.0;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 4; i++) {
    squares.push(new Square());
  }
  background(0);
}

function draw() {
  background(0);
  fill(255, 10, 200);
  let offsetX = 0;
  let offsetY = 0;
  translate(20, 20);
  for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares.length; j++) {
      squares[i].update(offsetX, offsetY);
      squares[i].show(j * spacing, i * spacing)
      offsetX + 11;
      offsetY += 8;
    }
  }

}