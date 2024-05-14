let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 1000
canvas.height = 500



let movespeed = 1
let xspeed = 2
let yspeed = -0

let xpos = 100
let ypos = 200


let circleradius = 20

//Kalkylerar xmedelpositionen av cirkeln.
//P.g.a cirkelgeneratorkoden så är ypos automatiskt ymedelpositionen av cirkeln, och behöver därmed ej defineras
let midxpos = xpos - circleradius

function canvasedgecheck(){

    if (xpos < 21){

        xpos -= xspeed
    
    }
    if (xpos > (canvas.width - circleradius)){

        xpos -= xspeed

    }

    if (ypos < 21){

        ypos -= yspeed
    
    }
    if (ypos > (canvas.height - circleradius)){

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
let a = 200
let b = 240
let c = 300
let d = 340

class obsticle {
    constructor(sizesmall, sizebig){
        this.sizes = sizesmall
        this.sizeb = sizebig
    }
    
    
    coordsrandomizer() {
        let min = Math.ceil(this.sizes);
        let max = Math.floor(this.sizeb);
        return Math.floor(Math.random() * (max - min + 1) + min); 
    }

    doobst(){

    context.fillStyle = "black"
    context.beginPath();
    context.moveTo(this.sizes, this.sizes);
    context.lineTo(this.sizeb, this.sizes);
    context.lineTo(this.sizeb, this.sizeb);
    context.lineTo(this.sizes, this.sizeb);
    context.lineTo(this.sizes, this.sizes);
    context.fill()
    context.stroke();

    }

}



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
    midxpos = xpos + circleradius

    context.fillStyle = "red"

    context.beginPath();
    context.arc(xpos, ypos, circleradius, 0, 2 * Math.PI);
    context.fill()
    context.stroke();
    
   makeobsticle(a,b)
   t = new obsticle(c,b)
   
   if((midxpos > (((a+b)/2) - (((b-a)/2)*0.7)) && midxpos < (((a+b)/2) + (((b-a)/2)*2.6))) && (ypos > ((((a+b)/2) - ((b-a)/2))*0.94) && ypos < ((((a+b)/2) + ((b-a)/2))*1.06))){
    
        alert("ohno")

    }

   else{}


   


    canvasedgecheck()
    
    window.requestAnimationFrame(rendercircle)
   
    
}
window.requestAnimationFrame(rendercircle)





