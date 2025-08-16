
let spacing = 200;
let radius = 50;
let positions=[];
let randomMin=-15;
let randomMax=15;
let frameCountMax=100;


function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
  fill('#333333')
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
    background('#E94560');
  for(let x = spacing / 2; x <= width+spacing; x+= spacing){
    for(let y = spacing/2; y <= height+spacing; y += spacing){
      positions.push({
        x:x,
        y:y,
        dx:random(randomMin, randomMax),
        dy:random(randomMin, randomMax),
        angle:random(-PI/8, PI/8)
      })
    }
  }
  for(let i=0; i<positions.length; i++){
    let p = positions[i];
    push();
    translate(p.x+p.dx, p.y+p.dy);
    rotate(p.angle);
    ellipse(0,0, radius*2, radius*2);
    pop();
  }
  if(frameCount > frameCountMax){
    noLoop();
  }
}

function mousePressed(){
  if(!isLooping()){
    saveCanvas('saved_frame', "png");
    console.log("画像保存しました")
  }
}

