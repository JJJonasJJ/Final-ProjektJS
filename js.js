let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 700
canvas.height = 400

let movespeed = 1
let xspeed = 2
let yspeed = -0

let xpos = 100
let ypos = 200

let circlesize = 20


function canvasedgecheck(){

    if (xpos < 21 || xpos > (canvas.width - circlesize)){

        xspeed = -xspeed

    }
    if (ypos < 21 || ypos > (canvas.height - circlesize)){

        yspeed = -yspeed

    }

}

document.onkeydown = function (event){

let key = e.key
    switch (key) { 
        case ("a" || "A"):
            xspeed -= movespeed
            break
        case ("d" || "D"):
            xspeed += movespeed
            break
        case " ":
            if (yspeed < 0) {
                yspeed += 2*movespeed
                break
            }
            else{
                yspeed -= 2*movespeed
                break
            }
        default:
            alert("Bara tangenterna 'a' 'd' 'mellanslag' kan användas.")
}

document.onkeyup = function (event) {
    const key = event.key
    switch (key){
        case "a" || "A":
            xspeed = 0
            break
        case "d" || "D":
            xspeed = 0
    }
}
} 


function rendercircle(){

    context.clearRect(0, 0, canvas.width, canvas.height)

    xpos += xspeed
    ypos += yspeed

    context.fillStyle = "red"

    context.beginPath();
    context.arc(xpos, ypos, circlesize, 0, 2 * Math.PI);
    context.stroke();
    

    canvasedgecheck()
    window.requestAnimationFrame(rendercircle)
}
window.requestAnimationFrame(rendercircle)