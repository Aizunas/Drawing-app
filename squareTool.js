function squareTool () {
  this.name = "square" ; 
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
			// Otherwise, erase the line between the previous and current mouse positions
            else {
                stroke(255); // Set stroke color to white (erase color)
                strokeWeight(10); // Set stroke weight to a larger value for erasing
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
	    

}else{
	previousMouseX = -1;
	previousMouseY = -1;
        } 

	loadPixels();
  };
	// Reset the tool state when it's deselected
    this.unselectTool = function() {
        // Reset previous mouse coordinates
        previousMouseX = -1;
        previousMouseY = -1;
    };
	 this.populateOptions = function() {
        select(".options").html("");
	 };
    }

  
