function spiraTool() {
    this.name = "spiragraph";
    this.icon = "assets/sTool.jpg";

    this.symmetry = 8; 
    this.angle = 360 / this.symmetry;
    
    this.draw = function() {
        angleMode(DEGREES);
        strokeCap(ROUND);
        translate(width / 2, height / 2);
        
        if (isWithinCanvasBounds()) {
            let mouseOffset = createVector(mouseX - width / 2, mouseY - height / 2);
            let pmouseOffset = createVector(pmouseX - width / 2, pmouseY - height / 2);
            
            if (mouseIsPressed) {
                for (let i = 0; i < this.symmetry; i++) {
                    rotate(this.angle);
                    drawLine(mouseOffset, pmouseOffset);
                    drawMirroredLine(mouseOffset, pmouseOffset);
                }
            }
        }
    }

    // checks if the mouse is within the canvas bounds
    function isWithinCanvasBounds() {
        return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
    }

    // draws a line from current mouse position to previous mouse position
    function drawLine(mouseOffset, pmouseOffset) {
        line(mouseOffset.x, mouseOffset.y, pmouseOffset.x, pmouseOffset.y);
    }

    // draws a mirrored line
    function drawMirroredLine(mouseOffset, pmouseOffset) {
        push();
        scale(1, -1);
        drawLine(mouseOffset, pmouseOffset);
        pop();
    }
}
