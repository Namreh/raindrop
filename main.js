//Start of main.js
let y = 435;




function setup(){
  createCanvas(500, 500);
  noCursor();
}


function update(){

}

function draw(){
  update();
  background(51);
  //Here, the graphics are drawn


  //this is the player
  rect(mouseX - 25, y, 50, 50);
}
