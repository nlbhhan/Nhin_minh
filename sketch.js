let animals = ["llama", "capybara", "deer"];
let index = 0;

function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);

    text(animals[index % animals.length], 200, 200); //Số dư của index lên số lượng, ví dụ index=2 chia length=3 thì index sẽ bằng số dư của phép chia này
    //Dùng cho các hàm lặp đi lặp lại
}

//Viết code để mỗi lần click chuột thì nó sẽ nhảy ra con animal tiếp theo
function mouseClicked() {
    index = index+1;
    // if(index > animals.length-1) { //Nếu index lớn hơn độ dài của Array thì index trở ngược lại về 0
    //     //length phải trừ 1 tại cách đếm của 2 bên, index đếm từ 0 còn length đếm từ 1
    //     index = 0;
    }
