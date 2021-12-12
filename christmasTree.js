//paste christmas tree code in here once completed with 1 task
//meghan's bitmoji code
var x = 100;
var y = 100;

//functions to draw bitmoji
var drawBit = function (x,y,bitSize) {
var drawHead = function (x,y,headSize) {
       //face
    stroke(255, 255, 255);
    fill(255, 225, 189);
    ellipse(x + (headSize/150 * 89),y + (headSize/150 * 71),headSize/150 * 68,headSize/150 * 90);
    //neck
    noStroke();
rect(x + (headSize/150 * 83),y + (headSize/150 * 111),headSize/150 * 15,headSize/150 * 14);
    //eyes
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(x + (headSize/150 * 76),y + (headSize/150 * 60),headSize/150 * 18,headSize/150 * 12);
    ellipse(x + (headSize/150 * 105),y + (headSize/150 * 60),headSize/150 * 18,headSize/150 * 12);
    fill(44, 97, 0);
    ellipse(x + (headSize/150 * 76),y + (headSize/150 * 60),headSize/150 * 10,headSize/150 * 10);
    ellipse(x + (headSize/150 * 105),y + (headSize/150 * 60),headSize/150 * 10,headSize/150 * 10);
    fill(0, 0, 0);
    ellipse(x + (headSize/150 * 105),y + (headSize/150 * 60),headSize/150 * 2,headSize/150 * 5);
    ellipse(x + (headSize/150 * 76),y + (headSize/150 * 60),headSize/150 * 3,headSize/150 * 5);
    //nose
    stroke(0, 0, 0);
    fill(255, 225, 189);
    bezier(x + (headSize/150 * 91),y + (headSize/150 * 84),x + (headSize/150 * 80),y + (headSize/150 * 84),x + (headSize/150 * 113),y + (headSize/150 * 85),x + (headSize/150 * 92),y + (headSize/150 * 70));
    //mouth
    fill(252, 247, 247);
    arc(x + (headSize/150 * 89),y + (headSize/150 * 94),headSize/150 * 30,headSize/150 * 13,1,180);
    line(x + (headSize/150 * 74),y + (headSize/150 * 93),x + (headSize/150 * 103),y + (headSize/150 * 94));

};
drawHead(x,y,bitSize);

var drawBody = function (x, y, headSize) {
    //body
    fill(148, 199, 227);
    rect(x + (headSize/150 * 62),y + (headSize/150 * 124),headSize/150 * 55,headSize/150 * 85,10); 
    //strings
    line(x + (headSize/150 * 82),y + (headSize/150 * 162),x + (headSize/150 * 79),y + (headSize/150 * 123));
    line(x + (headSize/150 * 99),y + (headSize/150 * 162),x + (headSize/150 * 100),y + (headSize/150 * 123));
    fill(148, 199, 227);
    ellipse(x + (headSize/150 * 82),y + (headSize/150 * 163),headSize/150 *5,headSize/150 *5);
    ellipse(x + (headSize/150 * 100),y + (headSize/150 * 163),headSize/150 * 5,headSize/150 * 5);
    //initials
    line(x + (headSize/150 * 70),y + (headSize/150 * 200),x + (headSize/150 * 70),y + (headSize/150 * 179));
    line(x + (headSize/150 * 77),y + (headSize/150 * 200),x + (headSize/150 * 70),y + (headSize/150 * 179));
    line(x + (headSize/150 * 77),y + (headSize/150 * 200),x + (headSize/150 * 82),y + (headSize/150 * 179));
    line(x + (headSize/150 * 85),y + (headSize/150 * 200),x + (headSize/150 * 82),y + (headSize/150 * 179));
    line(x + (headSize/150 * 96),y + (headSize/150 * 200),x + (headSize/150 * 96),y + (headSize/150 * 179));
    line(x + (headSize/150 * 106),y + (headSize/150 * 179),x + (headSize/150 * 96),y + (headSize/150 * 179));
    line(x + (headSize/150 * 106),y + (headSize/150 * 189),x + (headSize/150 * 96),y + (headSize/150* 188));

};
drawBody (x,y,bitSize);

var drawHairHat = function (x ,y, headSize) {
    //hair
    stroke(255, 255, 255);
    fill(36, 4, 4);
    bezier(x + (headSize/150 * 74),y + (headSize/150 * 28),x + (headSize/150 * -3),y + (headSize/150 * 137),x + (headSize/150 * 49),y + (headSize/150 * 139),x + (headSize/150 * 58),y + (headSize/150 * 177));
    bezier(x + (headSize/150 * 104),y + (headSize/150 * 28),x + (headSize/150 * 145),y + (headSize/150 * 87),x + (headSize/150 * 171),y + (headSize/150 * 94),x + (headSize/150 * 125),y + (headSize/150 * 177));
    triangle(x + (headSize/150 * 93),y + (headSize/150 * 28),x + (headSize/150 * 35),y + (headSize/150 * 91),x + (headSize/150 * 69),y + (headSize/150 * 27));
    stroke(36, 4, 4);
    //hat
    fill(255, 255, 0);
    triangle(x + (headSize/150 * 84),y + (headSize/150 * 32),x + (headSize/150 * 61),y + (headSize/150 * 32),x + (headSize/150 * 71),y + (headSize/150 * 3));
    triangle(x + (headSize/150 * 99),y + (headSize/150 * 32),x + (headSize/150 * 80),y + (headSize/150 * 32),x + (headSize/150 * 88),y + (headSize/150 * 3));
    triangle(x + (headSize/150 * 114),y + (headSize/150 * 32),x + (headSize/150 * 94),y + (headSize/150 * 32),x + (headSize/150 * 106),y + (headSize/150 * 3));

};
  
drawHairHat (x,y,bitSize);

};

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

