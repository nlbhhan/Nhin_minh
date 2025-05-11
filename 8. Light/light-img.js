let img;
let threshold = 200 ; //Cái ngưỡng
let slider;

function preload() {
    img = loadImage("imgs/9.jpg");
}

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);  //1 pixel trên webcam đến lúc display thì nó sẽ không thay đổi, tỉ lệ 1:1
    slider = createSlider(200, 255, 200, 5);
}

function draw() {
    background(220);
    image(img, 0, 0);
    img.loadPixels();

    
    let sumX = 0;
    let sumY = 0;
    //Đếm vùng sáng có bao nhiêu pixel
    let count = 0;
    threshold = slider.value();

    //Đi qia từng pixels
    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j<img.width; j=j+1) {
            let idx = (i*img.width +j) *4;

            let r = img.pixels[idx];
            let g = img.pixels[idx+1];
            let b = img.pixels[idx+2];
            let avg = (r+g+b)/3;

            if (avg>threshold) {
                count = count +1; 
                sumX = sumX + j; //Cộng theo hàng ngang
                sumY = sumY + i; //Cộng theo hàng dọc
            }
        }
    }
    locationX = sumX/count; //Số thứ tự pixel chia cho tổng pixel mà count đếm được
    locationY = sumY/count;
    circle(locationX, locationY, 20);
}