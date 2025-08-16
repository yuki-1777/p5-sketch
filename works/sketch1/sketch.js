
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth(8);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let color1="#4196ED";
  let color2="#40E0E7";
  
  background('#FFFFFF00');
  // strokeWeight(2);
  // blendMode(SCREEN);
  for (let y = 0; y <= 2; y++) {
    for (let x = 0; x <= 2; x++) {
      stroke(color1);
      fill(color1);
      if (y % 2 == 0 && x%2 ==1) {
        stroke(color2);
        fill(color2);
      } else if(y % 2 == 1 && x%2 ==0){
        stroke(color2);
        fill(color2);
      }
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      // ellipse(0, 0, 300, 300);
      ellipseMesh(150, 50, 2)
    }
  }
}

function ellipseMesh(radius, detail, thickness) {
  strokeW = thickness/2;
  let innerRadius = radius - strokeW/2;
  let outerRadius = radius + strokeW/2;
  let segmentRads = TWO_PI / detail;
  
  beginShape(TRIANGLES);
  for (let i = 0; i < detail; i++) {
    let curRads = segmentRads * i;
    let nextRads = segmentRads * (i + 1);
    vertex(cos(curRads) * innerRadius, sin(curRads) * innerRadius, 0);
    vertex(cos(curRads) * outerRadius, sin(curRads) * outerRadius, 0);
    vertex(cos(nextRads) * outerRadius, sin(nextRads) * outerRadius, 0);
    
    vertex(cos(curRads) * innerRadius, sin(curRads) * innerRadius, 0);
    vertex(cos(nextRads) * innerRadius, sin(nextRads) * innerRadius, 0);
    vertex(cos(nextRads) * outerRadius, sin(nextRads) * outerRadius, 0);
  }
  endShape();
}
