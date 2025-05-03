let angleCanh = 30;
let spaceHoa = 100;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background("yellow");
    for(let j=0; j<height/spaceHoa + 1; j=j+1) { //Lặp theo chiều dọc
        for(let i=0; i<width/spaceHoa + 1; i=i+1) { //Lặp theo chiều ngang
            // veHoa(100, 100); //Gọi hàm vẽ hoa ở trên này
            // veHoa(200, 200);
            // veHoa(300, 300);
            veHoa(i*spaceHoa, j*spaceHoa); //Thay vì thay số thì để thành chiều dài của canvas chia khoảng cách giữa các bông
        }
    }
}
    

function veHoa(x,y) { //Khi thay ở dưới này là bằng x và y rồi thì trên veHoa() ở function draw có thể thay toạ độ để vẽ bông hoa mới
//Bông hoa
push();
// translate(200, 200);
translate(x,y); //Thay 200, 200 bằng x và y
stroke("yellow");
fill("magenta");

    // for(let i=0; i<360; i=i+30) {
    for(let i=0; i<360/angleCanh; i=i+1) { //Giữ for loop đơn giản, i là số cánh, số cánh sẽ bằng 360 chia cho số độ giữa 2 cánh là 30
        rotate(angleCanh);
        ellipse(0, -40, 20, 80);
    }
//Nhuỵ hoa
    noStroke();
    fill("yellow");
    circle(0, 0, 20);
    pop();
}
    
    
    

