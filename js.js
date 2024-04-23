let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 500

let movespeed = 1
let xspeed = 2
let yspeed = -0

let xpos = 100
let ypos = 200

let circlesize = 20




function canvasedgecheck(){

    if (xpos < 21){

        xpos -= xspeed
    
    }
    if (xpos > (canvas.width - circlesize)){

        xpos -= xspeed

    }

    if (ypos < 21){

        ypos -= yspeed
    
    }
    if (ypos > (canvas.height - circlesize)){

        ypos -= yspeed
      

    }
}



document.onkeydown = function (event){

let key = event.key
    switch (key) { 
        case "a":
            xspeed = -5
            break
        case "d":
            xspeed = 5
            break
        case " ":
            if (yspeed < 0) {
                yspeed = 5
                break
            }
            else {
                yspeed = -5
                break
            }
        default:
            alert("Bara tangenterna 'a' 'd' 'mellanslag' kan användas.")
}

document.onkeyup = function (event) {
    const key = event.key
    switch (key){
        case "a":
            xspeed = 0
            break
        case "d":
            xspeed = 0
            break
    }
}
} 

//Innehåller Farligt
let a = 20
    
let b = 40

function makeobsticle(a,b){



    context.fillStyle = "black"

    context.beginPath();
    context.moveTo(a,a);
    context.lineTo(b,a);
    context.lineTo(b,b);
    context.lineTo(a,b);
    context.lineTo(a,a);
    context.fill()
    context.stroke();


}







//Slut på farligt




function rendercircle(){

    context.clearRect(0, 0, canvas.width, canvas.height)

    xpos += xspeed
    ypos += yspeed

    context.fillStyle = "red"

    context.beginPath();
    context.arc(xpos, ypos, circlesize, 0, 2 * Math.PI);
    context.fill()
    context.stroke();
    
   makeobsticle(a,b)

   if((xpos + 20 - b) < (b-a) && xpos > a){
        alert("ohno")

    }
   else{}


    canvasedgecheck()
    
    window.requestAnimationFrame(rendercircle)
   
    
}
window.requestAnimationFrame(rendercircle)





if((xpos+20)<b && xpos > a){



}