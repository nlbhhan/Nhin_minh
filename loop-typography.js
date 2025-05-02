let font;
let pointsLanguished = []; 
let widthLang=0;

let pointsDis = [];
let floatDisX=0;
let floatDisY=0;
let widthDis;
let heightDis;

function preload() {
    font = loadFont("assets/1-Font/Unbounded-Bold.ttf");
 }

function setup() {
    createCanvas(500, 500);
    pointsLanguished = font.textToPoints("languished", -170, 0, 60, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
        sampleFactor: 0.7,
        simplifyThreshold: 0.0001
    });

    pointsDis = font.textToPoints("DIS", -230, -50, 200, {
        sampleFactor: 0.7,
        simplyfyThreshold: 0
    });
}

function draw() {
    background(254, 243, 226);
    //points là 1 array tập hợp của các điểm tạo nên chữ "languished"

    //Languished, giây càng tăng thì chữ languished càng hiện ra nhưng ít nét hơn
    push();
    translate(200, 200);
    for (let i=0; i<pointsLanguished.length; i = i+2) {
    
        //Effect cho chữ, giây càng tăng thì hình chữ nhật càng co lại
        widthLang = map(second(), 0, 60, 20, 0);

        strokeWeight(1);
        stroke(243, 198, 35);
        // noStroke();
        noFill();
        rect(pointsLanguished[i].x, pointsLanguished[i].y, widthLang, 10); //Để gọi toạ độ x, y ra thì array[].x và array[].y
    }
    pop();

    //Dis, giây càng tăng thì cục pixels càng phân tán -> map vị trí x, y theo second
    push();
    translate(200, 200);
    for (let j=0; j<pointsDis.length; j=j+1) {

        //Hiệu ứng lơ lửng cho hình chữ nhật
        floatDisX = map(noise(j * 0.5, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục X
        floatDisY = map(noise(j * 0.5 + 100, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục Y
        
        //Map size của hcm theo second(), giây càng tăng thì size càng bé
        widthDis = map(second(), 0, 60, 30, 10);
        heightDis = map(second(), 0, 60, 10, 0);
        
        // noFill();
        // strokeWeight(1);
        noStroke();
        fill(255, 178, 44);
        rect(pointsDis[j].x + floatDisX, pointsDis[j].y + floatDisY, widthDis, heightDis);
    }
    pop();
    
}