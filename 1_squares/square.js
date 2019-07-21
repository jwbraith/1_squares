class Square {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.offset = 0;
    this.size = 60;
  }

  update() {
    this.x = 100 * sin(this.angle);
    this.y = 100 * cos(this.angle);
    this.angle += 0.01;
  }
  show(s) {
    rect(this.x + s, this.y, this.size, this.size * 0.69)
  }
}