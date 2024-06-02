OK. SÅ. När jag hade tänkt implementera en klass på fredagen för att gör typ all kod som det var tänkt
från början (göra koordinater, rita ut de på kanvas och kolla om spelet ska sluta)
så insåg jag att det inte riktigt skulle fungera eftersom det är inte det som klasser är till för.
(de är till för att skapa objekt)
Därför hade jag tänkt istället för att ha en klass som enbart skulle göra koordinater och
använda det som en array med många object av samma parametrar och sedan avläsa det i 
de andra funktionerna med kod som liknar den jag använde i webbutveckling (en bit av det nedan)
    
boker.forEach((bok) => {
    const tr = document.createElement("tr");
    if(bok.footcheck === false){
        tr.innerHTML += `<td>${bok.namn}</td>`
        tr.innerHTML += `<td>${bok.forfattare}</td>`
        tr.innerHTML += `<td>${bok.utgivningsar}</td>`
        tr.innerHTML += `<td>${bok.genre}</td>`
        tr.innerHTML += `<td>${bok.utlanad}</td>`
        bookTable.appendChild(tr);
    }

där boker var en array med object t.ex

const boker = [{

    objektparameter: nej,
}
{

objectparameter: ja,

}

]

det är inte exakt likt, men det skulle säkert gå för att kunna ha object som har
parameterna, eftersom att ha en array med en specifik regel som måste skrivas
vid varje gång den ska användas inte är så bra kodande. (i += 2)
istället skulle det finnas många objekt där man enkelt kan se vad som de olika kvadraterna ska ha
och dessa object är då enkelt synliga och har sina parametrar. 

och detta hade jag tänkt att göra  på söndag. dålig strategering att göra det sista dagen innan,
men det skulle ha fungerat fint att göra det på kvällen.

MEN SEN tyckte min mamma att det var en strålande idé att välja denna kväll att boka en semester,
vilket tog nästan två timmar. SÅ jag hann bara med att skriva kommentarer och koda, det gör inte 
hjärnan bra klockan 23:50, om man inte vill sitta uppe två timmar extra. Trist.
Jag vet att jag igen säger att "jag hann inte med" men det felet ligger på mig med min planering
som krävde att inget oväntat alls skulle ske. Som jag gjorde vid den "riktiga" inlämningen skriver
jag här därför vad jag tänkt göra med lite tekniska detaljer, som jag just som då hoppas
vara värt lite åtminstonde. 
Vet att tiden är ute, men tack för att jag fick tillfället att komplettera, 
även om jag inte gjorde allt som det var tänkt. Det blev åtminstonde bättre med circleradius,
samt looparna jag använde istället för den enorma listan copy+paste kod det tidigare var,
och dessutom så fungerar collision lite bättre på vissa sätt nu än för (men på vissa sätt sämre)

/Jonas Friberg TE22A 00:25 den 3:e Juni