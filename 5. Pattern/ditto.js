let font;
let img;
let points = [];
let spaceDitto = 2;
let yEllipse = 400;
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

    img.resize(width, 0);
}

function draw() {
    background(0, 18, 83, 250);

    // background texture
    push();
    tint(255, 100);
    image(img, 0, -50);
    pop();

    //Vẽ chữ Ditto
    push();
    textSize(100);
    textFont(font);
    textAlign(LEFT, TOP);
    textLeading(140);
    //Chuột càng xa thì chữ càng rõ
    let distanceDitto = dist(mouseX, mouseY, 10, 150); //Khoảng cách từ chuột đến vị trí tâm của chữ
    alphaValue = map(distanceDitto, 50, 200, 0, 255); //Opacity của chữ sẽ tỉ lệ với vị trí chuột, khoảng cách tới chuột = 0(tức càng gần chuột) thì chữ sẽ càng rõ
    fill(255, 235, 0, alphaValue);
    text("ditto", 50, 120, alphaValue);
    pop();


    //Draw Curtain 
    push();
    // noFill();
    fill(235, 235, 223, 250);
    noStroke();
    // strokeWeight(1); 
    // for(let j=0; j<height; j=j+50) {
        for(let i=0; i<points.length; i=i+10) {
        // yEllipse = map(second() * 2, 0, 60, 50, 100);
        let distance = dist(mouseX, mouseY, points[i].x, points[i].y);
        xEllipse = map(distance, 0, 50, 1, 0);
        yEllipse = map(distance, 0, 100, 0, 400);
        ellipse(points[i].x, points[i].y, xEllipse, yEllipse);
        }
    pop();

    // rect(10, 150, 300, 100);

}

