function setup() {
  createCanvas(640, 480);
}

function myTranslate(x, y, tx, ty) {
  newX = x + tx;
  newY = y + ty;
  return [newX, newY];
}

function myRotate(x, y, angle) {
  return myRotatePiv(x,y,angle,width/2, height/2)
}

function myRotatePiv(x, y, angle, pivX, pivY) {
  angle = angle * (PI / 180);
  newX = pivX + ((x - pivX) * cos(angle)) - ((y - pivY) * sin(angle));
  newY = pivY + ((x - pivX) * sin(angle)) + ((y - pivY) * cos(angle));
  return [newX, newY];
}

function myScaling(x, y, fixedX, fixedY, sX, sY) {
  newX = x * sX + fixedX * (1 - sX);
  newY = y * sY + fixedY * (1 - sY);
  return [newX, newY];
}

function myReflection(x, y) {
  return [x, y];
}

function myShearX(x, y) {
  return [x, y];
}

function myShearY(x, y) {
  return [x, y];
}

function draw() {
  background(102);
  fill(255);
  polygon(width/2, height/2, 100, 6, null);
  fill(1);
  polygon(width/2, height/2, 100, 6, myTranslate, 50, 50);
  fill(255, 1, 1);
  polygon(width/2, height/2, 100, 6, myRotate, 45);
  fill(1, 255, 1);
  polygon(width/2, height/2, 100, 6, myRotatePiv, 50, width/2, height/2);
  fill(1, 255, 1);
  polygon(width/2, height/2, 100, 6, myScaling, width/2, height/2, 2, 2);
  /*fill(1, 255, 1);
  polygon(width/2, height/2, 100, 6, myReflection, 50, 50, 50);
  fill(1, 255, 1);
  polygon(width/2, height/2, 100, 6, myShearX, 50, 50, 50);
  fill(1, 255, 1);
  polygon(width/2, height/2, 100, 6, myShearY, 50, 50, 50);*/
}

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx,sy, ...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
