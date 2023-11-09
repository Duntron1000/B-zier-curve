const x1 = 50;
const x2 = 200;
const y1 = 200;
const y2 = 100;
const x3 = 350;
const y3 = 200;
let t = 0;
let back = false;
let px = [];
let py = [];
let c;

function setup() {
  c = color(0, 0, 0);
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  ellipse(x1, y1, 10, 10);
  ellipse(x2, y2, 10, 10);
  ellipse(x3, y3, 10, 10);
  l1x = lerp(x1, x2, t);
  l1y = lerp(y1, y2, t);
  l2x = lerp(x2, x3, t);
  l2y = lerp(y2, y3, t);
  l3x = lerp(l1x, l2x, t);
  l3y = lerp(l1y, l2y, t);
  line(l1x, l1y, l2x, l2y);
  px.push(l3x);
  py.push(l3y);
  stroke(c);
  fill(c);
  for (let i = 0; i < px.length; i++) {
    ellipse(px[i], py[i], 5, 5);
  }
  stroke(0);
  fill(255);
  ellipse(l3x, l3y, 20, 20);
  ellipse(l1x, l1y, 20, 20);
  ellipse(l2x, l2y, 20, 20);

  if (t >= 1) {
    back = true;
    px.length = 0;
    py.length = 0;
    c = color(random(255), random(255), random(255));
  } else if (t <= 0) {
    back = false;
    px.length = 0;
    py.length = 0;
    c = color(random(255), random(255), random(255));
  }
  if (back) {
    t -= 0.005;
  } else {
    t += 0.005;
  }
}
