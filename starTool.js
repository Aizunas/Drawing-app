function starTool() {
    this.name = "star";
    this.icon = "assets/star.jpg";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    var noFillButton;
    var self = this;

    // Function to add option for no fill
    this.populateOptions = function() {
        if (self.name == "star") {
            // Create a button for no fill option
            select(".options").html(
                "<button id='noFillButton'> No Fill </button>"
            );

            // Handle button click
            select("#noFillButton").mouseClicked(function() {
                noFillButton = select("#" + this.elt.id);

                // Toggle fill mode and update button text
                if (colourP.fillMode == true) {
                    fill(colourP.selectedColour);
                    colourP.fillMode = false;
                    noFillButton.html("No Fill");
                } else {
                    noFill();
                    colourP.fillMode = true;
                    noFillButton.html("Fill");
                }
            });
        }
    };

    // Function to clear options and reset fill mode
    this.unselectTool = function() {
        if (self.name == "star") {
            // Clear options
            select(".options").html("");

            // Reset fill mode
            colourP.fillMode = false;
        }

        // Reset cursor
        helpers.arrow();
    };

    // Function to draw the star
    this.draw = function() {
        // Change cursor
        helpers.cross();

        // Check if mouse is pressed
        if (mouseIsPressed) {
            // Start drawing if not already drawing
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); // Save current state
            } else {
                // Update screen with saved state
                updatePixels();

                // Calculate distance between start and current mouse position
                var distance = dist(startMouseX, startMouseY, mouseX, mouseY);

                // Draw the star
                drawStar(startMouseX, startMouseY, distance / 2, distance);
            }
        } else if (drawing) {
            // Save current state and reset drawing parameters
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    // Function to draw a star shape
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
