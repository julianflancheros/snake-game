// constantes de escenario del juego 
const WITDH_CANVAS = 750;
const HEIGHT_CANVAS = 500;

// variables de la serpiente
let gap = 25;
let xSerpiente = WITDH_CANVAS/2;
let ySerpiente = HEIGHT_CANVAS/2;
let dir ={
    x: 0,
    y: 0
}
let eat = new Audio('./sounds/eat.mp3');

 // Funcion para dibujar el tamaño del canvas
function setup() {
    createCanvas(WITDH_CANVAS, HEIGHT_CANVAS)
    textSize(15);
    textStyle(BOLD);
    foodLocation();
    frameRate(15);
}

function foodLocation() {
  let x = floor(random(25, width) / gap) * gap;
  let y = floor(random(25, height) / gap) * gap;
  food = createVector(x, y);
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
    strokeWeight(4);
    stroke(43, 51, 25);
    rect(0, gap, width, height-gap);
    // noStroke();
    rect(food.x, food.y, gap, gap);
    if (food.x == xSerpiente && food.y == ySerpiente){
        foodLocation();
        eat.play();
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