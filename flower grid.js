let spacing = 10;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(250);
    translate(200, 200);
    for(let j=-5; j<20; j=j+5) {
        for(let i=0; i<360; i=i+30) {
            rotate(30);
            ellipse(0, 50, 20, 70);
        }
        circle(j*spacing, 0, 40);
    }
    
}
