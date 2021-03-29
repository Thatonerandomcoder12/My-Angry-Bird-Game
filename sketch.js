const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var box2;
var box3;
var ground1;
var log1
var bird
var slingshot
var dummylog
var slingImg
var skyImg
function preload() {
    slingImg = loadImage("download.png");

skyImg = loadImage("sky.png");}
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    
    world = engine.world;

    box1 = new Box(310+400,550,50,50);
    box2 = new Box(170+400,550,50,50);
    enemy1 = new Enemy(240+400,550,50,50);
    box4 = new Box(310+400,400,50,50);
    box5 = new Box(170+400,400,50,50);
    enemy2 = new Enemy(240+400,400,50,50);
    
    box7 = new Box(240+400,300,50,50);

    ground1 = new Ground(500,600,1000,50);

    log1 = new Log(650,450,210,30);
    log2 = new Log(650,350,210,30);
  bird = new BIRD(150,150,50,50);

    //x, y, width/breadth,height/length


    var options = {
        bodyA: bird.body,
        pointB: {x:100,y:350},
        stiffness: 0.04,
        length: 100

    }
    slingshot = Constraint.create(options);
    World.add(world,slingshot);

}

function draw(){
    background(skyImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    enemy1.display();
    box4.display();
    box5.display();
    enemy2.display();
    box7.display();
    ground1.display();
    log1.display();
    log2.display();
    bird.display();
    image(slingImg,100,350);
} 

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {
    slingshot.bodyA = null;
}