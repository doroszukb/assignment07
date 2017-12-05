var capture;
var mic;

function setup() {
  colorMode(HSB, 255);
  createCanvas(windowWidth,windowHeight)

  capture = createCapture(VIDEO);
	capture.size(640, 480);
	capture.hide();
	
	mic = new p5.AudioIn();
  mic.start();

}

function draw() {
  
 translate(7,7)
   background(30)
var myImage = capture.loadPixels();

//rect(0,0,40,40)
//rect(40,0,40,40)
noFill()
   var vol = mic.getLevel();

  for(var x=-1; x<windowWidth; x+=windowWidth/12){
   for(var y = 2; y< windowHeight; y+=windowHeight/12){
      
 noStroke()
   var c = myImage.get(x+windowWidth/24, y+windowHeight/24);
   
  var value = brightness(c)
  
    fill(220)
      rect(x,y,windowWidth/22+value/28,windowWidth/22+value/28)
      
   

fill(value,200)
     rect(x+5,y+5,vol*58,vol*58)
    
    }
 }
   
 
  



  
}


function windowResized(){

resizeCanvas(windowWidth,windowHeight)
}
