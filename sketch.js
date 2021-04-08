var wall,bullet;
var thickness,speed,weight;
var damage;

function setup() {
  createCanvas(1200,800);
 thickness= random(22,83);
 speed= random(223,321);
 weight= random(30,52);
 
  wall = createSprite(900, 200,thickness,height);
  wall.shapeColor = "grey";

  bullet = createSprite(100, 400, 50, 20);
  bullet.shapeColor = "white";
  bullet.velocityX=speed;
  
}

function draw() {
  background(0,0,0);  
 
  if(hasCollided(bullet,wall)){
 bullet.velocityX=0;
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

 if(damage>10){
 wall.shapeColor=color(255,0,0);
 }

 if(damage<10){
 wall.shapeColor=color(0,255,0);
 }
  }

 text("damage="+damage,300,200);
drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}
