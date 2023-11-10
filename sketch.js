let layers = [[], [], [], []];
let bs = [];
let px = [];
let py = [];
let controlNodes = [];
let derivedNodes = [];
let thirdNodes = [];
let t = 0;
let back = false;
let c;
bs.push(new besier(layers[0]));
bs.push(new besier(layers[1]));
bs.push(new besier(layers[2]));
bs.push(new besier(layers[3]));

function setup() {
  c = color(random(255), random(255), random(255));

  createCanvas(400, 400);
  layers[0].push(new dot(50, 200, 10));
  layers[0].push(new dot(200, 300, 10));
  layers[0].push(new dot(330, 100, 10));
  layers[0].push(new dot(350, 200, 10));
  for (let i = 0; i <= 2; i++) {
    layers[1].push(new dot(0, 0, 15));
  }
  for (let i = 0; i <= 1; i++) {
    layers[2].push(new dot(0, 0, 15));
  }
  layers[3].push(new dot(0, 0, 15));
}

function draw() {
  background(220);
  for (const c of bs) {
    c.disp();
  }

  for (let i = 0; i < layers[0].length - 1; i++) {
    layers[1][i].updatePos(
      lerp(layers[0][i].x, layers[0][i + 1].x, t),
      lerp(layers[0][i].y, layers[0][i + 1].y, t)
    );
  }

  layers[2][0].updatePos(
    lerp(layers[1][0].x, layers[1][1].x, t),
    lerp(layers[1][0].y, layers[1][1].y, t)
  );

  layers[2][1].updatePos(
    lerp(layers[1][1].x, layers[1][2].x, t),
    lerp(layers[1][1].y, layers[1][2].y, t)
  );

  px.push(lerp(layers[2][0].x, layers[2][1].x, t));
  py.push(lerp(layers[2][0].y, layers[2][1].y, t));

  layers[3][0].updatePos(
    lerp(layers[2][0].x, layers[2][1].x, t),
    lerp(layers[2][0].y, layers[2][1].y, t)
  );

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
    t -= 0.003;
  } else {
    t += 0.003;
  }
}
