let img;
let font;
let semiBold;
let soraMedium;
let soraExtraBold;
let symbol = "     .:░▒▓█"; 
// let chuoiKiTu= "__________________$$$$$$$$$$";

//Slider -Thiết lập thanh kéo
let sliderSize;

//Pick màu
let colorPicker;

//Text input
let textInput;

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

    // noLoop(); ////Dùng slider là không được xài noLoop
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
    img.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    // console.log(img.pixels);
    
}