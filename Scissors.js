// object to represent the scissors tool
function Scissors() {
    // sets name and icon for the scissors tool
    this.name = "scissors";
    this.icon = "assets/scissors.jpg";

    // variables to store starting mouse coordinates and cutting status
    var startX = -1;
    var startY = -1;
    var cutting = false;

    // draws function to implement the scissors tool
    this.draw = function() {
        if (mouseIsPressed) {
            // if mouse is pressed and not currently cutting
            if (!cutting) {
                startX = mouseX;
                startY = mouseY;
                cutting = true;
                loadPixels(); // saves current canvas state
            } else {
                updatePixels(); // restores previous canvas state
                strokeWeight(4);
                stroke(255); // color to hide the drawn line
                line(startX, startY, mouseX, mouseY); // draws the cutting line
            }
        } else if (cutting) {
            cutting = false;
            // rectangle to erase
            var x = min(startX, mouseX);
            var y = min(startY, mouseY);
            var w = abs(startX - mouseX);
            var h = abs(startY - mouseY);

            fill(255);
            rect(x, y, w, h); // erases the rectangle and cuts line
        }
    };
}
