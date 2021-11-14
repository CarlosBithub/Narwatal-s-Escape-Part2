
var gameState="tutorial"

var tutorialwallimage,tutorialwallimage2,charimage,exitimage



var character,wall,wall2,prisonbackground,edges,laser1,laser2,end,guard1,pressureplate,door,wall3

function preload(){
 prisonbackground=loadImage("Stonewall.jpg")
  
 tutorialwallimage=loadImage("brick2.png")

tutorialwallimage2=loadImage("brick3.png")
  
  charimage=loadImage("thief.jpg");
  
  exitimage=loadImage("exitimage.jpg")
  
  
}

function setup() {
  createCanvas(700, 700);
  
  
  
  pressureplate=createSprite(496,518,50,50)
  pressureplate.shapeColor="yellow"
  
  character=createSprite(68,314,30,30)
  character.addImage(charimage)
  character.scale=0.1
  
  
  
  
  door=createSprite(571,363,290,50)
  
  door.shapeColor="purple"
  
  laser1=createSprite(292,463,30,300)
  laser1.shapeColor="red"
  
  laser2=createSprite(440,316,30,300)
  laser2.shapeColor="red"
  
  wall3=createSprite(150,358,50,310);
  wall3.addImage(tutorialwallimage2)
  
  wall=createSprite(347,211,800,90)
  wall.addImage(tutorialwallimage)
  
  
  
  //wall.shapeColor=rgb(6,9,9)
  
  wall2=createSprite(347,611,800,90);
  wall2.addImage(tutorialwallimage)
  
  
  guard1=createSprite(365,350,30,30)
  guard1.shapeColor="blue"
  guard1.velocityX=2
  
  
  end=createSprite(650,300,50,50)
  end.shapeColor="green"
  end.addImage(exitimage)
  end.scale=0.07
  
  
  
  
  
  
  edges=createEdgeSprites()
  
  
  
  fill("red")
  text("Looks like Narwatal is in jail again and its your job to save him!", 106,81)
  
}



function draw() {
  background(prisonbackground);
  console.log(mouseX,mouseY)
  
  if(keyDown("left")){
    character.x=character.x-6
  }
  
  if(keyDown("right")){
    character.x=character.x+6
  }
  
  if(keyDown("down")){
    character.y=character.y+6
  }
  
  if(keyDown("up")){
    character.y=character.y-6
  }
  
  character.collide(wall);
  character.collide(wall2);
  character.collide(edges);
  character.collide(wall3);
  character.collide(door)
  
  //gamestates
  if(gameState==="tutorial"){
  textSize(25)
  fill("red")
  text("Looks like Narwatal is in jail again and its your job to help him!", 10,81)
    
  textSize(25)
  fill("red")
  text("Use your arrow keys to move Narwatal",10,121)
   
  textSize(25)
  fill("red") 
  text("Avoid Guards, Lasers and step on pressure plates.",10,151)
   
  guard1.bounceOff(laser2);
  guard1.bounceOff(laser1);
    
  if(character.isTouching(pressureplate)){
    door.destroy()
    
    pressureplate.destroy();
    
  }
    
    
    if(character.isTouching(end)){
      gameState="level1"
      wall.destroy();
      wall2.destroy();
      laser1.destroy();
      laser2.destroy();
      wall3.destroy();
      guard1.destroy();
      end.destroy()
      pressureplate.destroy();
      door.destroy()
      
    character.x=350
    character.y=573
    }
    
    //quick cut do not press.
    if(keyDown("t")){
      gameState="level1"
      
    character.x=350
    character.y=573
    }
  
    
    if(character.isTouching(guard1)||character.isTouching(laser1)||character.isTouching(laser2)){
      character.x=66
      character.y=316
    }
    
    
        
    
  }else if(gameState==="level1"){
    
      
      wall.destroy();
      wall2.destroy();
      laser1.destroy();
      laser2.destroy();
      wall3.destroy();
      guard1.destroy();
      end.destroy()
      pressureplate.destroy();
      door.destroy()
    
    
    
      var wall4=createSprite(250,500,30,400);
     
    character.collide(wall4);
    
      var door2=createSprite(415,160,30,350)
      door2.shapeColor="purple"
    
      var wall5=createSprite(415,500,30,800)
      character.collide(wall5)
    
    var wall6=createSprite(190,315,100,30)
    character.collide(wall6);
    
    var wall7=createSprite(150,210,30,250)
    character.collide(wall7)
    
    character.collide(door2)
    
    var wall8=createSprite(700,1,220,2000)
    
    var end2=createSprite(507,605)
    end2.addImage(exitimage)
    end2.scale=0.1
    
    
    
  }
  
  drawSprites()
}

