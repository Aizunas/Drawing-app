function squareTool() {
    this.name = "square";
    this.icon = "assets/square.jpg";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    var noFillButton;
    var self = this;

    // function to add option for no fill
    this.populateOptions = function() {
        if(self.name == "square"){
            // button for a no fill option
            select(".options").html(
                "<button id = 'noFillButton'> No Fill </button>");

            select("#noFillButton").mouseClicked(function(){
                noFillButton = select("#" + this.elt.id);

                //starts with off with the button saying no fill, and draws a square with a fill colour.
                if(colourP.fillMode == true) {
                    fill(colourP.selectedColour)
                    colourP.fillMode = false;
                    noFillButton.html("No Fill");

                //no fill button is pressed, the button will change to "fill" instead 
                } else {
                    noFill();
                    colourP.fillMode = true;
                    noFillButton.html("Fill");
                }
            });
        }

	};
    

    // clears options and reset fill mode
    this.unselectTool = function() {
        if (self.name === "square") {
            // clears options
            select(".options").html("");

            // resets fill mode
            colourP.fillMode = false;
        }

        // resets cursor
        helpers.arrow();
    };

    //draws the square
    this.draw = function() {
        // changes cursor
        helpers.cross();

        // checks if mouse is pressed
        if (mouseIsPressed) {
            
            if (startMouseX === -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); 
            } else {
                // updates screen 
                updatePixels();

                // draws the square
                rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
            }
        } else if (drawing) {
            // saves current state 
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };
}
