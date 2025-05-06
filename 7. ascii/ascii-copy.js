let img;
let font;
// let chuoiKiTu = "     .:░▒▓█"; 
let chuoiKiTu= "           cccccCCCCCCBBBBBBBBBBB";

function preload() {
    img = loadImage("Imgs/5.jpg");
    font = loadFont("font/Spectral-ExtraLight.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    img.resize(0, windowHeight);
    noLoop();
}

function draw() {
    background(0);
    // image(img, 0, 0);
    img.loadPixels(); 

        //Invert color
        // for (let i=0; i<img.pixels.length; i=i+4) { //1 tập hợp pixels bao gồm 4 dữ liệu R, G, B và A(Alpha) nên i phải nhảy 4 bước để đi tới tập hợp tiếp theo
        //     img.pixels[i] = 255 - img.pixels; //Lớp đầu tiên - Red
        //     img.pixels[i+1] = 255 - img.pixels[i+1]; //Lớp thứ 2 - Green
        //     img.pixels[i+2] = 255 - img.pixels[i+2]; // Lớp thứ 3 - Blue
            //Không có lớp thứ 4 vì không invert được lớp Alpha

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j < img.width; j = j+1) {
            idx=(i*width+j)*4; //Đi qua từng pixel

            //Tính độ sáng trung bình của hình, coi pixel ngay chỗ đó nó sáng bao nhiêu 
            let r = img.pixels[idx]; //Red
            let g = img.pixels[idx+1]; //Green
            let b = img.pixels[idx+2]; //Blue
            let avg = (r+g+b)/3;

            //Hiện thị index theo độ sáng của hình
            //Bỏ dô int() để nó hiện thị số nguyên
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu.length)); //Độ sáng chạy từ 0 đến 255, pixels chạy từ 0 đến length của chuoiKiTu
            let char = chuoiKiTu[charIndex]; //Có index rồi thì hiển thị nó ra
            textSize(24);
            textLeading(30);
            textAlign(CENTER);
            textFont(font);
            fill(255); 
            noStroke();
            text(char, j*10, i*10);   //Khúc này nhân lên cho 5 nên nó sẽ hiển thị vượt quá cái hình
        }
    }


    img.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    // console.log(img.pixels);
    
}