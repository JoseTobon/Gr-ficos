stage = 0;

curve1 = [120, 40, 320, 20, 320, 300, 330, 300];
curve2 = [330, 300, 340, 300, 340, 20, 540, 40];

function setup() {
  createCanvas(800, 400);
  frameRate(1);
}

function mouseClicked() {
  stage = stage + 1;
}

function trayectory(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2) {
  noFill();
  bezier(x1, y1, cp1x, cp1y, cp2x, cp2y, x2, y2);
}

function storyboard(curve1, curve2) {
  fill(255);
  steps = 30;
  inc = 10;
  dec = 40;
  for (i = 0; i <= steps; i++) {
    t = i / float(steps);
    x = bezierPoint(curve1[0], curve1[2], curve1[4], curve1[6], t);
    y = bezierPoint(curve1[1], curve1[3], curve1[5], curve1[7], t);
    ellipse(x, y, inc, 10);
    inc = 10 + (i);
  }
  for (i = 0; i <= steps; i++) {
    t = i / float(steps);
    x = bezierPoint(curve2[0], curve2[2], curve2[4], curve2[6], t);
    y = bezierPoint(curve2[1], curve2[3], curve2[5], curve2[7], t);
    ellipse(x, y, dec, 10);
    dec = 40 - (i);
  }
}

async function animacion(curve1) {
  rebote = 10;
  fill(255);
  steps = 60;
  for (i = 0; i <= steps; i++) {
    await sleep(10);
    t = i / float(steps);
    clear();
    background(134, 131, 131);
    x = bezierPoint(curve1[0], curve1[2], curve1[4], curve1[6], t);
    y = bezierPoint(curve1[1], curve1[3], curve1[5], curve1[7], t);

    ellipse(x, y, rebote, 10);
    rebote = 10 + i * 0.5;
  }
  stage = stage + 1;
}

async function animacion2(curve2) {
  regreso = 40;
  for (i = 0; i <= steps; i++) {
    await sleep(10);
    t = i / float(steps);
    clear();
    background(134, 131, 131);
    x = bezierPoint(curve2[0], curve2[2], curve2[4], curve2[6], t);
    y = bezierPoint(curve2[1], curve2[3], curve2[5], curve2[7], t);

    ellipse(x, y, regreso, 10);
    regreso = 40 - i * 0.5;
  }
  stage = stage + 1;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function draw() {
  background(134, 131, 131);

  if (stage == 1) {
    trayectory(120, 40, 320, 20, 320, 300, 330, 300);
    trayectory(330, 300, 340, 300, 340, 20, 540, 40);
  } else if (stage == 2) {
    trayectory(120, 40, 320, 20, 320, 300, 330, 300);
    trayectory(330, 300, 340, 300, 340, 20, 540, 40);
    storyboard(curve1, curve2);
  } else if (stage == 3) {
    animacion(curve1);
  } else if (stage == 4) {
    animacion2(curve2);
  } else if (stage == 5) {
    ellipse(540, 40, 10, 10);
  }
}
