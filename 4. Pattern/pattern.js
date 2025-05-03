let font;
let points = [];
let spaceDitto = 2;
let yEllipse = 50;
let xEllipse = 0;
let alphaValue = 0;

function preload() {
    font = loadFont("fonts/Unbounded-Bold.ttf");
 }

function setup() {
    createCanvas(400, 400);
    points = font.textToPoints("ditto", 0, 200, 130, {
        sampleFactor: 0.7,
        simplyfyThreshold: 0
    });
}

function draw() {
    background(38, 31, 179);
    push();
    textSize(100);
    textFont(font);
    textAlign(CENTER);

    //Chuột càng xa thì chữ càng rõ
    let distanceDitto = dist(mouseX, mouseY, 200, 200); //Khoảng cách từ chuột đến vị trí tâm của chữ
    alphaValue = map(distanceDitto, 0, 70, 255, 0); //Opacity của chữ sẽ tỉ lệ với vị trí chuột, khoảng cách tới chuột = 0(tức càng gần chuột) thì chữ sẽ càng mờ
    fill(255, 255, 0, alphaValue);
    textAlign(LEFT, TOP);
    text("ditto", 15, 100, alphaValue);
    pop();


    //Draw Curtain 
    push();
    // noFill();
    fill("yellow");
    noStroke();
    // strokeWeight(1); 
    // for(let j=0; j<height; j=j+50) {
        for(let i=0; i<points.length; i=i+2) {
        // yEllipse = map(second() * 2, 0, 60, 50, 100);
        let distance = dist(mouseX, mouseY, points[i].x, points[i].y);
        xEllipse = map(distance, 0, 50, 1, 0);
        ellipse(points[i].x, points[i].y, xEllipse, height);
        }
    pop();


}

