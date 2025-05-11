let img;
let font;
let chuoiKiTu = "_______________##############";

function preload() {
    font = loadFont ("font/Sora-Medium.ttf");
    img = loadImage("Imgs/9.jpg");
}

function setup() {
    createCanvas(700, 1050);
    noLoop();
}

function draw() {
    background("black");
    // image(img, 0, 0);

    img.loadPixels();

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j<img.width; j=j+1) {
            idx = (i * img.width + j) * 4;

            //Tinh do sang trung binh cua anh
            let r = img.pixels[idx]; //Red
            let g = img.pixels[idx+1]; //Green
            let b = img.pixels[idx+2]; //Blue
            let grayScale = (r+g+b)/3;

            let charIndex = int(map(grayScale, 0, 255, 0, chuoiKiTu.length));
            let char = chuoiKiTu[charIndex];

            textSize(12);
            textFont(font);
            textLeading(14);
            fill(r,g,b);
            noStroke();
            text(char, j*7, i*7);
        }
    }
    img.updatePixels();
}