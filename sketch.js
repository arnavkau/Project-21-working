
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var floor;
var binLeft;
var binRight;
var rightEdge;
var leftEdge;
var top;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    floor = new Shapes(400, 650, 800, 10)
	World.add(world, floor)

	binRight = new Shapes(700, 550, 10, 300)
	World.add(world, binRight)

	binLeft = new Shapes(600, 600, 10, 100)
	World.add(world, binLeft)

	rightEdge = new Shapes(790, 450, 10, 700)
	World.add(world, rightEdge)

	leftEdge = new Shapes(10, 450, 10, 700)
	World.add(world, leftEdge)

  

    var ball_options = 
{
  isStatic: false,
  restitution: 0.95,
  friction:0,
  density:1.2
}





  ball = Matter.Bodies.circle(200, 150, 10, ball_options)
  World.add(world, ball)



	
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);
  floor.display()

  binRight.display()
  binLeft.display()

  rightEdge.display()
  leftEdge.display()

  
  
  ellipse(ball.position.x, ball.position.y, 10,)


 /* if(keyIsDown(LEFT_ARROW))
  {
	  ulForce()
  }

  if(keyIsDown(RIGHT_ARROW))
  {
	  urForce()
  }*/
 
}

/*function ulForce()
{
	Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:-2, y:-2})
}

function urForce()
{
	Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:2, y:-2})
}*/

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:5, y:-10})
  }

  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(ball, {x:ball.position.x, y:ball.position.y}, {x:-5, y:-10})
  }

}