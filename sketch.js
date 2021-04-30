const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(400, 680, 800, 20);

	paper = new Paper(100,200,40);

	side1 = new Side1(470,600,20,120)

	side2 = new Side2(700,600,20,120)     

	side3 = new Side3(585,660,250,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);

	paper.display();

	ground.display();

	side1.display();

	side2.display();

	side3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})  
	}
}



