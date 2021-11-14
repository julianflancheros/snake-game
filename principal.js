// constantes de escenario del juego 
const WITDH_CANVAS = 750;
const HEIGHT_CANVAS = 500;

// variables de la serpiente
let food;
let gap = 25;
// let xSerpiente = WITDH_CANVAS/2;
// let ySerpiente = HEIGHT_CANVAS/2;

let score = 0;
let eat = new Audio('./assets/sounds/eat.mp3');
let game_over = new Audio('./assets/sounds/game_over.mp3');
let img;

function preload() {
    img = loadImage('./assets/images/intro.png');
}

var tiempoEspera = 150000; 
let fullLoad = true;
 // Funcion para dibujar el tamaño del canvas
function setup() {
    createCanvas(WITDH_CANVAS, HEIGHT_CANVAS)
    textSize(25);
    textStyle(BOLD);
    food = new Food();
    snake = new Snake();
    frameRate(10);
}


// Ciclo que se repite 
function draw() {
    background('#9ac102');
    if (fullLoad){
        image(img, 0, 0, width, height);
        for (let i=0; i<tiempoEspera;i++){
            if (i == tiempoEspera-1){
                fullLoad = false;
                console.log('Llege al fin')
            }
        }
    }
    
    noFill();
    noStroke();
    for (let i = 0; i < height; i += gap) {
        for (let j = 0; j < width; j += gap) {
            rect(j, i, gap, gap);
        }
    }
    noFill();
    // strokeWeight(4);
    stroke(43, 51, 25);
    line(0, 40, width, 40);
    rect(0, 2*gap, width, height-gap);
    // noStroke();
    if (snake.collision(food)){
        eat.play();
        food.eat();
        score += 7;
    }

    food.show();
    snake.show();
    snake.move();
    sides();

    // show score points in the display
    fill(43, 51, 25);
    if (int(score)<10){
        text("000" + int(score), 5, gap);
    }
    else if (int(score)>10 && int(score)<1000){
        text("00" + int(score),  5, gap);
    }
    else{
        text(int(score),  5, gap);
    }

}

function sides(){
    // Entrada en los bordes en el eje x
    if (snake.x >= WITDH_CANVAS){
        snake.x = 0;
    }
    else if(snake.x < 0){
        snake.x = WITDH_CANVAS;
    }      
    // Entrada en los bordes en el eje y
    if (snake.y >= HEIGHT_CANVAS){
        snake.y = 50;
    }
    else if(snake.y < 50){
        snake.y = HEIGHT_CANVAS;
    }
}

function keyPressed() {
    if (keyCode == UP_ARROW && snake.dir != 'down'){
        snake.dir = 'up';
    }
    else if (keyCode == DOWN_ARROW && snake.dir != 'up'){
        snake.dir = 'down';
    }
    else if (keyCode == LEFT_ARROW && snake.dir != 'right'){
        snake.dir = 'left';
    }
    else if (keyCode == RIGHT_ARROW && snake.dir != 'left'){
        snake.dir = 'right';
    }else if (keyCode == ESCAPE){
        alert("PAUSE");
    }
}