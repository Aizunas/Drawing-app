function rubberTool() {
    this.name = "rubber";
    this.icon = "assets/rubber.jpg";

    // Mouse coordinates for the previous draw
    var previousMouseX = -1;
    var previousMouseY = -1;
// variable for ruber slider 
    let rubberSize = 10

    this.draw = function() {
        // Display the last saved state of pixels
        updatePixels();

        // Erase the drawing if the mouse is pressed
        if (mouseIsPressed) {
            // If the previous values are -1, set them to the current mouse location
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // Otherwise, erase the line between the previous and current mouse positions
            else {
                stroke(255); // Set stroke color to white (erase color)
                strokeWeight(rubberSize); // Set stroke weight to a larger value for erasing
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        } else {
            // Reset previous mouse coordinates
            previousMouseX = -1;
            previousMouseY = -1;
        }

        // After the drawing is done, save the pixel state
        loadPixels();
    };

    // Reset the tool state when it's deselected
    this.unselectTool = function() {
        // Reset previous mouse coordinates
        previousMouseX = -1;
        previousMouseY = -1;
    };

    // No options for rubber tool
    this.populateOptions = function() {
        // select(".options").html("");
        // Create a slider element for changing rubber size
        var slider = createSlider(1, 50, rubberSize); // Minimum size 1, maximum size 50, default size rubberSize
        slider.parent(".options");
        // Event handler for slider change
        slider.input(function() {
            rubberSize = slider.value(); // Update rubber size
    };
}
