var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg', function(Img)  {
block_image_obiect = Img;
block_image_obiect.scaleToWidth(700);
block_image_obiect.scaleToHeight(510);
block_image_obiect.set({
top:0,
left:0
}); 
canvas.add(block_image_obiect);
}); 

}
	




function playSound(){
 x.play();
}
