let font;
let points; 

function preload() {
    font = loadFont("assets/1. Font/IBMPlexMono-Medium.ttf");
 }

function setup() {
    createCanvas(400, 400);
    points = font.textToPoints("nlbh", 0, height/2, 100, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
        sampleFactor: 0.1,
        simplifyThreshold: 0
    });
}

function draw() {
    background(250);
    //points là 1 array tập hợp của các điểm tạo nên chữ "nlbh"
    for (let i=0; i<points.length; i = i+1) { //tại mỗi điểm của chữ thì vẽ 1 cái circle
        circle(points[i].x, points[i].y, 10); 
    }
}