//Start of main.js
let y = 440;

let speed = 2;

var drops = [];

let newdrop = 999;

let spawnrate = 10;

let points = 0;

let leveluprate = 10;

let levelup = 0;

function drop(){
  this.x = random(480);
  this.y = 0;

  this.move = function(){
    this.y += 0.5 * speed;
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
