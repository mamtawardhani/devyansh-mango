
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	tre=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
 buno= new boy(200,650,150,150)
 stun= new stone(700,100,30,30,)
 cheeni= new chain(stun.body,{x:200,y:650})
 ground = new Ground(600,height,1200,20);
 mugo1=new mango(500,400,20,40)
 mugo2=new mango(600,400,20,40)
 mugo3=new mango(700,400,20,40)
 mugo4=new mango(550,350,20,40)
 mugo5=new mango(650,350,20,40)

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(tre,400,300,400,400)
  drawSprites();
 buno.display()
 stun.display()
 cheeni.display()
 ground.display()
 mugo1.display()
 mugo2.display()
 mugo3.display()
 mugo4.display()
 mugo5.display()
	detectcollision(stun,mugo1)
	detectcollision(stun,mugo2)
	detectcollision(stun,mugo3)
	detectcollision(stun,mugo4)
	detectcollision(stun,mugo5)
	}
	function mouseDragged(){Matter.Body.setPosition(stun.body,{x:mouseX,y:mouseY})}
	function mouseReleased(){cheeni.yeet()} 

	function detectcollision(lstun,lmugo){
		mugoBodyPosition=lmugo.body.position
		stoneBodyPosition=lstun.body.position
		var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mugoBodyPosition.x,mugoBodyPosition.y)
		if(distance<=lmugo.r+lstun.r)
		{Matter.Body.setStatic(lmugo.body,false)
			console.log("hi")
		}
	}
