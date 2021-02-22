
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var binbottom,binside1,binside2;
var paper;
var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 ground=new Ground(800,10)

	 binbottom= new Bin(650,440,100,20)
	 binside1=new Bin(700,400,20,100)
	 binside2=new Bin(600,400,20,100)

	 paper=new Paper(100,100,30,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  binbottom.display()
  binside1.display()
  binside2.display()

  paper.display()

  ground.display()
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-110})
	 }
   }

