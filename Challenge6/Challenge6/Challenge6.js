function setup() {
  createCanvas(700, 700);
}

stage = 0;

l1p1X = 0;
l1p1Y = 0;
l1p2X = 0;
l1p2Y = 0;

cp1X = 0;
cp1Y = 0;

cp2X = 0;
cp2Y = 0;

moveCP1 = 0;
moveCP2 = 0;

function mousePressed() {
  if (stage == 0) {
    l1p1X = mouseX;
    l1p1Y = mouseY;
    l1p2X = mouseX;
    l1p2Y = mouseY;
    stage = stage + 1;
  } else if (stage == 2) {
    cp1X = mouseX;
    cp1Y = mouseY;
    stage = stage + 1;
  } else if (stage == 3) {
    cp2X = mouseX;
    cp2Y = mouseY;
    stage = stage + 1;
  } else if (mouseX + 10 > cp1X && mouseX - 10 < cp1X && mouseY + 10 > cp1Y && mouseY - 10 < cp1Y) {
    moveCP1 = 1;
  } else if (mouseX + 10 > cp2X && mouseX - 10 < cp2X && mouseY + 10 > cp2Y && mouseY - 10 < cp2Y) {
    moveCP2 = 1;
  }
}

function mouseReleased() {
  if (stage == 1) {
    l1p2X = mouseX;
    l1p2Y = mouseY;
    stage = stage + 1;
  } else if (moveCP1 == 1) {
    cp1X = mouseX;
    cp1Y = mouseY;
    moveCP1 = 0;
  } else if (moveCP2 == 1) {
    cp2X = mouseX;
    cp2Y = mouseY;
    moveCP2 = 0;
  }
}

function draw() {
  background(188, 188, 188);

  if (stage == 4) {
    strokeWeight(10);
    stroke(21, 139, 20);
    point(cp1X, cp1Y);

    strokeWeight(10);
    stroke(255, 1, 1);
    point(cp2X, cp2Y);
    
    strokeWeight(3)
    stroke(1, 1, 255);
    noFill();
    bezier(l1p1X, l1p1Y, cp1X, cp1Y, cp2X, cp2Y, l1p2X, l1p2Y);
  } else {
    strokeWeight(3);
    stroke(1, 1, 255);
    line(l1p1X, l1p1Y, l1p2X, l1p2Y);
    
    strokeWeight(10);
    stroke(21, 139, 20);
    point(cp1X, cp1Y);

    strokeWeight(10);
    stroke(255, 1, 1);
    point(cp2X, cp2Y);
  }
}
