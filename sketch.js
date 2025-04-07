let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    };
    circles.push(circle);
  }
}

function draw() {
  background(255);

  let sizeFactor = map(mouseX, 0, width, 20, 80);

  for (let circle of circles) {
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size + sizeFactor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}