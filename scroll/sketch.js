const width = 600;
const height = 600;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  document.addEventListener('scroll', function(e) {
    scrollPos =  window.scrollY;
  })
}

let acc = 0;

let scrollPos = 0;

function draw() {
  let value = acc % (255 * 2);
  if (value > 255) {
    let delta = value - 255;
    value = 255 - delta;
  }
  // put drawing code here
  background(value);
  acc++;

  let x = map(scrollPos, 0, document.body.scrollHeight - window.innerHeight, 0, width);
  let y = height / 2;
  strokeWeight(3);
  stroke(0);
  fill(255);
  circle(x, y, 30);
}
