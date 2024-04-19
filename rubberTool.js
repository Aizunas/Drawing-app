function rubberTool() {
    this.name = "rubber";
    this.icon = "assets/rubber.jpg";

    // Mouse coordinates for the previous draw
    var previousMouseX = -1;
    var previousMouseY = -1;
    var slider; 


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
                strokeWeight(10); // Set stroke weight to a larger value for erasing
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
        select(".options").html("");
    var slider = createSlider(1, 30, 1, 0.5); // Minimum size 1, maximum size 30, default size 1, step size 0.5
    slider.position(10, 10);
    slider.size(100, 10); // Set the size of the slider
    slider.parent(".options");
    
    // Event handler for slider change
    slider.input(function() {
        // Update rubber size or perform any other action as needed
        console.log("Slider value changed:", slider.value());
};
}
