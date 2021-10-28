// constantes de escenario del juego 
const WITDH_CANVAS = 750;
const HEIGHT_CANVAS = 500;

// variables de la serpiente
let food
let gap = 25;
let xSerpiente = WITDH_CANVAS/2;
let ySerpiente = HEIGHT_CANVAS/2;
let dir ={
    x: 0,
    y: 0
}
let score = 0;
let eat = new Audio('./assets/sounds/eat.mp3');
let game_over = new Audio('./assets/sounds/game_over.mp3');

 // Funcion para dibujar el tamaño del canvas
function setup() {
    createCanvas(WITDH_CANVAS, HEIGHT_CANVAS)
    textSize(15);
    textStyle(BOLD);
    food = new Food();
    frameRate(15);
}


// Ciclo que se repite 
function draw() {
    background(170, 204, 102);
    
    noFill();
    noStroke();
    for (let i = 0; i < height; i += gap) {
        for (let j = 0; j < width; j += gap) {
            rect(j, i, gap, gap);
        }
    }
    drawSnake();
    line(0, 20, width, 20);
    noFill();
    // strokeWeight(4);
    stroke(43, 51, 25);
    rect(0, gap, width, height-gap);
    // noStroke();
    if (food.x == xSerpiente && food.y == ySerpiente){
        eat.play();
        food.eat();
        score += 7;
    }
    food.show();

    // show score points in the display
    fill(43, 51, 25);
    if (int(score)<10){
        text("000" + int(score), 5, 15);
    }
    else if (int(score)>10 && int(score)<1000){
        text("00" + int(score),  5, 15);
    }
    else{
        text(int(score),  5, 15);
    }
}

function update(){  
    xSerpiente += dir.x;
    ySerpiente += dir.y;
}

function drawSnake(){
    fill("white");
    rect(xSerpiente, ySerpiente, gap, gap);
    update();
    sides();
}

function sides(){
    // Entrada en los bordes en el eje x
    if (xSerpiente >= WITDH_CANVAS){
        xSerpiente = 0;
    }
    else if(xSerpiente < 0){
        xSerpiente = WITDH_CANVAS;
    }      
    // Entrada en los bordes en el eje y
    if (ySerpiente >= HEIGHT_CANVAS){
        ySerpiente = gap;
    }
    else if(ySerpiente < gap){
        ySerpiente = HEIGHT_CANVAS;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW){
        ySerpiente -=gap;
        dir ={
            x:0,
            y:-gap,
        }
    }
    else if (keyCode == DOWN_ARROW){
        ySerpiente +=gap;
        dir ={
            x:0,
            y:gap,
        }
    }
    else if (keyCode == LEFT_ARROW){
        xSerpiente -=gap;
        dir ={
            x:-gap,
            y:0,
        }
    }
    else if (keyCode == RIGHT_ARROW){
        xSerpiente +=gap;
        dir ={
            x:gap,
            y:0,
        }
    }
    if (keyCode == ESCAPE){
        alert("PAUSE");
    }
}