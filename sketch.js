var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage;
var leaf, leafImage;
var edges;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("index.png");
  leafImage = loadImage("LeafFarket.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

edges= createEdgeSprites();

}


function draw() {
  background(0);
  console.log(frameCount);
  rabbit.x= World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){

  if(frameCount%80===0){

    apple = createSprite(200,0);
    apple.addImage(appleImage);
    apple.scale=0.05;
    apple.x= random(40,360);
    apple.velocityY=4;
    apple.depth= rabbit.depth;
    rabbit.depth+=1;
    apple.lifetime=200;
  }
  
  

}

function createLeaves(){

  if(frameCount%80===0){

    leaf = createSprite(200,0);
    leaf.addImage(leafImage);
   leaf.scale= 0.05;
    leaf.x = random(40,360);
    leaf.velocityY=2;
   leaf.depth= rabbit.depth;
   rabbit.depth+=1;
   leaf.lifetime=200;
  }

 

 }




