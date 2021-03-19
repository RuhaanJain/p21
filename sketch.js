var box2,box3,box1;
var edges;

function setup() {
  createCanvas(800,400);
 box3 =createSprite(500, 390, 200, 10);
 box2 =createSprite(300,390,200,10);
  box1=createSprite(100,390,200,10);
  box4=createSprite(700,390,200,10);
  ball=createSprite(random(20,750),350,50,50);
  box1.shapeColor="blue";
  box2.shapeColor="green";
  box3.shapeColor="yellow";
  box4.shapeColor="red";
  ball.shapeColor="white";
  ball.velocityX=6;
  ball.velocityY=3;
  edges=createEdgeSprites();
}

function draw() {
  background(0); 
  
  
 
 if( isTouching(ball,box1) ){
   ball.shapeColor="blue";
  
 }
 if (isTouching(ball,box2)){
ball.shapeColor="green";

 }

 if(isTouching(ball,box3)){

  ball.shapeColor="yellow";
 }

 if(isTouching(ball,box4)){
   ball.shapeColor="red";
 }
 ball.bounceOff(edges);

  drawSprites();
}

