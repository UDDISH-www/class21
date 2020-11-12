var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 2;
  fixedRect.velocityY = -2;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 3;
  movingRect.velocityX = -3;
}

function draw() 
{
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if(newfunc(movingRect, fixedRect))
   {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";   
   }
   else
   {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
   }

if(bounc(movingRect,fixedRect))
{
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}else{
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}

  drawSprites();
}

