let font;
let points = [];
let size = 0;
// let sizeY = 0;

function preload() {
    font = loadFont("nhin-minh/assets/1. Font/IBMPlexMono-Medium.ttf");
}

function setup() {
    createCanvas(400, 400);
    points = font.textToPoints("languished", 0, 100, 50, {
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
}

function draw() {
    background(0);
    for(let i=0; i<points.length; i=i+1+) {
    let distance = dist(mouseX, mouseY, points[i].x, points[i].y);
    size = map(distance, 0, 200, 10, 0);
    // sizeY = map(distance, 0, 200, 0, 10);

    noStroke();
    fill(255);
    circle(points[i].x, points[i].y, size);
    }
}