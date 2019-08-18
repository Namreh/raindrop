//Start of main.js
let y = 440;

let speed = 2;

var drops = [];

let newdrop = 999;

let spawnrate = 10;

let points = 0;

let leveluprate = 10;

let levelup = 0;

let side = false;

function endGame(){
  console.log("game over");
}

function drop(){
  if (side){
    this.x = random(250, 450)
  }
  else {
    this.x = random(0, 249)
  }

  this.y = 0;

  this.move = function(){
    this.y += 0.5 * speed;
    if((this.x < mouseX+25 && this.x+10>mouseX-25) && (this.y+15 < y+50 && this.y+40 > y)){
      endGame();
    }
    if(this.y > 500)
      drops.shift()
  }

  this.draw = function(){
    rect(this.x, this.y, 10, 40);
  }
}

function setup(){
  createCanvas(500, 500);
  noCursor();
//  drops.push(new drop())
}

function update(){
  if(newdrop>=1000){
    drops.push(new drop());
    newdrop = 0;
    points += 5
    levelup++;
    side = !side;
  }
  if(levelup>=leveluprate){
    spawnrate += 5;
    speed += 0.2;
    levelup = 0;
  }
  newdrop += spawnrate;
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

  //draw points
  fill("white")
  textSize(30)
  text(points.toString(), 15, 40)
}
