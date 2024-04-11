const rectangleRouge = document.getElementById('rectangleRouge');
const rectangleBleu = document.getElementById('rectangleBleu');

let scrollX = window.scrollX;
let deltaY;

//Rectangle rouge
let positionX_rouge = rectangleRouge.offsetLeft;
let deltaX_rouge;

//Rectangle bleu
let positionX_bleu = rectangleBleu.offsetLeft;
let deltaX_bleu;


window.addEventListener('wheel', function(event) {
 
    deltaY = event.deltaY;
    deltaX_rouge = event.deltaX;

  

    if(deltaY > 0)
    {
        deltaX_rouge = -1;
    }
    else
    {
        deltaX_rouge = 1;
    }
       
    console.log("on entre dans la fonction");
    console.log("delatX : ", deltaX_rouge);
    
    // Ajoutez ou soustrayez 40 pixels à la position horizontale du carré rouge en fonction de la direction de la roulette de la souris
    if (deltaX_rouge > 0) {

        // Faites avancer la roulette de la souris, déplacez le carré vers la droite
        console.log("la molette avance");
        console.log("deltaX_rouge : ", deltaX_rouge); 

        positionX_rouge += 30;
        positionX_bleu += 30;
        console.log("positionX : ", positionX_rouge);

    } else if (deltaX_rouge < 0) {
        // Faites reculer la roulette de la souris, déplacez le carré vers la gauche
        console.log("la molette recule");
        console.log("deltaX_rouge : ", deltaX_rouge);
        positionX_rouge -= 30;
        positionX_bleu -= 30;
    }

    rectangleRouge.style.left = positionX_rouge  + 'px';
    rectangleBleu.style.left = positionX_bleu + 'px';
});