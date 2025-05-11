let img;
let font;
let chuoiKiTu = "_____________################";
let symbol = "     .:░▒▓█";


//Thêm slider
let slider;

function preload() {
    font = loadFont ("font/Tiny5-Regular.ttf");
    img = loadImage("Imgs/9.jpg");
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

            let idxSymbol = int(map(grayScale, 50, 255, 0, symbol.length));
            let chuoiSymbol = symbol[idxSymbol];

            //Underlayer
            textSize(5);
            fill(r+100,g,b+50, 190);
            noStroke();
            text(char, j*8, i*8);


            textSize(slider.value());
            // // Nếu giây chẵn thì đổi hình sang symbol, nếu giây lẻ thì đổi hình sang chuoiKyTu
            // if (second()%2 ==0) {
            //     textLeading(14);
            //     fill(r-10,g-255,b-20);
            //     noStroke();
            //     // text(char, j*7, i*7);
            //     ellipse(j*7, i*7, 5, 50);
            // } else {

                fill(r+100,g,b+50);
                noStroke();
                text(chuoiSymbol, j*7, i*7);
            
        }
    }
    img.updatePixels();

     //Text
    push();
    // textSize(180);
    textSize(slider.value());
    textLeading(50);
    textFont(font);
    // fill(155, 126, 189);
    fill(255);
    textAlign(TOP, LEFT);
    text("The\nOpera\nHouse", 10, 120);
    pop();           

}