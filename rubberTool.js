// object to represent the rubber tool
function rubberTool(){
    // set an icon and a name for the object
    this.icon = "assets/rubber.jpg";
    this.name = "rubber";

    // variables to store previous mouse positions
    var previousMouseX = -1;
    var previousMouseY = -1;

    // draw function to implement the rubber tool
    this.draw = function(){
        push(); // save the current drawing style

        // if the mouse is pressed
        if(mouseIsPressed){
            // check if the previousX and Y are -1
            if (previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            else{
                // sets stroke color to white
                stroke(255);
                // sets stroke weight to define thickness
                strokeWeight(5);
                // draws a line from previous mouse position to current mouse position
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                // updates previous mouse positions
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        // if the mouse is released, reset previousMouseX and previousMouseY to -1
        else{
            previousMouseX = -1;
            previousMouseY = -1;
        }

        pop(); // restore the previous drawing style
    };
}
