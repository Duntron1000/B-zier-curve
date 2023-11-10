let layers = [[]];
let bs = [];
let px = [];
let py = [];

let t = 0;
let back = false;
let c;

function setup() {
  c = color(random(255), random(255), random(255));

  createCanvas(1000, 1000);
  for (let i = 0; i < 100; i++) {
    layers[0].push(new dot(random(1000), random(1000), 5));
  }

  cursor = 0;
  for (let j = layers[0].length - 1; j >= 1; j--) {
    temp = [];
    for (let i = 0; i <= j - 1; i++) {
      temp.push(new dot(0, 0, 10));
      print(i);
    }
    layers.push(temp);
  }

  for (let i = 0; i < layers.length; i++) {
    bs.push(new besier(layers[i]));
  }
}

function draw() {
  background(220);
  for (const c of bs) {
    c.disp();
  }

  //update all positons
  for (let j = 1; j < layers.length; j++) {
    for (let i = 0; i < layers[j].length; i++) {
      layers[j][i].updatePos(
        lerp(layers[j - 1][i].x, layers[j - 1][i + 1].x, t),
        lerp(layers[j - 1][i].y, layers[j - 1][i + 1].y, t)
      );
    }
  }

  px.push(layers[layers.length - 1][0].x);
  py.push(layers[layers.length - 1][0].y);

  stroke(c);
  fill(c);
  for (let i = 0; i < px.length; i++) {
    ellipse(px[i], py[i], 5, 5);
  }
  stroke(0);
  fill(0);

  if (t >= 1) {
    back = true;
    px.length = 0;
    py.length = 0;
    c = color(random(255), random(255), random(255));
  }
  if (t <= 0) {
    back = false;
    px.length = 0;
    py.length = 0;
    c = color(random(255), random(255), random(255));
  }
  if (back) {
    t -= 0.0001;
  } else {
    t += 0.0001;
  }
}
