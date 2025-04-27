let img1, img2, img3, img4;
let gallery = []; //Khai báo cá này là Array nha, Array đang rỗng chưa có gì hết
let index = 0;

function preload() {
    img1 = loadImage('assets/1.jpg');
    img2 = loadImage('assets/2.jpg');
    img3 = loadImage('assets/3.jpg');
    img4 = loadImage('assets/4.jpg');
}

function setup() {
    createCanvas(400, 400);
    gallery = [img1, img2, img3, img4]; //Xuống đây mới bỏ item dô Array nè
     //Resize hinh
    img1.resize(0, 200); //resize nên đặt ở ngay setup
    img2.resize(0, 200);
    img3.resize(0, 200);
    img4.resize(200, 0);
}

function draw() {
background(0);

imageMode(CENTER);
image(gallery[index % gallery.length], 200, 200);
// circle(100, 100, 100);
}

// //Đổi hình khi click chuột
// function mouseClicked() {
//     index = index+1;

//Nhấn arrow right để đi tới và arrow left để đi lùi lại
function keyPressed() {
    if(keyCode == RIGHT_ARROW){
    index = index +1;
}
    if(keyCode == LEFT_ARROW) {
        index = index -1;
    }
    if (index < 0) {
        // index = 3;
        index = gallery.length -1; //Nếu index là số âm thì index sẽ bằng gallery.length (bằng 4) trừ đi 1 (bằng 3, nghĩa là quay về ảnh cuối cùng)
    }
}