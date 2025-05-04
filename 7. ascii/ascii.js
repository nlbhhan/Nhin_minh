let img;

function preload() {
    img = loadImage("3.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // img.resize(200, 200);
    noLoop();
}

function draw() {
    // background(0);
    
    img.loadPixels();
    //Invert color
    for (let i=0; i<img.pixels.length; i=i+4) { //1 tập hợp pixels bao gồm 4 dữ liệu R, G, B và A(Alpha) nên i phải nhảy 4 bước để đi tới tập hợp tiếp theo
        img.pixels[i] = 255 - img.pixels; //Lớp đầu tiên - Red
        img.pixels[i+1] = 255 - img.pixels[i+1]; //Lớp thứ 2 - Green
        img.pixels[i+2] = 255 - img.pixels[i+2]; // Lớp thứ 3 - Blue
        //Không có lớp thứ 4 vì không invert được lớp Alpha
    }

    img.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    // console.log(img.pixels);
    image(img, 0, 0);
}