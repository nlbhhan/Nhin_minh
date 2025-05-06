let img;
// let font;
let chuoiKiTu= "         BBBBBBBBBBB";

function preload() {
    img = loadImage("Imgs/3.jpg");
    // font = loadFont("font/Spectral-ExtraLight.ttf");
}

function setup() {
    createCanvas(400, 400);
    // img.resize(0, 400);
    noLoop();
}

function draw() {
    background(0);
    image(img, 0, 0);
    img.loadPixels();

    //Đi qua từng pixels (hàng ngang và hàng dọc)
    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; i<img.width; j=j+1) {
            idx = (i*width+j)*4; //Hàm để đi qua từng pixels trong hàng và cột

            //Tính độ sáng trung bình của hình
            let r = img.pixels[idx]; //Red
            let g = img.pixels[idx+1]; //Green
            let b = img.pixels[idx+2]; //Blue

            let avg = (r + g + b)/3;

            //Hiển thị index theo độ sáng của hình, bỏ dô int() để nó hiện số nguyên
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu.length)); 
            let char = chuoiKiTu[charIndex];

            textSize(5);
            // textFont(font);
            // textLeading(6);
            fill(r, g, b);
            noStroke();
            text(char, j, i);
        }
    }
    img.updatePixels();
}
