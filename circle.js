
export class theCircle {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.Acc = 0;
        this.lessAcc = 4;
    }
    drawCircle(x, y, radius) {
        setInterval(() => {
            this.Acc += this.lessAcc;
            if (this.Acc > 0) {
                this.lessAcc += 0.1;
            }
            this.context.clearRect(
                x - radius - 1, 
                y - radius- 1, 
                radius * 2 + 2, 
                radius * 2 + 2)
            y += this.Acc;
            if (y > 600 - radius) {
                y = 600 - radius;
                this.Acc = - this.Acc;
            }
            this.context.beginPath();
            this.context.arc(x, y, radius, 0, 2 * Math.PI)
            this.context.stroke();    
        }, 200);
    }
}