
var bullet, wall;
var speed, thickness, weight;
var gameState = "play";

function setup() {
  createCanvas(1600,400);

speed = random(223, 321);
thickness = random(400, 1500);
weight = random(30, 52);
  
  bullet = createSprite(80, 200, 20, 20);
  bullet.shapeColor = color(255, 255, 255);


  wall = createSprite(1500, 200, 10, 200);
  wall.shapeColor = color(255, 255, 255);

}

function draw() {
  background(0,0,0);  
  
  bullet.velocityX = speed/10;

  // telling the car when to stop

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2 && weight*speed*speed/thickness*thickness*thickness*2 < 10){
   bullet.velocityX = 0;
   wall.shapeColor = color(0, 0, 255);
  }

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2 && weight*speed*speed/thickness*thickness*thickness*2 > 10){
    bullet.velocityX = 0;
    wall.shapeColor = color(0, 255, 0);
   }

  drawSprites();
}