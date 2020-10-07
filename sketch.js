var bullet,wall;
var speed,weight;
var thickness

function setup() {
speed = random(223,321);
weight = random(30,52);
thickness=random(22,83);
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);
  if(wall.x - bullet.x < (bullet.width+wall.width)/2)
   {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeClolor=color(225,0,0);
    }

      if(damage<10)
      {
        
        wall.shapeColor=color(0,255,0);
      }
   } 
  drawSprites();
}