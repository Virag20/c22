const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var ground,ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
  world=engine.world
  
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,200,200,20,ground_options)
  World.add(world,ground)

  var ball_options={
    restitution:1.0
  }

  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)

  console.log(ground)
  console.log(ground.type)
  console.log(ground.position.x)
  console.log(ground.position.y)

  }

function draw() {
  background(0,0,0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,50,50)
  rectMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipseMode(RADIUS)
  drawSprites();
}