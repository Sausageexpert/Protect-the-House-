var bullet, wall;
var speed, thickness, weight;
var leftEdge, rightEdge;

function setup() {
  createCanvas(1600,400);

speed = random(223, 321);
thickness = random(30,90);
weight = random(30, 52);
  
  bullet = createSprite(80, 200, 20, 20);
  bullet.shapeColor = color(255, 255, 255);
  bullet.velocityX = speed/10;
  wall = createSprite(1500, 200, 10, 200);
  wall.shapeColor = color(230,230,230);

  

}

function draw() {
  background(0,0,0);  
  
 

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (weight*speed*speed)/(2*thickness*thickness*thickness);

    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall){

    rightEdge = bullet.x + bullet.width/2;
  leftEdge = wall.x - wall.width/2;
  //leftEdge = wall.x ;

    if (rightEdge>=leftEdge)
	{
		return true;
	}
	return false;

 

}
