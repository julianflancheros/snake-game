// constantes de escenario del juego 
const WITDH_CANVAS = 750;
const HEIGHT_CANVAS = 500;


// variables de la serpiente
let food;
let gap = 25;
let score = 0;
let snake;
let preLoc = {};
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
    food = new Food();
    snake = new Snake();
    textSize(25);
    textStyle(BOLD);
    frameRate(10);
    for (let i = 0; i < 2; i++) {
        snake.tails.push(new Tail(snake.x, snake.y + (gap * i)));
    }
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

    line(0, 40, width, 40);
    //Grid, only for reference, not required for game to work. Comment noStroke(); to display
    noFill();
    noStroke();
    for (let i = 0; i < height; i += gap) {
        for (let j = 0; j < width; j += gap) {
            rect(j, i, gap, gap);
        }
    }

    // function to add elemets in the tail of snake
    for (let i = snake.tails.length - 1; i >= 0; i--) {
        if (i == 0) {
            snake.tails[i].x = snake.x;
            snake.tails[i].y = snake.y;
        } else {
            snake.tails[i].x = snake.tails[i - 1].x;
            snake.tails[i].y = snake.tails[i - 1].y;
        }
        snake.tails[i].show();
    }

    preLoc.x = snake.x;
    preLoc.y = snake.y;
    snake.move();
    snake.sides();

    if (snake.collision(food)){
        eat.play();
        food.eat();
        score += 7;
        snake.tails.push(new Tail(preLoc.x, preLoc.y));
    }

    if (snake.tail_collide() == true) {
        game_over.play();
        snake.restart();
        food.eat();
        score = 0;
    }

    food.show();

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

    snake.show();
    noFill();
    strokeWeight(4);
    stroke(43, 51, 25);
    rect(0, 2*gap, width, height-gap);
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