let img;
let font;
let chuoiKiTu = "_____________################";


//Thêm slider
let slider;

function preload() {
    font = loadFont ("font/Sora-Medium.ttf");
    img = loadImage("Imgs/10.jpg");
}

function setup() {
    createCanvas(700, 1050);
    // noLoop();

    //Tạo slider để tăng size cho chữ
    slider = createSlider(5, 72, 10, 1); 
    slider.position(750, 200);
    slider.size(100);
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

            textSize(slider.value());
            // textFont(font);
            textLeading(14);
            fill(r-20,g,b);
            noStroke();
            text(char, j*7, i*7);
        }
    }
    img.updatePixels();
}