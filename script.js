
import { theCanvas } from './canvas.js'
import { theCircle } from './circle.js'

let c = new theCanvas();
let circle1 = new theCircle();
let circle2 = new theCircle();
let circle3 = new theCircle();

circle3.drawCircle(100, 200, 25)
circle2.drawCircle(250, 150, 50)
circle1.drawCircle(450, 290, 100)
