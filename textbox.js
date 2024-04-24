function textbox() {
    this.name = "textbox";
    this.icon = "assets/textbox.jpg";

    var startX = -1;
    var startY = -1;
    var width = 0;
    var height = 0;
    var textValue = "";

    this.draw = function() {
        if (mouseIsPressed) {
            if (startX === -1 && startY === -1) {
                startX = mouseX;
                startY = mouseY;
            } else {
                width = mouseX - startX;
                height = mouseY - startY;

                noFill();
                stroke(0);
                rect(startX, startY, width, height);

                fill(0);
                noStroke();
                textSize(16);
                text(textValue, startX + 5, startY + 20, width - 10, height - 10);
            }
        } else {
            startX = -1;
            startY = -1;
        }
    };

    this.handleMousePressed = function() {
        if (startX !== -1 && startY !== -1 && mouseX >= startX && mouseX <= startX + width && mouseY >= startY && mouseY <= startY + height) {
            textValue = "";
        }
    };

    this.handleTextInput = function(key) {
        textValue += key;
    };
}
