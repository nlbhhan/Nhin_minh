let video;

function setup() {
    createCanvas(800, 600);
    pixelDensity(1);  //1 pixel trên webcam đến lúc display thì nó sẽ không thay đổi, tỉ lệ 1:1
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    background(220);
    image(video, 0, 0, 800, 600);
    video.loadPixels();

    let maxSang = 0; //0 là tối nhất, đảm bảo nó đi từ 0 lên
    let maxX = 0;
    let maxY = 0;

    //Đi qia từng pixels
    for (let i=0; i<video.height; i=i+1) {
        for (let j=0; j<video.width; j=j+1) {
            let idx = (i*video.width +j) *4;

            let r = video.pixels[idx];
            let g = video.pixels[i+1];
            let b = video.pixels[i+2];
            let avg = (r+g+b)/3;

            // console.log(maxSang);

            if (avg>maxSang) {
                maxSang = avg;
                maxX = j;
                maxY = i;
            }
        }
    }

    circle(maxX, maxY, 20);
}