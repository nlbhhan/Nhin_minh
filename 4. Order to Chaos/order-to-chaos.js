let spacing = 25;
let alphaSquare = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    let angle = 0;
    for(let j=0; j<windowHeight; j=j+20) {
        for(let i=0; i<windowWidth; i=i+20) {
            angle = angle+0.1; //Mỗi lần lặp lại thì angle sẽ công thêm 0.1

            push();
            let distanceSquare = dist(mouseX, mouseY, j, i);
            alphaSquare = map(distanceSquare, 0 , 100, 255, 0);
            translate(j, i); //Tại mỗi toạ độ (j,i) thì vẽ một hình vuông ngay tâm
            rotate(angle); //Mỗi lần lặp lại thì hình vuông sẽ rotate 1 góc = angle 
            // fill(255, alphaSquare);
            noFill();
            stroke(255, alphaSquare);
            strokeWeight(1);
            square(0, 0, 50);
            pop();
        }
        }
}