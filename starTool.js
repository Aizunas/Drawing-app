function starTool() {
    this.name = "star";
    this.icon = "assets/star.jpg";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    var noFillButton;
    var self = this;

    // adds option for no fill
    this.populateOptions = function() {
        if(self.name == "star"){
            //button for fill or no fill
            select(".options").html(
                "<button id = 'noFillButton'> No Fill </button>");

            select("#noFillButton").mouseClicked(function(){
                noFillButton = select("#" + this.elt.id);

                //starts with off with the button saying no fill, and draws a star with a fill colour.
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
        if (self.name === "star") {
            // clears options
            select(".options").html("");

            
            colourP.fillMode = false;
        }

       
        helpers.arrow();
    };

    // function to draw the star
    this.draw = function() {
        // changes cursor
        helpers.cross();

        //is mouse pressed?
        if (mouseIsPressed) {
            // starts drawing if not already
            if (startMouseX === -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); // save current canvas state
            } else {
                // updates screen
                updatePixels();

                // calculates distance between start and current mouse position
                var distance = dist(startMouseX, startMouseY, mouseX, mouseY);

                // draws the star
                drawStar(startMouseX, startMouseY, distance / 2, distance);
            }
        } else if (drawing) {
            // saves the current state and reset drawing parameters
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    // draws a star shape
    function drawStar(x, y, radius1, radius2) {
        var angle = TWO_PI / 5;
        var halfAngle = angle / 2.0;
        beginShape();
        for (var a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
            var sx = x + cos(a) * radius2;
            var sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}
