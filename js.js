let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 700
canvas.height = 400

let movespeed = 10
let xspeed = 5
let yspeed = 2

let xpos = 100
let ypos = 100

let circlesize = 20

//while (canvas.width === 800) {

   // window.requestAnimationFrame(rendercircle)
   // window.requestAnimationFrame(renderspikes)

//}

window.requestAnimationFrame(rendercircle)
function rendercircle(){

    context.clearRect(0,0, screen.width, screen.height)

    context.fillStyle = "red"

    context.beginPath();
    context.arc(xpos, ypos, circlesize, 0, 2 * Math.PI);
    context.stroke();
    
   

}
