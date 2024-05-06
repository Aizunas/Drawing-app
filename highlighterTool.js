// function to draw with the highlighter
function highlighterTool() {
    // icon for the tool
    this.icon = "assets/highlighter.jpg";
    // name of the tool
    this.name = "highlighter";

    // variables to store previous mouse positions
    var previousMouseX = -1;
    var previousMouseY = -1;

    // draw function to implement the highlighting effect
    this.draw = function() {
        // save the current drawing style
        push();

        // if the mouse is pressed
        if (mouseIsPressed) {
            // if previous mouse positions are not set, sets them to current mouse positions
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // if we have previous positions, draws a line between previous and current positions
            else {
                // gets the color at the current mouse position
                var currentColor = colourP.selectedColour;

                // sets stroke color to sampled color with reduced transparency
                stroke(red(currentColor), green(currentColor), blue(currentColor), 100);

                // increases thickness for a highlighter effect
                strokeWeight(20);

                // draws a line between previous and current mouse positions to simulate highlighting
                line(previousMouseX, previousMouseY, mouseX, mouseY);

                // updates previous mouse position
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        // if the user has released the mouse, resets previousMouse values to -1
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }

        // restores previous drawing style
        pop();
    };
}
