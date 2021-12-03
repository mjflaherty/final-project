var currentScene = 1;



//paste christmas tree code in here once completed with 1 task

background(209, 209, 209);

//function to draw christmas tree (no need for parameters yet bc tree doesn't need to ever be moved)
var christmasTree = function(){
noStroke();
fill(77, 73, 66);
rect(170, 264, 64, 100);
fill(37, 82, 0);
triangle(90, 160, 310, 160, 200, 45);
triangle(50, 240, 350, 240, 200, 75);
triangle(25, 320, 375, 320, 200, 130);
image(getImage("space/star"), 153, -17);
};

//call the function to make it draw
christmasTree();

//array of ornaments
var ornaments = [
    getImage("avatars/spunky-sam"),
    getImage("avatars/spunky-sam-green"),
    getImage("avatars/spunky-sam-orange"),
    getImage("avatars/spunky-sam-red"),
    getImage("cute/GemBlue"),
    getImage("cute/GemGreen"),
    getImage("cute/GemOrange"), 
    getImage("avatars/purple-pi"), 
    getImage("avatars/purple-pi-pink"), 
    getImage("avatars/purple-pi-teal")
    ];

mouseClicked = function (){
    //every time mouse is clicked, random image from ornaments array is put on the screen
    image(ornaments[round(random(0,ornaments.length))],mouseX - 10, mouseY - 10, 30, 30);
};
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 75;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(90, 227, 245);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};
var redButton = new Button({
    x: 120,
    y: 100,
    label: "Red",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});

var orangeButton = new Button({
    x: 120,
    y: 100,
    label: "Orange",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});

var yellowButton = new Button({
    x: 120,
    y: 100,
    label: "Yellow",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});

var greenButton = new Button({
    x: 120,
    y: 100,
    label: "Green",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});

var blueButton = new Button({
    x: 120,
    y: 100,
    label: "Blue",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});

var purpleButton = new Button({
    x: 120,
    y: 100,
    label: "Purple",
    onClick: function() {
        text("You made the right choice!", this.x, this.y+this.height);
    
    }
});




mouseClicked = function() {
    redButton.handleMouseClick();
   
};

var splashScreen = function () 
{
    background(255, 255, 255);
    redButton.draw();
    orangeButton.draw();
    yellowButton.draw();
    greenButton.draw();
    blueButton.draw();
    purpleButton.draw();
    
    
};

splashScreen();
