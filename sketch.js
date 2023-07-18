var standingImage, runningAnimation
var background,obstacle1, obstacle2,obstacle3
var obstacle,runner
var startImage
var gameState = 'serve'


function preload() {

  runningAnimation = loadAnimation("running1.png", "running2.png", "running4.png")
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
 backgroundImg = loadImage("background.png")
  standingImage = loadAnimation("standingImage.png")
  startImage = loadImage("startImage.png")
}


function setup() {
  createCanvas(800,400);
  invisibleGround = createSprite(200,400,800,10)
  invisibleGround.visible=true

 fox = createSprite(50,350)
 fox.addAnimation("standingImage",standingImage)
 fox.addAnimation("runningAnimation",runningAnimation)
 fox.scale=0.5

 start = createSprite(400,200)
 start.addImage("startImage", startImage)
 start.scale = 0.2

 
 

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  console.log(fox.y)

  if (gameState === "serve"){
    if (mousePressedOver(start)){
      gameState = "play"
    }
   }
   if (gameState === "play"){
    start.visible = false
    fox.changeAnimation("runningAnimation",runningAnimation)

    spawnObstacles()

    if(keyIsDown(UP_ARROW)&&fox.y>250){
      fox.velocityY=-16
    }
    fox.velocityY+=1
  }

fox.collide(invisibleGround)




}

function spawnObstacles(){
  
  if(frameCount%100==0){
obstacle = createSprite(800,360)
  obstacle.scale = 0.236
  obstacle.velocityX = -5

  

  var rand = Math.round(random(1,3))
switch(rand){
  case 1:obstacle.addImage(obstacle1)
  break
  case 2:obstacle.addImage(obstacle3)
  break
  case 3:obstacle.addImage(obstacle2)
  break
 
  getFrameRate( =)
}
  
  }
}