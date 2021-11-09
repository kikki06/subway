var path,boy,coin,leftBoundary,rightBoundary;
var pathImg,boyImg,coinImg;
var i,c;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadAnimation("coin.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);


leftBoundary.visible = false;





rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/100;
  }

  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/

  /*if(path.y > 400 ){
path.y = height/2;}*/

//if(path.y > 400 ){path.y = height/2;}
  
  drawSprites();
}
  function spawnCoin()  {
  if (framCount % 60) {
  coin = createSprite(200,200,20,20)
  coin.scale=0.5
  coin.addAnimation("coin",coinImg);
  coin.velocityY=4;}
 
  }


