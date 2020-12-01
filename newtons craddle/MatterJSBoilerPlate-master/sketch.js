
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
  
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob1(300,300,200,200);
	bob2 = new bob2(300,300,200,200);
	bob3 = new bob3(300,300,200,200);
	bob4 = new bob4(300,300,200,200);
  bob5 = new bob5(300,300,200,200);
  
  rope1 = new rope1(200,300,400,200);
	rope2 = new rope2(350,300,500,200);
	rope3 = new rope3(100,300,300,200);
	rope4 = new rope4(300,300,200,200);
	rope5 = new rope5(300,300,100,200);

  roof1 = new roof1(200,300,200,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



