function setup(){
   createCanvas(windowWidth,windowHeight);
   frameRate(2);
   background(255);
   img = loadImage("trump-head.png");
}


function draw(){
  imageMode(CENTER);
  posX=random(0,width);
  posY=random(0,height);
  mult=random(0.3,2);
  image(img , posX , posY , img.width*mult , img.height*mult );
}