//function to draw the present onto the tree screen
var present = function(){
    noStroke();
    fill(90, 189, 94);
    triangle(294, 346, 308, 329, 325, 351);
    triangle(354, 347, 340, 329, 323, 351);
    fill(255, 0, 0);
    rect(300, 350, 50, 50);
    fill(90, 189, 94);
    rect(318, 350, 12, 54);
    rect(300, 367, 50, 15);
};

//function to draw christmas tree takes a color parameter to be able to change the color with the different buttons
var christmasTree = function(treeColor){
    //draw background
    for(var i = 0; i < 400; i++){
        noStroke();
        fill(255, 138, 138);
        rect(-1, i * 60, 401, 29);
    }
    
    //draw actual christmas tree
    noStroke();
    fill(77, 73, 66);
    rect(170, 264, 64, 100);
    fill(treeColor);
    triangle(90, 160, 310, 160, 200, 45);
    triangle(50, 240, 350, 240, 200, 75);
    triangle(25, 320, 375, 320, 200, 130);
    fill(0,0,0);
    textSize(10);
    text("Everytime you click the button, the color of the ornament will change!",15,326,150,50);
    present();
};

//3 arrays of ornaments
var gemOrnaments = [
    getImage("cute/GemBlue"),
    getImage("cute/GemGreen"),
    getImage("cute/GemOrange")
    ];

var spunkyOrnaments = [
    getImage("avatars/spunky-sam"),
    getImage("avatars/spunky-sam-green"),
    getImage("avatars/spunky-sam-orange"),
    getImage("avatars/spunky-sam-red")
    ];

var piOrnaments = [
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
    fill(217, 217, 217);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(TOP, TOP);
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
//drawn on the tree screen to go back to the previous screen
var goBackButton = new Button({
    x: 15,
    y: 15,
    width: 100,
    label: "Go Back",
    onClick: function() {
        currentScene = "splash";
    }
});

//global variables to be able to change ornament and color in buttons
var currentOrnament = 0;
var currentColor;

//ornament buttons, when pressed each one gives a random color ornament of its type
var gemOrnament = new Button({
    x: 15,
    y: 365,
    height: 30,
    label: "Gem",
    onClick: function() {
        currentOrnament = gemOrnaments[round(random(0,gemOrnaments.length - 1))];
    }
});

var spunkyOrnament = new Button({
    x: 100,
    y: 365,
    height: 30,
    label: "Spunky",
    onClick: function() {
        currentOrnament = spunkyOrnaments[round(random(0,spunkyOrnaments.length - 1))];
    }
});

var piOrnament = new Button({
    x: 185,
    y: 365,
    height: 30,
    label: "Pi",
    onClick: function() {
       currentOrnament = piOrnaments[round(random(0,piOrnaments.length - 1))];
    }
});

//topper buttons, when pressed each one changes the topper appearing on top of the screen
var starTopper = new Button({
    x: 320,
    y: 50,
    height: 30,
    label: "Star",
    onClick: function() {
       image(getImage("space/star"), 153, -17);
    }
});

var claudiaTopper = new Button({
    x: 320,
    y: 85,
    height: 30,
    label: "Claudia",
    onClick: function() {
       drawBitmoji(163,0,25);
    }
});

var meghanTopper = new Button({
    x: 320,
    y: 120,
    height: 30,
    label: "Meghan",
    onClick: function() {
       drawBit(170,0,50);
    }
});

//function that draws all ornament and topper buttons
var ornamentTopperButtons = function(){
    piOrnament.draw();
    gemOrnament.draw();
    spunkyOrnament.draw();
    starTopper.draw();
    claudiaTopper.draw();
    meghanTopper.draw();
};

//when clicked, tree screen is redrawn, clearing it
var clearButton = new Button({
    x: 15,
    y: 75,
    height: 30,
    label: "Clear",
    onClick: function() {
       currentScene = "tree";
        background(255, 255, 255);
        christmasTree(currentColor);
        goBackButton.draw();
        ornamentTopperButtons();
        clearButton.draw();
    }
});

//function that holds universal onClick functions for the color buttons to avoid unneeded repetition
var buttonClickFunctions = function(){
        background(255, 255, 255);
        christmasTree(currentColor);
        goBackButton.draw();
        ornamentTopperButtons();
        clearButton.draw();
};

//each color button calls the buttonClickFunctions function, changes the currentScene and the currentColor
var redButton = new Button({
    x: 0,
    y: 200,
    label: "Red",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(179, 69, 69);
        buttonClickFunctions();
    }
});

