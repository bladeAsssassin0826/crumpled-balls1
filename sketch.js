
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var rectagleBody
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(5,800,1600,250);

	rectangleSprite1=createSprite(500,800,210,300);
	rectangleSprite2=createSprite(600,780,30,500);
	rectangleSprite3=createSprite(400,820,30,580);

	



   
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper=Bodies.circle(10,720,20,30,{ 'isStatiic':false,'restitution':0.3, 'isStatiic':false,'friction':0.5,'density':1.2})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 


  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



