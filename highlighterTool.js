function highlighterTool(){
    this.icon = "assets/highlighter.jpg";
    this.name = "highlighter";

    var previousMouseX = -1;
    var previousMouseY = -1;

    this.draw = function() {
        push(); // Save the current drawing style

        // If the mouse is pressed
        if (mouseIsPressed) {
            // Check if the previousX and Y are -1. Set them to the current
            // mouse X and Y if they are.
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // If we already have values for previousX and Y, draw a line
            // between the previous and current mouse positions to mimic a highlighter effect
            else {
                // Sample color from canvas at current mouse position
                var currentColor = colourP.selectedColour;

                // Set stroke color to the sampled color with reduced transparency
                stroke(red(currentColor), green(currentColor), blue(currentColor), 100); // Setting transparency to 100

                strokeWeight(20); // Increase stroke weight for a thicker highlighter effect
                
                // Draw a line between previous and current mouse positions to create the highlighter effect
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                
                // Update previous mouse position
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        // If the user has released the mouse, reset the previousMouse values 
        // back to -1.
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }

        pop(); // Restore the previous drawing style
    };
}
