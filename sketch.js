var groundImg,ground;
var wallGroup,wall1,wall2;



function preload(){
  groundImg = loadImage("ground.png")  
  wall1 = loadImage("wall1.png")
  wall2 = loadImage("wall2.png")





}

function setup() {
  createCanvas(400,400)  

  ground = createSprite(200,200)
  ground.addImage("ground",groundImg)
  ground.velocityX = -3
  ground.x = width/2
 
}

function draw() {
   background(0) 

   if(ground.x < 0){
      ground.x = ground.width/2
   }



   wallGroup = createGroup();

   drawSprites(); 
 
}

function spwanWall(){
if(FrameCount % 60 === 0){
  var wall = createSprite(80,100,20,5)
  wall.velocityX = 4

  var rand = Math.round(random(1,2));
  switch(rand){

    case 1: wall.addImage(wall1)
       break;
     case 2: wall.addImage(wall2)
        break;  
      default: break;  
  }
  
  wall.scale = 0.4;
  wall.lifetime = 200;

  wallGroup.add(wall)

}
 
}