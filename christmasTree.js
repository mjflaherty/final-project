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
