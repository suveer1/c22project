var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(200, 200, 50, 5);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="80,80,80";
bullet.velocityX=speed;

  thickness=random(22,83);
speed=random(233,321);
weight=random(30,52);
  
}

function draw() {
  background(10);  
  
if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage = 0.5*speed*weight*speed/(thickness*thickness*thickness);
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
if(damage>10){
  wall.shapeColor=color(255,0,0);
}
}
  drawSprites();
  
  
}
function hascollided(b1,b2){
  bulletRightEdge = b1.x+b1.width;
  wallLeftEdge = b2.x;
  if(bulletRightEdge>=wallLeftEdge){
return true;
  }
  {
return false;
  }
}
