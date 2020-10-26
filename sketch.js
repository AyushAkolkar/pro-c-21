var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,60,20);
  bullet.velocityX=speed;
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
} 

function draw() {
  background("white"); 
   bullet.x=World.mouseX;
   bullet.Y=World.mouseY;
   
   if (hasCollided(bullet,wall))
   {
     bullet.velocityX=0;
     vardamage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if (damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
   
   if(bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=bullet.velocityX*(-1);
    wall.velocityX=wall.velocityX*(-1);
    }
    if( bullet.y-wall.y<bullet.height/2+wall.height/2
    && wall.y-bullet.y<wall.height/2+bullet.height/2 )
    {
    bullet.velocityY=bullet.velocityY*(-1);
    wall.velocityY=wall.velocityY*(-1);
    }
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}