let video;
let threshold = 200 ; //Cái ngưỡng
let slider;

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);  //1 pixel trên webcam đến lúc display thì nó sẽ không thay đổi, tỉ lệ 1:1
    video = createCapture(VIDEO);
    video.hide();
    slider = createSlider(200, 255, 200, 5);
}

function draw() {
    background(220);
    image(video, 0, 0, 800, 600);
    video.loadPixels();

    
    let sumX = 0;
    let sumY = 0;
    //Đếm vùng sáng có bao nhiêu pixel
    let count = 0;
    threshold = slider.value();

    //Đi qia từng pixels
    for (let i=0; i<video.height; i=i+1) {
        for (let j=0; j<video.width; j=j+1) {
            let idx = (i*video.width +j) *4;

            let r = video.pixels[idx];
            let g = video.pixels[idx+1];
            let b = video.pixels[idx+2];
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