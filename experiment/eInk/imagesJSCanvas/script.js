var c = document.getElementById("canvas");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;
var ctx = c.getContext("2d");
var img = document.getElementById("imageTrump");
//setInterval("draw()",1000);
setInterval("draw(c,ctx,img)",500);

function draw(_canvas,_context,_image) {
  var mult = (Math.random()*2)+0.3
  var posX = Math.random()*_canvas.width;
  var posY = Math.random()*_canvas.height;
  console.log("coucou");
  _context.drawImage(_image , posX-_image.width/2 , posY-_image.height/2, _image.width*mult, _image.height*mult);
}
