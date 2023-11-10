function besier(points, t) {
  this.disp = function () {
    for (let i = 0; i < points.length - 1; i++) {
      points[i].ptp(points[i + 1]);
    }

    for (let i = 0; i < points.length; i++) {
      points[i].display();
    }
  };
}
