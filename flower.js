// let chuyenMau;
// let canhHoa;


function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(243, 198, 35);
    translate(200, 200);

    let from = color(243, 198, 35);
    let to = color(250, 129, 47);
    

    //Gradient cho cánh hoa
    for (let y=-50; y<0; y=y+1) {
        let chuyenMau = map(y, -50, 0, 1, 0);
        let canhHoa = lerpColor(from, to, chuyenMau);
    
    //Lặp ellipse để tạo cánh hoa
        for (let i=0; i<360; i=i+30) {
                push();
                rotate(30); //Mỗi lần lặp thì cánh hoa xoay 30 độ
                noStroke();
                fill(canhHoa);
                ellipse(0, y, 20, 70); //Ở đây dùng y -> tại mỗi vị trí y vẽ 1 ellipse, mỗi ellipse sẽ chuyển màu dần từ fill(from) đến fill(to)
                }
                pop();
    }
       

    //Nhuỵ hoa
    push();
    fill(from);
    // translate(200, 200);
    circle(0, 0, 50);
    pop();
    
}