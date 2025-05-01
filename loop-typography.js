let font;
let points; 
let sizeX=0;
let sizeY=0;

function preload() {
    font = loadFont("assets/1. Font/IBMPlexMono-Medium.ttf");
 }

function setup() {
    createCanvas(500, 500);
    points = font.textToPoints("languished", 0, 100, 50, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
}

function draw() {
    background(250);
    //points là 1 array tập hợp của các điểm tạo nên chữ "nlbh"

    

    for (let i=0; i<points.length; i = i+1) {
        let distance = dist(mouseX, mouseY, points[i].x, points[i].y);
        sizeX = map(distance, 0, 200, 10, 0); //Effect cho chữ, càng lia chuột gần thì hình tròn càng to
    //tại mỗi điểm của chữ thì vẽ 1 cái circle
        sizeY = map(distance, 0, 200, 0, 10);

        noStroke()
        fill(0);
        rect(points[i].x, points[i].y, sizeX, sizeY); //Để gọi toạ độ x, y ra thì array[].x và array[].y
    }
}