
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Block1 = Matter.Block1;
const Block2 = Matter.Block2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	block1 = Block1.create();
	world = block1.world; 

	block2 = Block2.create();
	world = block2.world;
	
	plane = Plane.create();
	world = plane.world; 
	var plane_options={
		isStatic: true
	}

	var particle_options = {
		restitution:0.4,
		friction:0.02
	}

	particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	
	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);
	
	particle3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	particle4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	particle5 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	Engine.run(engine);

	var particle_options = {
		restitution:0.4,
		friction:0.02
	}
	
	rotator1 = Bodies.rectangle(250,150,20,rotator_options);
	World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,150,20,rotator_options);
	World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250,150,20,rotator_options);
	World.add(world,rotator3);

	Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2; 

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle2 +=0.3;

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.4;

	rectMode(CENTER);
	ellipseMode(RADIUS);


  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
  Engine.update(engine); 
 
}



