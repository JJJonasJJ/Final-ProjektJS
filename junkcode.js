// Här finns kod som jag försökte få fungera, men inte lyckades med.
// Kommer också ha lite förklaringar till vad kodens mening var
// Detta kanske hjälper betyget eller inte, värt ett försök iallafall ¯\_(ツ)_/¯ 

// Detta var kod som fanns på rad 90 (fast nu med tillagda kodkommentarer så är det en annan plats den var på, så öh ja), tanken var att minska mängden kod som fanns för att förenkla läsandet.
// Den gjorde dock ingenting när jag försökte använda den, och det var här jag hade tänkt använda en klass, men det gick inte.
// Kan fråga mer om denna om du vill
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



    small = this.coordsrandomizer()
    big = this.coordsrandomizer()

    doobst(){

    context.fillStyle = "black"
    context.beginPath();
    context.moveTo(small, small);
    context.lineTo(big, small);
    context.lineTo(big, big);
    context.lineTo(small, big);
    context.lineTo(small, small);
    context.fill()
    context.stroke();

    }

}