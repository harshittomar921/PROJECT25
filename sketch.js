
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
var Paper;
var op;

function setup() {
	createCanvas(1600,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20,{
		isStatic:true
	});
	dustbinObj=new dustbin(1200,650);
  Paper = new paper(100,300,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  groundObject.display();
  dustbinObj.display();
  Paper.display();
}
function keyPressed(){
if(keyCode === RIGHT_ARROW)
  {
   Matter.Body.applyForce(Paper.body,Paper.body.position,{
   x:50,
   y:-70
   } )
  }
}