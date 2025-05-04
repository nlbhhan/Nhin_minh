let spacing = 25;


function setup() {
    createCanvas(400, 400);
    // rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background(240);
    let angle = 0;
    for(let j=0; j<height; j=j+20) {
        for(let i=0; i<width; i=i+20) {
            angle = angle+0.1; //Mỗi lần lặp lại thì angle sẽ công thêm 0.1

            push();
            translate(j, i); //Tại mỗi toạ độ (j,i) thì vẽ một hình vuông ngay tâm
            rotate(angle); //Mỗi lần lặp lại thì hình vuông sẽ rotate 1 góc = angle 
            square(0, 0, 50);
            pop();
        }
        }
}