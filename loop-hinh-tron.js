let spacing = 20; //Đặt biến và để spacing bằng 20 luôn

function setup() {
    createCanvas(400, 400);
}

    function draw () {
        background(0);

        //Vertically vẽ 10 hình tròn và mỗi hình cách nhau 20 đơn vị (tính từ tâm)
        for(let i = 0; i< 10; i=i+1) {
            // circle(200, 100 + i*20, 50); //Nhân 20 thì 20 ở đây là spacing giữa các tâm của hình tròn
            circle(200, 100 + i*spacing, 50);
        }
    }