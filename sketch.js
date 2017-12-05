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
  
 translate(10,10)
   background(30)
var myImage = capture.loadPixels();

//rect(0,0,40,40)
//rect(40,0,40,40)
noFill()
   var vol = mic.getLevel();

  for(var x=0; x<680; x+=40){
   for(var y = 0; y< 520; y+=40){
      
 noStroke()
   var c = myImage.get(x+20, y+20);
   
  var value = brightness(c)
  
    fill(220)
      rect(x,y,23+value/28,23+value/28)
      
   

fill(value,200)
     rect(x+5,y+5,vol*58,vol*58)
    
    }
 }
   
 
  



  
}


function windowResized(){

resizeCanvas(windowWidth,windowHeight)
}