var orangeButton = new Button({
    x: 0,
    y: 260,
    label: "Orange",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(222, 149, 31);
        buttonClickFunctions();
    }
});

var yellowButton = new Button({
    x: 0,
    y: 320,
    label: "Yellow",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(247, 232, 19);
        buttonClickFunctions();
    }
});

var greenButton = new Button({
    x: 325,
    y: 200,
    label: "Green",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(37, 82, 0);
        buttonClickFunctions();
    }
});

var blueButton = new Button({
    x: 325,
    y: 260,
    label: "Blue",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(43, 61, 217);
        buttonClickFunctions();
    }
});

var purpleButton = new Button({
    x: 325,
    y: 320,
    label: "Purple",
    onClick: function() {
        currentScene = "tree";
        currentColor = color(193, 65, 235);
        buttonClickFunctions();
    }
});

//function to draw the small repeating trees that appear on the splash screen
var smallTree = function (j, y){
    noStroke();
    fill(37, 82, 0);
    triangle(0 + j, 72 + y, -24 + j, 134 + y, 22 + j, 134 + y);
    fill(77, 73, 66);
    rect(-6 + j, 133 + y, 11, 17);
 };

var splashScreen = function (){
    background(255, 255, 255);
    fill(48, 45, 45);
    textSize(15);
    text("Created by: Claudia Deverdits and Meghan Flaherty", 27, 165);
    textAlign(CENTER, CENTER);
    text("Welcome to the game! Please select the color of tree you would like to decorate.", 79, 156, 243, 100);
    textSize(30);
    fill(235, 70, 70);
    text("Decorate A Christmas Tree!", 203, 47);
    
    //calls the smallTree function to repeatedly draw the trees on the splash screen
    for(var i = 0; i < 200; i++){
      smallTree(50 * i, 0);
    }
    
    //calling all bitmojis and drawing all the color buttons
    drawBit(217, 260, 80);
    drawBitmoji(82, 260, 40);
    redButton.draw();
    orangeButton.draw();
    yellowButton.draw();
    greenButton.draw();
    blueButton.draw();
    purpleButton.draw();
};

//if the current scene is splash then draw the splash screen
if(currentScene === "splash"){
    splashScreen();
}

mouseClicked = function (){
    //if the current scene is not splash and the mouse clicks in a certain area, the splash screen is drawn again
    if(currentScene !== "splash" &&  mouseX > 15 && mouseX < 115 && mouseY > 15 && mouseY < 65){
        goBackButton.handleMouseClick();
        splashScreen();
        } 
  //everytime mouse clicked, random image from ornaments array is put on screen
    if(currentScene !== "splash" && !(mouseX > 320 && mouseX < 400 && mouseY > 0 && mouseY < 150) && !(mouseX > 0 && mouseX < 400 && mouseY > 320 && mouseY < 400)){
            image(currentOrnament,mouseX - 10, mouseY - 10, 30, 30);
    }  
    //if the current scene is not splash, handle the mouse click of all buttons appearing on the tree screen
    if(currentScene !== "splash"){
        gemOrnament.handleMouseClick();
        spunkyOrnament.handleMouseClick();
        piOrnament.handleMouseClick();
        starTopper.handleMouseClick();
        claudiaTopper.handleMouseClick();
        meghanTopper.handleMouseClick();
        clearButton.handleMouseClick();
    }
    
    //color buttons only have function if the current scene is splash
    else if(currentScene === "splash"){
        redButton.handleMouseClick();
        orangeButton.handleMouseClick();
        yellowButton.handleMouseClick();
        greenButton.handleMouseClick();
        blueButton.handleMouseClick();
        purpleButton.handleMouseClick();
    }
};
