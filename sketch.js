const Engine = Matter.Engine;
 const World= Matter.World;
  const Bodies = Matter.Bodies;
var engine, world, box1,box2, ground
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,height,400,20)
  box1=new Box(200,300,50,50)
  box2=new Box(240,100,50,100)
 
 
  // console.log(ball)
  // console.log(ball.position.x)
 //  console.log(ball.position.y)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display()
  box1.display()
  box2.display()
  //rectMode(CENTER)
  //rect(400, 200, 100, 100);
  
}