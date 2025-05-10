let img;
let font;
let semiBold;
let soraMedium;
let soraExtraBold;
// let chuoiKiTu = "     .:░▒▓█"; 
let chuoiKiTu= "__________________@@@@@@@@@@@@@@@@@@###############";

//Slider -Thiết lập thanh kéo
let slider;

function preload() {
    img = loadImage("Imgs/8.jpg");
    font = loadFont("font/Spectral-ExtraLight.ttf");
    semiBold = loadFont("font/Spectral-SemiBoldItalic.ttf");
    soraMedium = loadFont("font/Sora-Medium.ttf");
    soraExtraBold = loadFont("font/Sora-ExtraBold.ttf");
}

function setup() {
    createCanvas(1080,  windowHeight);
    angleMode(DEGREES);
    slider = createSlider(10, 200, 10, 1); //min Text size, max text size, default là 10, và mỗi lần kéo thì cộng/trừ 1 đơn vị
    slider.position(1, height/2);
    // noLoop();
}

function draw() {
    // background(248, 248, 255);
    background("white");
    image(img, 0, 0);
    img.loadPixels(); 

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j < img.width; j = j+1) {
            idx=(i*img.width+j)*4; //Đi qua từng pixel của ảnh nên chỗ này phải là width của ảnh

            //Tính độ sáng trung bình của hình, coi pixel ngay chỗ đó nó sáng bao nhiêu 
            let r = img.pixels[idx]; //Red
            let g = img.pixels[idx+1]; //Green
            let b = img.pixels[idx+2]; //Blue
            let avg = (r+g+b)/3;

            //Hiện thị index theo độ sáng của hình
            //Bỏ dô int() để nó hiện thị số nguyên
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu.length)); //Độ sáng chạy từ 0 đến 255, pixels chạy từ 0 đến length của chuoiKiTu
            let char = chuoiKiTu[charIndex]; //Có index rồi thì hiển thị nó ra
            
            //Third layer
            textSize(slider.value());
            textLeading(45);
            textAlign(CENTER);
            textFont(font);
            fill(r+50, g-30, b+20); 
            noStroke();
            text(char, j*10, i*10);
            
            
        }
    }
    img.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    // console.log(img.pixels);
    
}