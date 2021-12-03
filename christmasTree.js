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

background(209, 209, 209);

//function to draw christmas tree (no need for parameters yet bc tree doesn't need to ever be moved)
var christmasTree = function(treeColor){
noStroke();
fill(77, 73, 66);
rect(170, 264, 64, 100);
fill(treeColor);
triangle(90, 160, 310, 160, 200, 45);
triangle(50, 240, 350, 240, 200, 75);
triangle(25, 320, 375, 320, 200, 130);
image(getImage("space/star"), 153, -17);
};

//call the function to make it draw


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
        background(255, 255, 255);
        christmasTree(color(179, 69, 69));
    }
});

var orangeButton = new Button({
    x: 0,
    y: 260,
    label: "Orange",
    onClick: function() {
        currentScene = "orange";
        background(255, 255, 255);
        christmasTree(color(222, 149, 31));
    }
});

var yellowButton = new Button({
    x: 0,
    y: 320,
    label: "Yellow",
    onClick: function() {
        currentScene = "yellow";
        background(255, 255, 255);
        christmasTree(color(247, 232, 19));
    }
});

var greenButton = new Button({
    x: 325,
    y: 200,
    label: "Green",
    onClick: function() {
        currentScene = "green";
        background(255, 255, 255);
        christmasTree(color(37, 82, 0));
    }
});

var blueButton = new Button({
    x: 325,
    y: 260,
    label: "Blue",
    onClick: function() {
        currentScene = "blue";
        background(255, 255, 255);
        christmasTree(color(43, 61, 217));
    }
});

var purpleButton = new Button({
    x: 325,
    y: 320,
    label: "Purple",
    onClick: function() {
        currentScene = "purple";
        background(255, 255, 255);
        christmasTree(color(193, 65, 235));
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

var smallTree = function (j,y) 
 {
    noStroke();
        fill(37,82,0);
        triangle(53+j,72+y,29+j,134+y,76+j,134+y);
        fill(77,73,66);
        rect(46 + j,133 + y,11,17);
    
 };
 
  
var splashScreen = function () 
{
    background(255, 255, 255);
    textSize(15);
    text("Created by: Claudia Deverdits and Meghan Flaherty", 27, 387);
    textSize(30);
    fill(235, 70, 70);
    text("Decorate A Christmas Tree!", 21, 59);
    drawBit(217,260,80);
    drawBitmoji(82, 260, 40);
    redButton.draw();
    orangeButton.draw();
    yellowButton.draw();
    greenButton.draw();
    blueButton.draw();
    purpleButton.draw();
    for (var i = 0; i < 266; i++)
  {
      smallTree(62*i,0);
  }
    text("Welcome to the game! Please select the color of tree you would like to decorate.",96,162,250,100);
 
};

splashScreen();
