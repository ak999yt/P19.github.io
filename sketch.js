var space, spaceImg;
var meteor, meteorImg, meteorsGroup;
var rocket, rocketImg;
var gameState = "play";






function preload(){
spaceImg = loadImage("space.jpg");
rocketImg = loadImage("rocket.png");
meteorImg = loadImage("meteor.png");

}

function setup() {
  createCanvas(600,600);
  space = createSprite(600,600);
  space.addImage("space", spaceImg);
  space.velocityY = 1;

  rocket = createSprite(300,450,50,50);
  rocket.addImage("rocket",rocketImg);
  rocket.scale = 0.15;
  meteorsGroup = new Group();
  starsGroup = new Group();
}

function draw() {
  background(200);
  drawSprites();
  
  if(gameState == "play"){
    if(space.y >400){
      space.y = 200;
    }
  

  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 3;
  }

  if(keyDown("left_arrow")){
    rocket.x = rocket.x - 3;
  }

  spawnMeteors();
  
}

if (meteorsGroup.isTouching(rocket) || rocket.y > 600) {
  rocket.destroy();
  meteorsGroup.destroyEach();
  gameState = "end";
  space.velocityY = 0;
}

else if(gameState=="end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over",230,250);
}

}

function spawnMeteors() {
  if (frameCount % 240 === 0) {
    var meteor = createSprite(200, -50);
    meteor.addImage(meteorImg);
    meteor.scale = 0.2;
    meteor.velocityY = 1;
    meteor.x = Math.round(random(120, 400));
    meteor.lifetime = 1000;
    meteorsGroup.add(meteor);

  }
}