let font;
let points = [];
let spaceDitto = 2;
let lengthEllipse = 50;

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
    background("magenta");

    noFill();
    stroke("yellow");
    strokeWeight(1); 
    // for(let j=0; j<height; j=j+50) {
        for(let i=0; i<points.length; i=i+2) {
        lengthEllipse = map(second(), 0, 30, 50, 100);
        ellipse(points[i].x, points[i].y, 5, lengthEllipse);
        }
}

