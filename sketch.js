var eggImg1, eggImg2, eggImg3, eggImg4;
var egg1, egg2, egg3, egg4;
var boxObj, boxImg;
var plane; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	eggImg1 = loadImage("images/egg.png");
	eggImg2 = loadImage("images/egg.png");
	eggImg3 = loadImage("images/egg.png");
	eggImg4 = loadImage("images/egg.png");
	boxImg   = loadImage("images/basket.png")
}

function setup() {
	createCanvas(800, 700);

	edges = createEdgeSprites();

	boxObj= createSprite(100,590);
	boxObj.addImage(boxImg);
	boxObj.scale = 1; 
	boxObj.velocityX = 8;

	plane = createSprite(0,680,1600,60);
	plane.shapeColor = rgb(153,0,0);

	engine = Engine.create();
	world = engine.world;

	egg1 = createSprite(120, 80);
	egg1.addImage(eggImg1);
	egg1.scale=1;


	egg1Body = Bodies.circle(120 , 80 ,5, {restitution:0.4, isStatic:true});
	World.add(world, egg1Body);

	egg2 = createSprite(300, 50);
	egg2.addImage(eggImg2);
	egg2.scale=1;

	egg2Body = Bodies.circle(300, 80 ,5, {restitution:0.4, isStatic:true});
	World.add(world, egg2Body);

    egg3 = createSprite(500, 50);
	egg3.addImage(eggImg3);
	egg3.scale=1;

	egg3Body = Bodies.circle(500, 80 ,5, {restitution:0.4, isStatic:true});
	World.add(world, egg3Body);

	egg4 = createSprite(660, 50);
	egg4.addImage(eggImg4);
	egg4.scale=1;

	egg4Body = Bodies.circle(660, 80 ,5, {restitution:0.4, isStatic:true});
	World.add(world, egg4Body);

	Engine.run(engine);
}


function draw() {
  background(0);
  boxObj.bounceOff(edges);
  // boxBase.bounceOff(edges);
  // boxrightSprite.bounceOff(edges);

  egg1.x= egg1Body.position.x;
  egg1.y= egg1Body.position.y;

  egg2.x= egg2Body.position.x;
  egg2.y= egg2Body.position.y;

  egg3.x= egg3Body.position.x;
  egg3.y= egg3Body.position.y;

  egg4.x= egg4Body.position.x 
  egg4.y= egg4Body.position.y

 /* if(egg1.isTouching(boxObj)){
	World.remove(world, egg1Body);
	push();
	egg1.visibility = egg1.visibility - 5;
	tint(255, egg1.visibility);
	pop();
  }*/

  drawSprites();
}

function keyPressed(){
	if (keyCode === LEFT_ARROW) {
		Matter.Body.setStatic(egg1Body,false);
	}else if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(egg2Body,false);		
	}else if(keyCode === UP_ARROW){
		Matter.Body.setStatic(egg3Body,false);			
	}else if(keyCode === RIGHT_ARROW){
		Matter.Body.setStatic(egg4Body,false);	
	}
}
