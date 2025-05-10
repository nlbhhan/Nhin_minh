let img;
let font;
let semiBold;
let soraMedium;
let soraExtraBold;
let symbol = "     .:░▒▓█"; 

//Slider -Thiết lập thanh kéo
let sliderSize;

//Pick màu
let colorPicker;

//Text input
let textInput;

//Load webcam
let capture;

function preload() {
    img = loadImage("Imgs/8.jpg");
    font = loadFont("font/Spectral-ExtraLight.ttf");
    semiBold = loadFont("font/Spectral-SemiBoldItalic.ttf");
    soraMedium = loadFont("font/Sora-Medium.ttf");
    soraExtraBold = loadFont("font/Sora-ExtraBold.ttf");
}

function setup() {
    createCanvas(1080,  1080);
    angleMode(DEGREES);

    //Tạo Slider để tăng size cho chữ
    sliderSize = createSlider(10, 100, 36, 1); //min Text size, max text size, default là 10, và mỗi lần kéo thì cộng/trừ 1 đơn vị
    sliderSize.position(1, 1000);
    sliderSize.size(100);

    //Color picker
    colorPicker = createColorPicker('deeppink');
    colorPicker.position(1, 1020);
    colorPicker.size(200, 40);

    //Text input
    textInput = createInput("     .:░▒▓█");
    textInput.position(200, 1020);

    //Camera
    capture = createCapture(VIDEO);
    let ratio = capture.width/capture.height;
    capture.size(100, 100/ratio);
    // noLoop(); ////Dùng slider là không được xài noLoop
}

function draw() {
    background("white");
    capture.loadPixels(); 

    for (let i=0; i<capture.height; i=i+1) {
        for (let j=0; j < capture.width; j = j+1) {
            idx=(i*capture.width+j)*4; //Đi qua từng pixel của ảnh nên chỗ này phải là width của ảnh

            //Tính độ sáng trung bình của hình, coi pixel ngay chỗ đó nó sáng bao nhiêu 
            let r = capture.pixels[idx]; //Red
            let g = capture.pixels[idx+1]; //Green
            let b = capture.pixels[idx+2]; //Blue
            let avg = (r+g+b)/3;

            let idxSymbol = int(map(avg, 0, 255, 0, textInput.value().length)); //Thay đổi nguyên chuỗi đầu bằng chuỗi mới
            let chuoiKyTu = textInput.value()[idxSymbol];

            // console.log(chuoiKyTu);

            //Third layer
            textSize(sliderSize.value());
            textLeading(45);
            textAlign(CENTER);
            // textFont(font);
            fill(colorPicker.value()); 
            noStroke();
            text(chuoiKyTu, j*20, i*20);
            
            
        }
    }
    capture.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    
}