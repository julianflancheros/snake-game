class Snake {
    // Creation the constructor class
    constructor() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.dir = "up";
        this.tails = [];
    }

    move() {
        if (this.dir == "left"){
            this.x -= gap;
        }
        else if( this.dir == "right"){
            this.x += gap;
        }
        else if( this.dir == "up"){
            this.y -= gap;
        }
        else if( this.dir == "down"){
            this.y += gap;
        }        
    }

    collision(obj) {
        if (this.x == obj.x && this.y == obj.y) {
            return true;
        }
    }

    restart() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.dir = 'up';
        this.score = 0;
        this.tails = [];

        for (let i = 0; i < 2; i++) {
            snake.tails.push(new Tail(snake.x, snake.y + (15 * i)));
        }

    }

    tail_collide() {
        for (let i = 0; i < this.tails.length; i++) {
            if (this.x == this.tails[i].x && this.y == this.tails[i].y) {
                return true;
            }
        }
    }

    sides(){
        // Entrada en los bordes en el eje x
        if (this.x >= width){
            this.x = 0;
        }
        else if(this.x < 0){
            this.x = 750;
        }      
        // Entrada en los bordes en el eje y
        if (this.y >= height){
            this.y = gap*2;
        }
        else if(this.y < gap*2){
            this.y = 500;
        }
    }

    show() {
        fill(23, 31, 10);
        rect(this.x, this.y, gap, gap, 4);
    }

}