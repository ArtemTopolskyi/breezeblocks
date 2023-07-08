export class Block {
  constructor(
    initialCoord,
    initialVelocity,
    radius,
  ) {
    this.x = initialCoord.x;
    this.y = initialCoord.y;

    this.xv = initialVelocity.x;
    this.yv = initialVelocity.y;

    this.radius = radius;
  }

  move() {
    this.x += this.xv;
    this.y += this.yv;
  }

  getTop() {
    return this.y - this.radius;
  }

  getBottom() {
    return this.y + this.radius;
  }

  getLeft() {
    return this.x - this.radius;
  }

  getRight() {
    return this.x + this.radius;
  }

  increaseXVelocity() {
    this.xv = Math.abs(this.xv);
  }

  decreaseXVelocity() {
    this.xv = -Math.abs(this.xv);
  }

  increaseYVelocity() {
    this.yv = Math.abs(this.yv);
  }

  decreaseYVelocity() {
    this.yv = -Math.abs(this.yv);
  }

  inverseXVelocity() {
    this.xv = -this.xv;
  }

  inverseYVelocity() {
    this.yv = -this.yv;
  }
}
