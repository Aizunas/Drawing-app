function squareTool () {
  this.name = "Square" ; 
  this.icon = "assets/square.jpg";

  var previousMouseX = -1;
	var previousMouseY = -1;

  this.draw = function(){
    updatePixels();

    // Draw the square when mouse is pressed 

    if(mouseIsPressed){
    //check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}

      else{
			previousMouseX = -1;
			previousMouseY = -1;
		} 
    }

  
