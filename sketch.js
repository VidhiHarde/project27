
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
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
	roof=new Roof(370,200,400,30);
	bob1=new Bob(250,590,60,60);
	bob2=new Bob(311,590,60,60);
	bob3=new Bob(372,590,60,60);
	bob4=new Bob(433,590,60,60);
	bob5=new Bob(494,590,60,60);

	//Engine.run(engine);
	rope1=new Rope(bob1.body,roof.body,-120,3);
	rope2=new Rope(bob2.body,roof.body,-60,3);
	rope3=new Rope(bob3.body,roof.body,-1,3);
	rope4=new Rope(bob4.body,roof.body,60,3);
	rope5=new Rope(bob5.body,roof.body,120,3);
}


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}



