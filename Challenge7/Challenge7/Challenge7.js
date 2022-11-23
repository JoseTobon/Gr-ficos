stage = 0;

function mouseClicked() {
  stage = stage + 1;
}

function storyboard(x,y) {
  newX = x;
  newY = y;
  stroke(5);
  point(newX,newY);
}

function puntitos(a,b) {
  newA = a;
  newB = b;
  stroke(5);
  point(newA,newB);
}

function setup() {
  createCanvas(1390, 650);
}

function draw() {
  background(134, 131, 131);

  if (stage == 1) {
    noFill();
    bezier(120, 40, 320, 60, 320, 300, 330, 300);
    bezier(330, 300, 350, 150, 450, 98, 600, 140);
  } else if (stage == 2) {
    storyboard(100, 50);
  } else if (stage > 2) {
    puntitos(200, 60);
  }
}
