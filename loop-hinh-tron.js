function setup() {
    createCanvas(400, 400);
}

    function draw () {
        background(0);

        for(let i = 0; i< 20; i=i+2) {
            circle(200, 100 + i*20, 50);
        }
    }