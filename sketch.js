const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground= new Base (windowWidth/2,windowHeight-30,windowWidth,20);
  wall1 = new Base (windowWidth/6+55,windowHeight-115,20,150);
  wall2 = new Base (windowWidth*2.4/3,windowHeight-115,20,150);
  bridge = new Bridge (15,{x:windowWidth/6,y:windowHeight-195});
  jointPoint = new Base (windowWidth*2.4/3,windowHeight-195,2,2);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link (bridge,jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  wall1.display(); 
  wall2.display();
  jointPoint.display();
  bridge.show();

 for (var stone of stones) {
  stone.display();
}
 
}