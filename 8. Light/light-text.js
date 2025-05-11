let video;
let threshold = 200 ; //Cái ngưỡng
let slider;
let lyrics = `
It only hurts this much right now
Was what I was thinking the whole time
Breathe in, breathe through
Breathe deep, breathe out
I'll be getting over you my whole life
You know how scared I am of elevators
Never trust it if it rises fast
It can't last
Uh oh, I'm falling in love
Oh no, I'm falling in love again
Oh, I'm falling in love
I thought the plane was going down
How'd you turn it right around
It only feels this raw right now
Lost in the labyrinth of my mind
Break up, break free, break through, break down
You would break your back to make me break a smile
You know how much I hate that everybody just expects me to bounce back
Just like that
Uh oh, I'm falling in love
Oh no, I'm falling in love again
Oh, I'm falling in love
I thought the plane was going down
How'd you turn it right around
Uh oh, I'm falling in love
Oh no, I'm falling in love again
Oh, I'm falling in love
I thought the plane was going down
How'd you turn it right around
Uh oh, I'm falling in love
Oh no, I'm falling in love again
Oh, I'm falling in love
I thought the plane was going down
How'd you turn it right around
Uh oh, I'm falling in love
Oh no, I'm falling in love again
Oh, I'm falling in love
I thought the plane was going down
How'd you turn it right around
`



function setup() {
    createCanvas(800, 600);
    pixelDensity(1);  //1 pixel trên webcam đến lúc display thì nó sẽ không thay đổi, tỉ lệ 1:1
    video = createCapture(VIDEO);
    video.hide();

    slider = createSlider(200, 255, 200, 5);
}

function draw() {
    background(0);

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
    circle(locationX, locationY, 80);
    textSize(24);
    text(lyrics, 0, 0);
}