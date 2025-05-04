let font;
let img;
let points = [];
let spaceDitto = 2;
let yEllipse = 50;
let xEllipse = 0;
let alphaValue = 0;

let alphaEllipse = 0;

function preload() {
    font = loadFont("fonts/Fz-Planet.ttf");
    img = loadImage("bunny.jpeg");
 }

function setup() {
    createCanvas(400, 400);
    points = font.textToPoints("ditto", 0, 200, 130, {
        sampleFactor: 0.7,
        simplyfyThreshold: 0
    });

    img.resize(0, 400);
}

function draw() {
    background(0, 18, 83, 250);

    //background texture
    push();
    image(img, 200, 0);
    pop();

    //Vẽ chữ Ditto
    push();
    textSize(150);
    textFont(font);
    textAlign(LEFT, TOP);
    textLeading(140);
    //Chuột càng xa thì chữ càng rõ
    let distanceDitto = dist(mouseX, mouseY, 200, 200); //Khoảng cách từ chuột đến vị trí tâm của chữ
    alphaValue = map(distanceDitto, 0, 200, 255, 0); //Opacity của chữ sẽ tỉ lệ với vị trí chuột, khoảng cách tới chuột = 0(tức càng gần chuột) thì chữ sẽ càng mờ
    fill(235, 235, 223, alphaValue);
    text("dit\nto", 10, 30, alphaValue);
    pop();


    //Draw Curtain 
    push();
    // noFill();
    fill(235, 235, 223);
    noStroke();
    // strokeWeight(1); 
    // for(let j=0; j<height; j=j+50) {
        for(let i=0; i<points.length; i=i+10) {
        // yEllipse = map(second() * 2, 0, 60, 50, 100);
        let distance = dist(mouseX, mouseY, points[i].x, points[i].y);
        xEllipse = map(distance, 0, 50, 1, 0);
        ellipse(points[i].x, points[i].y, xEllipse, height);
        }
    pop();


}

