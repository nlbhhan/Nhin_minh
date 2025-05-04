let img;

function preload() {
    img = loadImage("3.jpg");
}

function setup() {
    createCanvas(400, 400);
    img.resize(width, 0);
}

function draw() {
    background(0);
    imageMode(CENTER);
    image(img, 200, 200);
}