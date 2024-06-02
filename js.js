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


let coordarray = [] // Här kommer alla koordinater som spelet använder ligga

function makecoordlist(cordaray){  //funktion som skapar slumpvisa tal som används som koordinater

    let tempS = 0
    let tempL = 0

    for (let i = 0; i < 8; i++) { 

        tempS = rng(0,400)
        tempL = tempS + rng(10,150) //gör så att det större talet faktiskt är större

        cordaray.push(tempS)
        cordaray.push(tempL) //Kolla README.txt
    }

}

//Kollar om spelet ska ta slut.

function checkifgameend(midx, midy, array){ 

    for(let i = 0; i < array.length; i += 2){ //se funktion makesquare för info om hur loopen fungerar

        let smal = array[i]
        let larg = array[(i+1)]
        
        if(midx > (((smal+larg)/2) - ((larg-smal)/2)) && midx < (((smal+larg)/2) + ((larg-smal)/2))){ 
            //Kollar om cirkeln är inom en kvadrat, är den det så tar spelet slut. Nu med kortare rader!
            if((midy > ((((smal+larg)/2) - (larg-smal)/2)) && midy < ((((smal+larg)/2) + (larg-smal)/2)))){

                alert("Du var för nära en kvadrat och därmed förlorade du! Ladda om sidan och tryck sedan på ok (i den ordningen) för att försöka igen. (En ny 'arena' kommer att skapas).")
                    
                xspeed = 0
                yspeed = 0
                
                intentionallycrashprogram()
                        //orsakar fel som krashar programmet eftersom funktionen inte är definerad
                        //Detta var den bästa lösningen som jag fann
                        //som gjorde att alerten inte hindrade användaren från att ladda om sidan
                        //"If it looks stupid but works, it aint' stupid", och användaren kommer inte att veta
                
            }

        }
        
        else{}

    }
}

function makesquare(koord){
                                //Jag vet att jag skulle göra om så att makewinarea och 
                                //makeobsticle var samma funktion. det är dock så att
    context.fillStyle = "green" //Make win area har fyra olika värden (0, 50, 650, 700)
    context.beginPath();        //Så att en kvadrat kan göras utanför den diagonala linjen
    context.moveTo(650,50);     //som de andra kvadraterna finns på. (de har bara två värden)
    context.lineTo(650,0);      //Så jag kan tyvärr inte se ett sätt att "slå samman" de 
    context.lineTo(700,0);      //till en och samma funktion
    context.lineTo(700,50);
    context.lineTo(650,50);     //också denna kod här ovanför loopen gör en grön kvadrat som visar vinstområdet
    context.fill()
    context.stroke();

    for(let i = 0; i < koord.length; i += 2){ //Går igenom arrayen och tar de två indexen som sitter brevid varandra
                                              // (0+i och 1+i) och använder värderna som koordinater, och ritar
                                              //ut en rektangel baserat på det
        let s = koord[i]
        let l = koord[(i+1)]  

        context.fillStyle = "black" 
        context.beginPath();
        context.moveTo(s,s);
        context.lineTo(l,s);
        context.lineTo(l,l);
        context.lineTo(s,l);
        context.lineTo(s,s);
        context.fill()
        context.stroke();
    }
}


makecoordlist(coordarray) //gör arrayen med koordinater som spelaren ska använda

//Funktion som rederar canvas och skapar sakerna man ser, och dessutom kollar om man förlorat eller inte (och till och med kanske vunnit!)
function rendergame(){

    //Tar bort allt från canvas, så att gamla bilder inte syns längre
    context.clearRect(0, 0, canvas.width, canvas.height)

    //Uppdaterar cirkelns koordinater
    xpos += xspeed
    ypos += yspeed
    midxpos = xpos - circleradius

    //Renderar cirkeln, inte så jättemycket kod som bara används här så jag gör inte om deta till en seperat funktion
    context.fillStyle = "red"
    context.beginPath();
    context.arc(xpos, ypos, circleradius, 0, 2 * Math.PI);
    context.fill()
    context.stroke();
    

    makesquare(coordarray) 
    //skapar kvadraterna spelaren  ska undvika samt vinstområdet

    checkifgameend(midxpos, ypos, coordarray) 
    //kollar om cirkeln är innuti en kvadrat, och slutar spelet om det är så





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