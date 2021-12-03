//paste christmas tree code in here once completed with 1 task

//claudia's bitmoji code
var drawFace = function(bitmojiX, bitmojiY, h){
    noStroke();
    // background(255, 255, 255);
    fill(255,219,172);//face color
    ellipse(bitmojiX+(h/50*75), bitmojiY+(h/50*64), h/50*55,h/50*59);//face
};

var drawClothes = function(bitmojiX, bitmojiY, h){
    fill(219, 171, 198);//pink clothing
    quad(bitmojiX+(h/50*53),bitmojiY+(h/50*92),bitmojiX+(h/50*96),bitmojiY+(h/50*92),bitmojiX+(h/50*120),bitmojiY+(h/50*132),bitmojiX+(h/50*27),bitmojiY+(h/50*132));//clothes
    fill(48, 48, 48);//collar color
    triangle(bitmojiX+(h/50*84),bitmojiY+(h/50*92),bitmojiX+(h/50*75),bitmojiY+(h/50*115),bitmojiX+(h/50*65),bitmojiY+(h/50*92));
    fill(55, 18, 97);//purple clothing
    quad(bitmojiX+(h/50*40),bitmojiY+(h/50*113),bitmojiX+(h/50*108),bitmojiY+(h/50*113),bitmojiX+(h/50*120),bitmojiY+(h/50*132),bitmojiX+(h/50*27),bitmojiY+(h/50*132));//clothes bottom color
    textSize((h/50*15));
    fill(235, 232, 232);
    text("CD",bitmojiX+(h/44*65),bitmojiY+(h/52*128));//initials
};

var drawHairHat = function(bitmojiX, bitmojiY, h){
    fill(66, 46, 11);//hair color
    arc(bitmojiX+(h/50*74),bitmojiY+(h/50*48),(h/50*59),(h/50*39),-198,18);//hair
    triangle(bitmojiX+(h/50*103),bitmojiY+(h/50*47),bitmojiX+(h/50*105),bitmojiY+(h/50*97),bitmojiX+(h/50*83),bitmojiY+(h/50*92));//right hair
    triangle(bitmojiX+(h/50*45),bitmojiY+(h/50*47),bitmojiX+(h/50*45),bitmojiY+(h/50*97),bitmojiX+(h/50*65),bitmojiY+(h/50*92));//left hair
    fill(242, 215, 215);//pompom color
    ellipse(bitmojiX+(h/50*75), bitmojiY+(h/50*18), (h/50*30), (h/50*30));//pompom
    fill(219, 171, 198);//hat color
    arc(bitmojiX+(h/50*74),bitmojiY+(h/50*51),(h/50*66),(h/50*66),-188,11);//hat
};

var drawGlasses = function(bitmojiX, bitmojiY, h){
    stroke(0, 0, 0);
    fill(255,219,172);//glasses fill
    rect(bitmojiX+(h/50*56),bitmojiY+(h/50*56),(h/50*14),(h/50*10),4);//left glasses
    rect(bitmojiX+(h/50*75),bitmojiY+(h/50*56),(h/50*14),(h/50*10),4);//right glasses
    line(bitmojiX+(h/50*71),bitmojiY+(h/50*61),bitmojiX+(h/50*75),bitmojiY+(h/50*61));//glasses bridge
    line(bitmojiX+(h/50*89),bitmojiY+(h/50*61),bitmojiX+(h/50*100),bitmojiY+(h/50*60));//right temple
    line(bitmojiX+(h/50*56),bitmojiY+(h/50*61),bitmojiX+(h/50*50),bitmojiY+(h/50*60));//left temple
};

var drawEyesMouth = function(bitmojiX, bitmojiY, h){
    noStroke();
    fill(66, 46, 11);//eye color
    ellipse(bitmojiX+(h/50*64),bitmojiY+(h/50*61),(h/50*5),(h/50*5));//left eye
    ellipse(bitmojiX+(h/50*82),bitmojiY+(h/50*61),(h/50*5),(h/50*5));//right eye
    fill(237, 118, 118);
    stroke(0, 0, 0);
    arc(bitmojiX+(h/50*74),bitmojiY+(h/50*80),(h/50*17),(h/50*9),-18,195);//mouth
};

var drawBitmojiHead = function(bitmojiX, bitmojiY, h){
    drawFace(bitmojiX, bitmojiY, h);
    drawHairHat(bitmojiX, bitmojiY, h);
    drawGlasses(bitmojiX, bitmojiY, h);
    drawEyesMouth(bitmojiX, bitmojiY, h);
};
var drawBitmojiBody = function(bitmojiX, bitmojiY, h){
    drawClothes(bitmojiX, bitmojiY, h);
};
var drawBitmoji = function(bitmojiX, bitmojiY, h){
    drawBitmojiHead(bitmojiX, bitmojiY, h);
    drawBitmojiBody(bitmojiX, bitmojiY, h);
};

var currentScene = "splash";

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
    x: 0,
    y: 200,
    label: "Red",
    onClick: function() {
        currentScene = "red";
    }
});

var orangeButton = new Button({
    x: 0,
    y: 260,
    label: "Orange",
    onClick: function() {
        currentScene = "orange";
    }
});

var yellowButton = new Button({
    x: 0,
    y: 320,
    label: "Yellow",
    onClick: function() {
        currentScene = "yellow";
    }
});

var greenButton = new Button({
    x: 325,
    y: 200,
    label: "Green",
    onClick: function() {
        currentScene = "green";
    }
});

var blueButton = new Button({
    x: 325,
    y: 260,
    label: "Blue",
    onClick: function() {
        currentScene = "blue";
    }
});

var purpleButton = new Button({
    x: 325,
    y: 320,
    label: "Purple",
    onClick: function() {
        currentScene = "purple";
    }
});

mouseClicked = function (){
    if(currentScene !== "splash"){
        //every time mouse is clicked, random image from ornaments array is put on the screen
        image(ornaments[round(random(0,ornaments.length))],mouseX - 10, mouseY - 10, 30, 30);
    }
    redButton.handleMouseClick();
    orangeButton.handleMouseClick();
    yellowButton.handleMouseClick();
    greenButton.handleMouseClick();
    blueButton.handleMouseClick();
    purpleButton.handleMouseClick();
};

var splashScreen = function () 
{
    background(255, 255, 255);
    textSize(15);
    text("Created by: Claudia Deverdits and Meghan Flaherty", 27, 387);
    textSize(30);
    text("Decorate A Christmas Tree!", 18, 50);
    drawBitmoji(82, 260, 40);
    redButton.draw();
    orangeButton.draw();
    yellowButton.draw();
    greenButton.draw();
    blueButton.draw();
    purpleButton.draw();
};

splashScreen();
