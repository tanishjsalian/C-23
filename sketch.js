const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myworld,myengine,ground,ball;
var box1,box2;


function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world; 

 box1=new Box(50,100,50,50)
box2=new Box(80,10,50,80)
ground=new Ground(400,380,800,20)

}

function draw() {
  background(0);
  Engine.update(myengine)
  box1.display()
  box2.display()
  ground.display()

  
  
}