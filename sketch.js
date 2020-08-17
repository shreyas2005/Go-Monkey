var bananaimg,obstacleimg,monkey,backgroundreal,stoneimg;
var obstaclegroup,foodgroup;
var background1,fakeground;
var score=0;
var count=2;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  
  background1=loadImage("jungle.png");

  stoneimg = loadImage("stone.png");
  
  bananaimg = loadImage("banana.png");
  
  obstacleimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  
  
}
function setup() {
  createCanvas(600, 340);
  backgroundreal=createSprite(300,170,600,340);
  backgroundreal.addImage("name1",background1);
  backgroundreal.scale=2;
  backgroundreal.velocityX=-4;
  backgroundreal.x=backgroundreal.width/2;
  
  monkey=createSprite(100,200,30,30);
  monkey.addAnimation("name",obstacleimg);
  monkey.scale=0.15;
  
  obstaclegroup=new Group();
  foodgroup=new Group();

  fakeground = createSprite(300,320,600,20);
  fakeground.visible=false;
}

function draw() {
  background(100);
  if(gameState===PLAY){
    if (keyDown("space")&&monkey.y>=245){
    monkey.velocityY=-20;
  }
    if(backgroundreal.x>0){
   backgroundreal.x=backgroundreal.width/2; 
  }
     
  if(foodgroup.isTouching(monkey)){
     score+=2;
  foodgroup.destroyEach();   
  }
    
      food();
stone2();
    
    if(obstaclegroup.isTouching(monkey)){      
    monkey.scale=0.15;
    count-=1;
  }
   else if(  obstaclegroup.isTouching(monkey)&&count===1){ 
  gameState=END;
} 
    
  }
else if(gameState===END){
  
  
  
}
 createEdgeSprites();
 monkey.collide(fakeground);  
  monkey.velocityY+=1;
drawSprites();
   
  fill("white");
  textSize(20);
  text("score : "+score,300,50);
  
  switch(score){
      
    case 10 : monkey.scale=0.19;
    break;
    case 20 : monkey.scale=0.2;
    break;
    case 30 : monkey.scale=0.23;
    break;
    case 40: monkey.scale=0.24;
    break;    
    default : break;      
      
      
      
  }
  

}
function food(){
if(frameCount%80===0){
  var bana=createSprite(600,Math.round(random(120,200)));
  bana.addAnimation("Banana",bananaimg);
  bana.velocityX=-4;
  bana.scale=0.08;
  bana.lifetime=150;
  foodgroup.add(bana);
}
}
function stone2(){
  if(frameCount%300===0){
    var obstacle=createSprite(600,290);
    obstacle.addAnimation("Stone",stoneimg);
    obstacle.velocityX=-4;
    obstacle.scale=0.2;
    obstacle.lifetime=150;
    obstaclegroup.add(obstacle);
  }
}