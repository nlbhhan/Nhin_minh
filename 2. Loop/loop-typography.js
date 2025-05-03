let font;
let pointsLanguished = []; 
let widthLang=0;

//DIS
let pointsDis = [];
let floatDisX=0;
let floatDisY=0;
let widthDis;
let heightDis;
//INTE
let pointsInt = [];
let floatIntX=0;
let floatIntY=0;
let widthInt;
let heightInt;
//GRA
let pointsGra = [];
let floatGraX = 0;
let floatGraY = 0;
let widthGra;
let heightGra;
//TED
let pointsTed = [];
let floatTedX = 0;
let floatTedY = 0;
let widthTed;
let heightTed;

function preload() {
    font = loadFont("assets/fonts/Unbounded-Bold.ttf");
 }

function setup() {
    createCanvas(500, 500);
    // pointsLanguished = font.textToPoints("languished", -170, 0, 60, { //trong ngoặc lần lượt là ("text", x, y, size chữ)
    //     sampleFactor: 0.7,
    //     simplifyThreshold: 0.0001
    // });

    //DIS
    pointsDis = font.textToPoints("DIS", -200, -50, 120, {
        sampleFactor: 0.7,
        simplyfyThreshold: 0
    });
    //INTE
    pointsInt = font.textToPoints("INTE", -200, 50, 120, {
        sampleFactor: 0.7,
        simplifyThreshold: 0
    });
    //GRA
    pointsGra = font.textToPoints("GRA", -200, 150, 120, {
        sampleFactor: 0.7,
        simplifyThreshold: 0
    });
    //TED
    pointsTed = font.textToPoints("TED", -200, 250, 120, {
        sampleFactor: 0.7,
        simplifyThreshold: 0
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


    //Dis, giây càng tăng thì cục pixels càng fade dần
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
    
    //Inte giây càng tăng thì cục pixels fade dần
    push();
    translate(200, 200);
    for (let k=0; k<pointsInt.length; k=k+1) {

        //Hiệu ứng lơ lửng cho hình chữ nhật
        floatIntX = map(noise(k * 0.5, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục X
        floatIntY = map(noise(k * 0.5 + 100, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục Y
        
        //Map size của hcm theo second(), giây càng tăng thì size càng bé
        widthInt = map(second(), 0, 60, 30, 10);
        heightInt = map(second(), 0, 60, 10, 0);
        
        // noFill();
        // strokeWeight(1);
        noStroke();
        fill(255, 178, 44);
        rect(pointsInt[k].x + floatIntX, pointsInt[k].y + floatIntY, widthInt, heightInt);
    }
    pop();


    //Gra
    push();
    translate(200, 200);
    for (let l=0; l<pointsGra.length; l=l+1) {

        //Hiệu ứng lơ lửng cho hình chữ nhật
        floatGraX = map(noise(l * 0.5, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục X
        floatGraY = map(noise(l * 0.5 + 100, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục Y
        
        //Map size của hcm theo second(), giây càng tăng thì size càng bé
        widthGra = map(second(), 0, 60, 30, 10);
        heightGra = map(second(), 0, 60, 10, 0);
        
        // noFill();
        // strokeWeight(1);
        noStroke();
        fill(255, 178, 44);
        rect(pointsGra[l].x + floatGraX, pointsGra[l].y + floatGraY, widthGra, heightGra);
    }
    pop();

    //Ted
    push();
    translate(200, 200);
    for (let m=0; m<pointsTed.length; m=m+1) {

        //Hiệu ứng lơ lửng cho hình chữ nhật
        floatTedX = map(noise(m * 0.5, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục X
        floatTedY = map(noise(m * 0.5 + 100, frameCount * 0.05), 0, 1, -2, 2); //Lơ lửng theo trục Y
        
        //Map size của hcm theo second(), giây càng tăng thì size càng bé
        widthTed = map(second(), 0, 60, 30, 10);
        heightTed = map(second(), 0, 60, 10, 0);
        
        // noFill();
        // strokeWeight(1);
        noStroke();
        fill(255, 178, 44);
        rect(pointsTed[m].x + floatTedX, pointsTed[m].y + floatTedY, widthTed, heightTed);
    }
    pop();

}