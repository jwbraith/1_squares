class Square {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
    this.offset = 0;
    this.size = 60;
  }

  update(offX, offY) {
    this.x = 12 * sin(this.angle + offX);
    this.y = 12 * cos(this.angle + offY);
    this.angle += 0.05;
  }
  show(sX, sY) {
    rect(this.x + sX, this.y + sY, this.size, this.size * 0.69)
  }
}