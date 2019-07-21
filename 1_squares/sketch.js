let y = 0;
let angle = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  let offset = 0;
  for (let i = 0; i < 4; i++) {
    let a = (angle + offset);
    y = 100 * cos(a) + 100;
    rect(i * 100, y, 100, 66);
    offset += 0.23
  }
  angle += 0.1;
}