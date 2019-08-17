//Start of main.js
let y = 435;

let speed = 2

var drops = []


function drop(){
  this.x = random(480);
  this.y = 0;

  this.move = function(){
    this.y += 0.5 * speed;
  }

  this.draw = function(){
    rect(this.x, this.y, 10, 40)
  }
}

function setup(){
  createCanvas(500, 500);
  noCursor();
//  drops.push(new drop())
}

function update(){

}

function draw(){
  update();
  background(51);
  //Here, the graphics are drawn
  for(let i = 0 ; i<drops.length; i++){
    drops[i].move();
    drops[i].draw();
  }

  //this is the player
  rect(mouseX - 25, y, 50, 50);
}
