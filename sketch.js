var bodySprite1, bodySprite2, bodySprite3;
var ball;
var groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball=createSprite(150,657,25,25);
	ball.velocityX=2;
	

	bodySprite1=createSprite(613,657,150,20);
	bodySprite2=createSprite(696,617,20,100);
	bodySprite3=createSprite(545,617,20,100);

	groundSprite=createSprite(350,680,895,20)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
  if(Keycode===32){
	Body.setStatic(ball,false);

  }
}



