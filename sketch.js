const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block8;
var ground1;
var constraint1;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  

    

        

  createSprite(400, 200, 50, 50);
  // the second level
  block1=new BLock(330,235,30,40);
  block2=new BLock(360,235,30,40);
  block3=new BLock(390,235,30,40);
  block4=new BLock(420,235,30,40);
  block5=new BLock(450,235,30,40);

  // the third level
  block6=new BLock(360,195,30,40);
  block7=new BLock(390,195,30,40);
  block8=new BLock(420,195,30,40);

  // last level
  block9=new BLock(390,155,30,40);

  // ground
  ground1=new Ground(310,200,100,20);

  //constraint
  constraint1= new Chain(this.polygon,{x:100,y:200})

}

function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  ground1.display();
  constraint1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.nothing();
}