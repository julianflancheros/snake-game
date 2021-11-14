class Snake {
    // Creation the constructor class
    constructor() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.dir = "up"
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


    show() {
        fill(23, 31, 10);
        rect(this.x, this.y, gap, gap, 4);
    }

}