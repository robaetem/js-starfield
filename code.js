//                             STARFIELD !!
let stars = [];
let numberStars = 1600;
let speed = 30;

function setup() {
    createCanvas(700, 700);
    for (let i = 0; i < numberStars; i++) {
        stars.push(new Star());
    }
}

function draw() {
    background(0, 0, 0);
    for (let i = 0; i < numberStars; i++) {
        stars[i].update();
        stars[i].draw();
    }
}

class Star {
    constructor() {
        this.x = map(Math.random(), 0, 1, -width/2, width/2);
        this.y = map(Math.random(), 0, 1, -width/2, width/2);
        this.z = 700;
    }
    update() {
        if (Math.abs(this.x) >= width/2 || Math.abs(this.y) >= width/2) {
            this.x = map(Math.random(), 0, 1, -width/2, width/2);
            this.y = map(Math.random(), 0, 1, -width/2, width/2);
            this.z = 700;
        } else {
            this.x += this.x/500;
            this.y += this.y/500;
            this.z--;
        }
    }
    draw() {
        ellipse(this.x + 350, this.y + 350, map(this.z, 700, 0, 0, 5));
    }
}