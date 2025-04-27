let spacing = 50; //Đặt biến và để spacing bằng số cụ thể luôn
let size = 0;

function setup() {
    createCanvas(400, 400);
}

    function draw () {
        background(0);

        //Vertically vẽ 10 hình tròn và mỗi hình cách nhau 20 đơn vị (tính từ tâm)
        // for(let i = 0; i< 10; i=i+1) {
            // circle(200, 100 + i*20, 50); //Nhân 20 thì 20 ở đây là spacing giữa các tâm của hình tròn
            
            // circle(200, 100 + i*spacing, 50); //Thay vì nhân 20 thì nhân cho biến spacing -> tạo khoảng cách cho các hình tròn
        
        //Tạo hình tròn full kín screen, tạo thành pattern

        for (let j=0; j<10; j=j+1) { //Cái này là loop lớn, theo hướng vertical
            for (let i=0; i<10; i=i+1) {//Loop để hình tròn lặp lại theo hướng horizontal
                let distance = dist(mouseX, mouseY, i*spacing, j*spacing); //Khoảng cách từ mouseX, mouseY đến hình tròn
                size = random(map(distance, 0, 300, 50, 0)); //Map distance, chuột càng gần thì hình tròn càng lớn, càng xa thì hình tròn càng nhỏ
                stroke(255);
                strokeWeight(1);
                noFill();
                circle(i*spacing, j*spacing, size); 
            }
        }
    }