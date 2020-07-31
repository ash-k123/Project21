var wall,thickness;
var bullet,speed,weight;
var damage;


function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet = createSprite(50,200,50,50);
  
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
 
}

  function draw() {
  background(0);  
  
  bullet.display();
  wall.display();
  wall.shapeColor = color(80,80,80);

 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 }
 if(damage>10){
   wall.shapeColor = color(255,0,0);
 }
 if(damage<10){
   wall.shapeColor = color(0,255,0);
 }
  drawSprites();
}
function hasCollided(bullet,wall){
 var bulletRightEdge = bullet.x +bullet.width;
 var wallEdge = wall.x;

 if(bulletRightEdge>=wallEdge){
   return true;
 }
 return false;
}