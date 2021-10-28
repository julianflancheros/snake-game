class Food{
    // Creation the constructor class food
    constructor(){
        this.x = floor(random(25, width) / gap) * gap;
        this.y = floor(random(25, height) / gap) * gap;
    }

    // Creation method eat
    eat() {
        // put random coordinate points then multiply by unit size of grid
        this.x = floor(random(25, width) / gap) * gap;
        this.y = floor(random(25, height) / gap) * gap;
        if (this.x == xSerpiente || this.y == ySerpiente) {
            this.eat();
        }
    }

    show() {
        fill(28,28,28);
        rect(this.x, this.y, gap, gap, 8);
    }

}