let canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = 700
canvas.height = 500


let movespeed = 1
let xspeed = 0
let yspeed = -0

let xpos = 50
let ypos = 450


let circleradius = 20

//Kalkylerar xmedelpositionen av cirkeln.
//P.g.a cirkelgeneratorkoden så är ypos automatiskt ymedelpositionen av cirkeln, och behöver därmed ej defineras
let midxpos = xpos - circleradius


// Kollar om cirkeln håller på att lämna canvas, och sätter cikeln tillbaka på kanvas om den var på väg att göra det.
function canvasedgecheck(){

    if (xpos < (circleradius + 1)){ //circleradius är storlek av cirkel, och + 1 är en extra pixel för att förbättra detektionen

        xpos -= xspeed
    
    }
    if (xpos > (canvas.width - circleradius)){

        xpos -= xspeed

    }

    if (ypos < (circleradius + 1)){ //läs kommentar på rad 25

        ypos -= yspeed
    
    }
    if (ypos > (canvas.height - circleradius)){

        ypos -= yspeed
      
    }
}


//Om en tangent trycks ner, så kommer hastigheten att ändras om det är en korrekt tangent
//Är det en inkorrekt tangent så kommer ett meddelande som säger vilka de korrekta tangenterna är
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
            alert("Bara tangenterna 'a' 'd' 'mellanslag' kan användas. Se till så att du inte har på Caps Lock!")
}



//När a eller d slutas hållas in så kommer cirkeln att sluta röra sig i den riktningen.
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

//Funktion som skapar ett slumpvist tal mellan två tal (som sedan används för koordinater)
//Som också inkluderar talen som anges, alltså är det mer som <= än <
function rng(low,high){

    let min = Math.ceil(low);
    let max = Math.floor(high);
    return Math.floor(Math.random()*(max - min + 1) + min); 

}


// Skapar koordinater för att skapa rektanglar och collision detection
// De två översta har olika namn för de användes tidigare i utvecklingen.
let a = rng(180,220)
let b = rng(220,260)

let r2s = rng(100, 140)
let r2b = rng(140, 160)

let r3s = rng(800, 900)
let r3b = rng(900, 1000)

let r4s = rng(0, 80)
let r4b = rng(80, 160)

let r5s = rng(500, 600)
let r5b = rng(600, 700)

let r6s = rng(400, 500)
let r6b = rng(500, 550)

let r7s = rng(300, 450)
let r7b = rng(450, 460)

let r8s = rng(200, 250)
let r8b = rng(254, 340)

let r9s = rng(111, 222)
let r9b = rng(333, 444)
// Jag är fullt medveten om hur horribelt detta är men jag fick lite slut på tid
// Och jag tänkte på "Never spend 5 minutes doing anything manually when you can spend 8 hours failing to automate it"



//Skapar de olika rektanglarna man ska undvika
function makeobsticle(l,k){



    context.fillStyle = "black"

    context.beginPath();
    context.moveTo(l,l);
    context.lineTo(k,l);
    context.lineTo(k,k);
    context.lineTo(l,k);
    context.lineTo(l,l);
    context.fill()
    context.stroke();


}



//Kollar om spelet ska ta slut.

function checkgameend(midx, midy, smal, larg){


    // Ja den här linjen är väldigt lång, men det leder till bättre "collision detection"
    if((midx > (((smal+larg)/2) - (((larg-smal)/2)*0.7)) && midx < (((smal+larg)/2) + (((larg-smal)/2)*2.6))) && (midy > ((((smal+larg)/2) - ((larg-smal)/2))*0.94) && midy < ((((smal+larg)/2) + ((larg-smal)/2))*1.06))){ 
    
        alert("Du var för nära en kvadrat och därmed förlorade du! Ladda om sidan och tryck sedan på ok (i den ordningen) för att försöka igen. (En ny 'arena' kommer att skapas).")
        xspeed = 0
        yspeed = 0
    }


    else{}
}

// Gör en grön rektangel som använder koordinater för vinstområdet, alltså rör man vid den gröna rektangeln, vinner man.
function makewinarea(){



    context.fillStyle = "green"

    context.beginPath();
    context.moveTo(650,50);
    context.lineTo(650,0);
    context.lineTo(700,0);
    context.lineTo(700,50);
    context.lineTo(650,50);
    context.fill()
    context.stroke();


}

//Funktion som rederar canvas och skapar sakerna man ser, och dessutom kollar om man förlorat eller inte (och till och med kanske vunnit!)

function rendergame(){

    //Tar bort allt från canvas, så att gamla bilder inte syns längre
    context.clearRect(0, 0, canvas.width, canvas.height)

    //Uppdaterar cirkelns koordinater
    xpos += xspeed
    ypos += yspeed
    midxpos = xpos + circleradius

    //Renderar cirkeln
    context.fillStyle = "red"
    context.beginPath();
    context.arc(xpos, ypos, circleradius, 0, 2 * Math.PI);
    context.fill()
    context.stroke();
    


   //Skapar rektanglarna som man ska undvika. Fult gjort, men jag fick lite slut på tid.
   makeobsticle(a, b)
   makeobsticle(r2s, r2b)
   makeobsticle(r3s, r3b)
   makeobsticle(r4s, r4b)
   makeobsticle(r5s, r5b)
   makeobsticle(r6s, r6b)
   makeobsticle(r7s, r7b)
   makeobsticle(r8s, r8b)
   makeobsticle(r9s, r9b)

   //Kollar om cirkel är innuti en rektangel. Det är buggit och kollen går inte alltid så bra och dessutom lite fult gjort.
   //Men igen, slut på tid 
   checkgameend(midxpos, ypos, a, b)
   checkgameend(midxpos, ypos, r2s, r2b)
   checkgameend(midxpos, ypos, r3s, r3b)
   checkgameend(midxpos, ypos, r4s, r4b)
   checkgameend(midxpos, ypos, r5s, r5b)
   checkgameend(midxpos, ypos, r6s, r6b)
   checkgameend(midxpos, ypos, r7s, r7b)
   checkgameend(midxpos, ypos, r8s, r8b)
   checkgameend(midxpos, ypos, r9s, r9b)

   makewinarea()


   //Kollar cirkeln är inom vinstkoordinaterna, är det det så vinner man.
   if(midxpos > 650 && ypos < 50){
    
    alert("Du vann! Ladda om sidan och tryck sedan på OK för att spela igen.")
    
    window.location.reload;

   }

   

    //Kollar om cirkeln är på väg att lämna canvas, och sätter då cirkeln på en ny position som är i kanvas
    canvasedgecheck()
    
    window.requestAnimationFrame(rendergame)
   
    
}
window.requestAnimationFrame(rendergame)