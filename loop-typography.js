let font;
let pointsLanguished = []; 
let pointsDisintegrated = [];
let widthRect=0;
let heightRect=0;

function preload() {
    font = loadFont("assets/1-Font/Unbounded-Bold.ttf");
 }

function setup() {
    createCanvas(500, 500);
    pointsLanguished = font.textToPoints("languished", -170, 0, 60, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
        sampleFactor: 0.7,
        simplifyThreshold: 0.0001
    });

    pointsDisintegrated = font.textToPoints("disintegrated", 0, 200, 50, {
        sampleFactor: 0.1,
        simplyfyThreshold: 0
    });
}

function draw() {
    background(254, 243, 226);
    //points là 1 array tập hợp của các điểm tạo nên chữ "languished"

    
    push();
    translate(200, 200);
    for (let i=0; i<pointsLanguished.length; i = i+1) {
        let distance = dist(mouseX, mouseY, pointsLanguished[i].x, pointsLanguished[i].y);

        //Effect cho chữ, càng lia gần thì pixels càng bay ra xa
        widthRect = map(second(), 0, 60, 20, 0);
        heightRect = map(distance, 0, 200, 0, 1);

        strokeWeight(1);
        stroke(243, 198, 35);
        // noStroke();
        noFill();
        rect(pointsLanguished[i].x, pointsLanguished[i].y, widthRect, heightRect); //Để gọi toạ độ x, y ra thì array[].x và array[].y
    }
    pop();
}