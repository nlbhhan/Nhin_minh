let font;
let points; 
let sizeX=0;
let sizeY=0;

function preload() {
    font = loadFont("assets/1-Font/Unbounded-Bold.ttf");
 }

function setup() {
    createCanvas(500, 500);
    points = font.textToPoints("languished", 0, 100, 60, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
        sampleFactor: 0.4,
        simplifyThreshold: 0
    });
}

function draw() {
    background(254, 243, 226);
    //points là 1 array tập hợp của các điểm tạo nên chữ "languished"

    

    for (let i=0; i<points.length; i = i+2) {
        let distance = dist(mouseX, mouseY, points[i].x, points[i].y);

        //Effect cho chữ, càng lia gần thì pixels càng bay ra xa
        sizeX = map(distance, 0, 100, 10, 0);
        sizeY = map(distance, 0, 1000, 0, 10);

        strokeWeight(1);
        stroke(243, 198, 35);
        noFill();
        rect(points[i].x, points[i].y, sizeX, sizeY); //Để gọi toạ độ x, y ra thì array[].x và array[].y
    }
}