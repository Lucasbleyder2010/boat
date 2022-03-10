var ship
var sea
function preload(){
shipImg1= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg= loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea.Img= loadImage("sea.png");
shipImg1 = loadAnimation
spriteShip.addImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
spritesea.addImage(seaImg)
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
 }
    drawSprites();

 
}
