// constantes de escenario del juego 
const COLUMNS = 60;
const ROWS = 30;
const SIDE = 20;
const WITDH_CANVAS = COLUMNS * SIDE;
const HEIGHT_CANVAS = ROWS * SIDE;

// variables de la serpiente
xSerpiente = SIDE;
ySerpiente = SIDE;
let dir ={
    x: 0,
    y: 0
}

 // Funcion para dibujar el tamaño del canvas
function setup() {
    createCanvas(WITDH_CANVAS, HEIGHT_CANVAS)
}

// Ciclo que se repite 
function draw() {
    background(170, 204, 102);
    drawSnake();
}

function update(){  
    xSerpiente += dir.x;
    ySerpiente += dir.y;
}


function drawSnake(){
    rect(xSerpiente,ySerpiente,SIDE, SIDE);
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
        ySerpiente = 0;
    }
    else if(ySerpiente < 0){
        ySerpiente = HEIGHT_CANVAS;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW){
        ySerpiente -=10;
        dir ={
            x:0,
            y:-1,
        }
    }
    else if (keyCode == DOWN_ARROW){
        ySerpiente +=10;
        dir ={
            x:0,
            y:1,
        }
    }
    else if (keyCode == LEFT_ARROW){
        xSerpiente -=10;
        dir ={
            x:-1,
            y:0,
        }
    }
    else if (keyCode == RIGHT_ARROW){
        xSerpiente +=10;
        dir ={
            x:1,
            y:0,
        }
    }
    if (keyCode == ESCAPE){
        alert("PAUSE");
    }
}