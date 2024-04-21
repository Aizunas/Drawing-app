function squareTool() {
    this.name = "square";
    this.icon = "assets/square.jpg";

    // Array to store the squares
    var squares = [];

    // Mouse coordinates for the square being drawn
    var startX = -1;
    var startY = -1;

    this.draw = function() {
        // Draw all the previously drawn squares
        for (var i = 0; i < squares.length; i++) {
            var square = squares[i];
            noFill();
            rect(square.startX, square.startY, square.width, square.height);
        }

        // If the mouse is pressed, record the starting position of the new square
        if (mouseIsPressed) {
            if (startX == -1 && startY == -1) {
                startX = mouseX;
                startY = mouseY;
            } else {
                // Clear the canvas
                clear();
                
                // Draw the square outline as the mouse moves
                noFill(); // Draw only the outline
                rect(startX, startY, mouseX - startX, mouseY - startY);
                
            }
        } else {
            // If the mouse is released, calculate the dimensions of the new square
            if (startX != -1 && startY != -1) {
                var width = mouseX - startX;
                var height = mouseY - startY;
                squares.push({ startX: startX, startY: startY, width: width, height: height });
                startX = -1;
                startY = -1;
            }
        }
    };
}
