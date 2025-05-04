let angleCanh = 30;
let spaceHoa = 100;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
}

function draw() {
    background("yellow");
    let angleHoa = 0;

    for(let j=0; j<windowHeight/spaceHoa + 1; j=j+1) { //Lặp theo chiều dọc
        for(let i=0; i<windowWidth/spaceHoa + 1; i=i+1) { //Lặp theo chiều ngang
            // angleHoa = angleHoa+30;
            push();
            translate(i*spaceHoa, j*spaceHoa);
            let distanceHoa = dist(mouseX, mouseY, i*spaceHoa, j*spaceHoa);
            scaleHoa = map(distanceHoa, 0, 80, 0.1, 0.5);
            scale(scaleHoa);
            veHoa(i*spaceHoa, j*spaceHoa); //Thay vì thay số thì để thành chiều dài của canvas chia khoảng cách giữa các bông
            pop();
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
    
    
    

