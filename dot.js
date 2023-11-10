function dot(x, y, d) {
  this.x = x;
  this.y = y;

  this.display = function () {
    if (x === undefined || y === undefined) {
      return;
    }
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, d, d);
  };

  this.getx = function () {
    return this.x;
  };

  this.gety = function () {
    return this.y;
  };

  this.ptp = function (other) {
    if (other && other.hasOwnProperty("x") && other.hasOwnProperty("y")) {
      line(this.x, this.y, other.getx(), other.gety());
    }
  };

  this.updatePos = function (nx, ny) {
    this.x = nx;
    this.y = ny;
    // print(x, nx);
    // print(y, ny);
  };
}
