
var trex ,trex_running;
var ground , Ground_move;
var invisibleground
var cloud,cloudimage
var obstacle,obstacleimg1,obstacleimg2,obstacleimg3,obstacleimg4,obstacleimg5,obstacleimg6

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  Ground_move=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  obstacleimg1=loadImage("obstacle1.png")
  obstacleimg2=loadImage("obstacle2.png")
  obstacleimg3=loadImage("obstacle3.png")
  obstacleimg4=loadImage("obstacle4.png")
  obstacleimg5=loadImage("obstacle5.png")
  obstacleimg6=loadImage("obstacle6.png")
}

function setup(){
createCanvas(600,200)
  
//create a trex sprite
trex= createSprite(50,100,50,50)
trex.addAnimation("running",trex_running)
trex.scale=0.5
ground= createSprite(100,180,700,30)
ground.addImage(Ground_move)
invisibleground= createSprite(100,195,600,20)
invisibleground.visible=false
 }

function draw(){
  background("white")
  if(keyDown("space")&&trex.y>100){
    trex.velocityY=-6
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(invisibleground)
  ground.velocityX=-9
    if(ground.x<0) {
      ground.x=ground.width/2
  }
  spawncloud()
  spawnobstacle()
  drawSprites() 

}
function spawncloud(){
if (frameCount%60===0){

cloud= createSprite(500,11,11,10)
cloud.velocityX=-4
cloud.addImage(cloudimage)
cloud.y=random(20,100)
}}
function spawnobstacle(){
if (frameCount%60===0){
obstacle= createSprite(500,170,10,10)
obstacle.velocityX=-5
obstacle.scale=0.5
var rand=Math.round(random(1,6))
switch(rand){
case 1: obstacle.addImage(obstacleimg1)
break;
case 2: obstacle.addImage(obstacleimg2)
break;
case 3: obstacle.addImage(obstacleimg3)
break;
case 4: obstacle.addImage(obstacleimg4)
break;
case 5: obstacle.addImage(obstacleimg5)
break;
case 6: obstacle.addImage(obstacleimg6)
break;
default:break
}
}}
