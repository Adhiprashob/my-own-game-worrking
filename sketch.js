var rocket,rocketImg;
var score=0,obstacle;
var obstacleImg,tower,towerImg;
var star,starImg;
var gameState="play",obstacle,obstacleImg;
var obstaclesGroup,starsGroup;
var start,startImg;
var gameOver,gameoverImg;

var rocketImg;


function preload(){

    rocketImg = loadImage("rocket.png");
    starImg = loadImage("star.png");
    towerImg = loadImage("tower.png");
    obstacleImg = loadImage("obstacle3.png");
    startImg = loadImage("start.png");
    gameoverImg = loadImage("gameOver.png");
}

function setup() {
background(200);

createCanvas(600, 600);

// make tower

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  

  // create groups

  obstaclesGroup = new Group();
  starsGroup = new Group();
  

  // invisible ground make

  invisibleGround = createSprite(160,590,900,10);
  invisibleGround.visible = false;

  invisibleWall1 = createSprite(88,100,10,999);
invisibleWall1.visible=false;

invisibleWall2 = createSprite(500,100,10,999);
invisibleWall2.visible=false;


//debug=true;

  //sprite rocket

  rocket = createSprite(300,530);
rocket.addImage("rocket",rocketImg);
rocket.scale=0.3;
debug=true;


}


function draw() {


if(gameState==="play"){

  

  start = createSprite(290,300);
  start.addImage(startImg);

// touch destroy

if(starsGroup.isTouching(rocket)){
  starsGroup.destroyEach();
  score=score+1;
}


// game state end 

      

if(obstaclesGroup.isTouching(rocket)){
 // gameOver = createSprite(300,200);
  //gameOver.addImage(gameoverImg);
 // obstaclesGroup.destroyEach();
  //starsGroup.destroyEach();
 // rocket.collide(invisibleGround);
  //rocket.collide(invisibleWall1);
  //rocket.collide(invisibleWall2);
//rocket.velocityY=0;
//tower.velocityY=0;
//invisibleGround = createSprite(160,590,900,10);
 // invisibleGround.visible = false;
//rocket.destroyEach();
 // invisibleWall1 = createSprite(88,100,10,999);
//invisibleWall1.visible=false;

//invisibleWall2 = createSprite(500,100,10,999);
//invisibleWall2.visible=false;


  gameState="END";

  
}
  
if(gameState==="END"){
  gameOver = createSprite(300,200);
  gameOver.addImage(gameoverImg);
  obstaclesGroup.destroyEach();
  starsGroup.destroyEach();
  rocket.collide(invisibleGround);
  rocket.collide(invisibleWall1);
  rocket.collide(invisibleWall2);
rocket.velocityY=0;
tower.velocityY=0;
invisibleGround = createSprite(160,590,900,10);
  invisibleGround.visible = false;
rocket.destroy();
  invisibleWall1 = createSprite(88,100,10,999);
invisibleWall1.visible=false;

invisibleWall2 = createSprite(500,100,10,999);
invisibleWall2.visible=false;

}

  // controlls

  if(keyDown("left_arrow")){
    rocket.x-=3;
  
  }

  if(keyDown("right_arrow")){
    rocket.x+=3;
  
  }

  
  
  

  if(keyDown("space")&& rocket.y >= 100) {
    rocket.velocityY = -5;
  }

  // gravity
  
  rocket.velocityY = rocket.velocityY + 0.8

  // infinity

    if(tower.y > 400){
        tower.y = 300
      }
     
    
      
      // collide rocket invisible ground

      rocket.collide(invisibleGround);
      rocket.collide(invisibleWall1);
      rocket.collide(invisibleWall2);



     // call function
      obstacles();
      stars();

    }  
      drawSprites();
    
      textSize(40);
      fill("white");
     text("score"+score,100,100);
     
      
  
}
 function stars(){
   if(frameCount%240===0){

  star = createSprite(200,200);
star.addImage("star",starImg);
star.scale = 0.3
star.velocityY+=5;
star.x=Math.round(random(100,400));
star.lifetime=800;
rocket.depth = star.depth;
rocket.depth = rocket.depth+1;
starsGroup.add(star);
   }
 }

function obstacles(){

  if(frameCount%260===0){

    obstacle = createSprite(200,200);
    obstacle.addImage(obstacleImg);
    obstacle.lifetime=800;
    obstacle.scale =0.1;
    obstacle.velocityY+=6;
    obstacle.x=Math.round(random(100,500));
   obstaclesGroup.add(obstacle);

  }
}

