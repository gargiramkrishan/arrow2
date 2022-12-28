const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1,PlayerGround,arroe,arrow2;
var compu1l,CompGround,arroe2;
var angle;
var ball;
var angle2;

var backgroundImg;

function preload()
{
  backgroundImg = loadImage("assets/background.gif")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  

  angle = 457;
  angle2 = 900;
  player1 = new Player(160,250,200,400)
  PlayerGround = new PlayerBase(160,620,300,400)
  compu1l = new C0omputer(1750,250,200,400)
  CompGround = new C0omputer2(1750,620,300,400)
  arroe = new Archery(300,200,200,200,angle)
  arrow2 = new Aroooooooow(arroe.x,arroe.y)
  arroe2 = new Archery2(1650,200,200,200,angle2)
}

function draw() {
  background(180);
  image(backgroundImg,0,0,windowWidth*2,windowHeight*2)

  player1.display()
  PlayerGround.display()
  compu1l.display()
  CompGround.display()
  arroe.display()
  arrow2.display()
  arroe2.display()
  Engine.update(engine);
}
function keyReleased()
{
   if(keyCode == '32')
   {
      arrow2.shoot();
   }
}

