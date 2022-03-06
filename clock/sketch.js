const columns = 12;
const rows = 5;

const width = 600;
const height = 250;

const scalar = width / columns;

function setup() {
  // put setup code here
  createCanvas(width, height);
  frameRate(1);
}

function draw() {
  // put drawing code here
  background(100);
  translate(scalar / 2, scalar / 2);
  stroke(0);

  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        fill(0);
      } else {
        fill(255);
      }
      circle(x * scalar, y * scalar, scalar / 3);
    }
  }
}
