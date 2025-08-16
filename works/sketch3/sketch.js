let positions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#1fbd64ff');
  stroke('#fcfcfcff');
  noFill();
  strokeWeight(70);
  //   if (positions.length === 0 || dist(mouseX, mouseY, positions[positions.length-1].x, positions[positions.length-1].y) > 3) {
  //   positions.push({x: mouseX, y: mouseY});
  //   if (positions.length > 100) positions.shift();
  // }

  positions.push({x: mouseX, y: mouseY});
  if (positions.length > 100) positions.shift(); // 最大50個まで
      beginShape();
      for (let pos of positions) {
        curveVertex(pos.x, pos.y);
      }endShape();
    
}
