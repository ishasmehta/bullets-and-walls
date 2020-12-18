var bullet, speed, weight, grade;
var wall, thickness;

function setup() {
  createCanvas(1600, 400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(50, 200, 50, 10);

  bullet.shapeColor = "white";
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  fill("white");
  textSize(18);
  text("Bullet weight: "+Math.round(weight)+" gm",30,325);
  text("Bullet speed: "+Math.round(speed)+" km/hr",30,345);
  text("Wall thickness: "+Math.round(thickness)+" cm",30,365);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
    
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
      grade = "Not effective";
    }
    else if(damage < 10){
      wall.shapeColor = color(0,255,0);
      grade = "Effective";

    }

    text("Wall damage: "+grade+" ("+Math.round(damage)+")",30,385);
  }

  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width/2;
  wallLeftEdge = lwall.x - lwall.width/2;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}