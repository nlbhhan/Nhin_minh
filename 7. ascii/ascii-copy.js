let img;
let font;
let semiBold;
let soraMedium;
let soraExtraBold;
let chuoiKiTu = "     .:░▒▓█"; 
// let chuoiKiTu= "__________________###############";
let chuoiKiTu2 = "                _______________";

function preload() {
    img = loadImage("Imgs/7.jpg");
    font = loadFont("font/Spectral-ExtraLight.ttf");
    semiBold = loadFont("font/Spectral-SemiBoldItalic.ttf");
    soraMedium = loadFont("font/Sora-Medium.ttf");
    soraExtraBold = loadFont("font/Sora-ExtraBold.ttf");
}

function setup() {
    createCanvas(1080,  windowHeight);
    img.resize(300, 0);
    angleMode(DEGREES);
    noLoop();
}

function draw() {
    // background(248, 248, 255);
    background(0);
    // image(img, 0, 0);
    img.loadPixels(); 

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j < img.width; j = j+1) {
            idx=(i*300+j)*4; //Đi qua từng pixel của ảnh nên chỗ này phải là width của ảnh

            //Tính độ sáng trung bình của hình, coi pixel ngay chỗ đó nó sáng bao nhiêu 
            let r = img.pixels[idx]; //Red
            let g = img.pixels[idx+1]; //Green
            let b = img.pixels[idx+2]; //Blue
            let avg = (r+g+b)/3;

            //Hiện thị index theo độ sáng của hình
            //Bỏ dô int() để nó hiện thị số nguyên
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu.length)); //Độ sáng chạy từ 0 đến 255, pixels chạy từ 0 đến length của chuoiKiTu
            let char = chuoiKiTu[charIndex]; //Có index rồi thì hiển thị nó ra

            let charIndex2 = int(map(avg, 255, 0, chuoiKiTu2.length));
            let char2 = chuoiKiTu2[charIndex2];
            
            //First layer
            push();
            translate(200, 0);
            textSize(12);
            textLeading(60);
            textAlign(CENTER);
            textFont(soraExtraBold);
            fill(255); 
            noStroke();
            rotate(90);
            text(char, j*10, i*5);  
            pop();
            
            //Second layer
            textSize(24);
            textLeading(45);
            textAlign(CENTER);
            textFont(semiBold);
            fill(5, 191, 219, 100); 
            noStroke();
            text(char, width-j*5, i*5); 

            //Third layer
            textSize(24);
            textLeading(45);
            textAlign(CENTER);
            textFont(font);
            fill(0, 255, 202, 200); 
            noStroke();
            text(char, j*10, i*10);

            

            

            // //First layer
            // textSize(24);
            // textLeading(45);
            // textAlign(CENTER);
            // textFont(font);
            // fill(255, 144, 187); 
            // noStroke();
            // text(char, width-j*10, i*5);  

            
            
        }
    }

        //Quote
        textSize(36);
        textAlign(TOP, LEFT);
        textFont(soraMedium);
        textLeading(36);
        fill("white");
        noStroke();
        text('To me, there is no better way', 100, 500);
        text('to release my mind', 400, 536);
        text('than to go do', 250, 572);
        // textAlign(TOP, RIGHT);
        text('Photography', 650, 572);
    


    img.updatePixels(); //Nhớ phải có bước này để hình hiển thị các thay đổi mình đã làm ở trên
    // console.log(img.pixels);
    
}