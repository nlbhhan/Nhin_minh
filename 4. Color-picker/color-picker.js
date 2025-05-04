let img;
function preload() {
    img = loadImage("assets/2.jpg");
}

function setup() {
    createCanvas(400, 400);
    img.resize(0, height);
}

function draw() {
    background(0);

    //Hiển thị hình
    imageMode(CORNER);
    image(img, 0, 0);

    //Color picker
    let c = img.get(mouseX, mouseY); //.get là lấy màu, lấy màu ngay tại vị trí con chuột
    // console.log(c);
    fill(c);
    rect(300, 0, 100, height);
}