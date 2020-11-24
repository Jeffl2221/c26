const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   var ground_options ={
        isStatic: true,
       //Json 
    }

    ground = Bodies.rectangle(200,390,200,50,ground_options);
    World.add(world,ground);

//creating a second object to be added into the world
var ball_options ={
    restitution: 0.8
   //Json 
}
ball= Bodies.circle(200,200,50,ball_options);
World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
   //tuning the physics engine
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
   ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50,50);
    
}