
const Engine =Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine;
var world;

var roofObject;

var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(500,500);

  engine=Engine.create();
  world=engine.world;

roofObject=new roof();

 bob1=new Pendulum(150,300,40);
 bob2=new Pendulum(190,300,40);
 bob3=new Pendulum(230,300,40);
 bob4=new Pendulum(270,300,40);
 bob5=new Pendulum(310,300,40);

rope1=new rope(bob1.body,roofObject.body,-40*2,0);
rope2=new rope(bob2.body,roofObject.body,-40*1,0);
rope3=new rope(bob3.body,roofObject.body,0,0);
rope4=new rope(bob4.body,roofObject.body,40,0);
rope5=new rope(bob5.body,roofObject.body,40*2,0);
}

function draw() {

  background("purple");  
Engine.update(engine);
textSize(35)
text("Newton's Cradle", 120,70);
textSize(20)
text("Move the pendulum1 with mouse", 100, 350)

roofObject.display();
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

}



function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}