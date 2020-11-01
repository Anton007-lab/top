function setup() {
createCanvas(windowWidth, windowHeight);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
background(31, 120, 255);
// display()

noStroke()
fill(242, 71, 39)
rect(270, 470, mouseX, 80, 30);

// 270 — расстояние от левого края
// 470 — рассстояние от верхнего края
// mouseX - увеличение ширины по горизонтали
// 80 — высота
// 30 — сглаживание
}
function setup() {
createCanvas(windowWidth, windowHeight);
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(31, 120, 255);
  textFont('Arial Black');
  textSize(50);
  noStroke()
  textAlign(CENTER)

  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y

  fill(242, 71, 39)
  ellipse(mouseX-100, 70, 100, 100); //красный круг

  // ellipse(mouseX-100, 70, mouseX*2, 100); //красный круг

  fill(248, 216, 45)
  ellipse(mouseX/2-100, height * 0.4, 150, 150); //желтый круг

  fill(255, 92, 168)
  ellipse(mouseX*2-70, height * 0.8, 70, 70); //розовый круг


  fill(115, 200, 76)
  push();
  translate(width * 0.3, height * 0.7);
  rotate(frameCount / 100.0);
  polygon(0, 0, 50, 5); //зеленая фигура
  pop();

  fill(0, 87, 168)
  push();
  translate(width * 0.7, height * 0.35);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 4); //синяя фигура
  pop();

  fill(255)
  text("води мышкой ну или пальцем", width/2, height/2)
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
