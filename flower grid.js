function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(250);
    translate(200, 200);
    for(let i=0; i<360; i=i+30) {
        rotate(30);
        ellipse(0, 0, 20, 70);
    }
}
