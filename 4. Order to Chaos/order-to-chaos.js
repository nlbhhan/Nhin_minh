let spacing = 25;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(240);
    for(let j=0; j<height/spacing; j=j+1) {
        for(let i=0; i<width/spacing; i=i+1) {
            square(0 + i*spacing, 0 + j*spacing, 50);
        }
    }
    
}