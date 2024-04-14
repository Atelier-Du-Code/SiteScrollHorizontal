const rectanglePage1 = document.getElementById('page1');
const rectanglePage2 = document.getElementById('page2');
const rectanglePage3 = document.getElementById('page3');
const rectanglePage4 = document.getElementById('page4');
const rectanglePage5 = document.getElementById('page5');
const rectanglePage6 = document.getElementById('page6');
const rectanglePage7 = document.getElementById('page7');
const rectanglePage8 = document.getElementById('page8');

let deltaY;
let positionX_page1 = rectanglePage1.offsetLeft;
let positionX_page2 = rectanglePage2.offsetLeft;
let positionX_page3 = rectanglePage3.offsetLeft;
let positionX_page4 = rectanglePage4.offsetLeft;
let positionX_page5 = rectanglePage5.offsetLeft;
let positionX_page6 = rectanglePage6.offsetLeft;
let positionX_page7 = rectanglePage7.offsetLeft;
let positionX_page8 = rectanglePage8.offsetLeft;

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('wheel', function(event) {
        deltaY = event.deltaY;
        deltaX = event.deltaX;

        // Vérifier si le mouvement est horizontal
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            return; // Ignorer les mouvements horizontaux
        }

        sensMouvement = deltaY < 0 ? 1 : -1;

        positionX_page1 += 200 * sensMouvement;
        positionX_page2 += 200 * sensMouvement;
        positionX_page3 += 200 * sensMouvement;
        positionX_page4 += 200 * sensMouvement;
        positionX_page5 += 200 * sensMouvement;
        positionX_page6 += 200 * sensMouvement;
        positionX_page7 += 200 * sensMouvement;
        positionX_page8 += 200 * sensMouvement;


        const containerWidth = document.querySelector('.container').offsetWidth;
       
        const maxLeftPosition = containerWidth -  rectanglePage8.offsetWidth;
        const maxRightPosition = rectanglePage1.offsetWidth - containerWidth;

        //const maxLeftPosition = -16000;
        //console.log("Position max left ", maxLeftPosition);
        console.log("maxRightPosition", maxRightPosition);
        console.log("PositionX_Page1", positionX_page1);

        if (positionX_page1 > 0) {

            positionX_page1 = 0;
            positionX_page2 = positionX_page1 + rectanglePage2.offsetWidth;
            positionX_page3 = positionX_page2 + rectanglePage3.offsetWidth;
            positionX_page4 = positionX_page3 + rectanglePage4.offsetWidth;
            positionX_page5 = positionX_page4 + rectanglePage5.offsetWidth;
            positionX_page6 = positionX_page5 + rectanglePage6.offsetWidth;
            positionX_page7 = positionX_page6 + rectanglePage7.offsetWidth;
            positionX_page8 = positionX_page7 + rectanglePage8.offsetWidth;

        } else if (positionX_page1 > maxLeftPosition) {

            positionX_page1 = 0;            
            positionX_page2 = positionX_page1 + rectanglePage2.offsetWidth;
            positionX_page3 = positionX_page2 + rectanglePage3.offsetWidth;
            positionX_page4 = positionX_page3 + rectanglePage4.offsetWidth;
            positionX_page5 = positionX_page4 + rectanglePage5.offsetWidth;
            positionX_page6 = positionX_page5 + rectanglePage6.offsetWidth;
            positionX_page7 = positionX_page6 + rectanglePage7.offsetWidth;
            positionX_page8 = positionX_page7 + rectanglePage8.offsetWidth;
        } 
        
         // Le sens du mouvement est vers le haut/avancée de la page 
        if (positionX_page1 < maxRightPosition && sensMouvement < 0) {

            positionX_page1 = maxRightPosition;            
            positionX_page2 = positionX_page1 + rectanglePage2.offsetWidth;
            positionX_page3 = positionX_page2 + rectanglePage3.offsetWidth;
            positionX_page4 = positionX_page3 + rectanglePage4.offsetWidth;
            positionX_page5 = positionX_page4 + rectanglePage5.offsetWidth;
            positionX_page6 = positionX_page5 + rectanglePage6.offsetWidth;
            positionX_page7 = positionX_page6 + rectanglePage7.offsetWidth;
            positionX_page8 = positionX_page7 + rectanglePage8.offsetWidth;
        }

       // le sens du mouvement est vers le bas/recule de la page 
        //if (positionX_page1 === 200 && sensMouvement < 0) {
            //return;
        //}

        rectanglePage1.style.left = positionX_page1 + 'px';
        rectanglePage2.style.left = positionX_page2 + 'px';
        rectanglePage3.style.left = positionX_page3 + 'px';
        rectanglePage4.style.left = positionX_page4 + 'px';
        rectanglePage5.style.left = positionX_page5 + 'px';
        rectanglePage6.style.left = positionX_page6 + 'px';
        rectanglePage7.style.left = positionX_page7 + 'px';
        rectanglePage8.style.left = positionX_page8 + 'px';
    });  

    const btnSuivants = document.querySelectorAll('.pageSuivante');
    const btnPrecedents = document.querySelectorAll('.pagePrecedente');
    btnSuivants.forEach((button, index) => {
        button.addEventListener('click', function () {

            let pageSuivante = (index + 1) % btnSuivants.length; 
    
            const nextPage = document.querySelector(`.page${pageSuivante + 1}`);             
           
            if (nextPage) {
                nextPage.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        });
    });
    
    
    btnPrecedents.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Calculer l'index de la page précédente 
            let pagePrecedente = index - 1;
            if (pagePrecedente < 0) {
                pagePrecedente = btnPrecedents.length - 1;
            }
            
            // Récupérer l'ID de la page précédente
            const prevPageId = this.getAttribute('data-target');
    
            // Trouver la page précédente 
            const prevPage = document.getElementById(prevPageId);
    
            if (prevPage) {
                prevPage.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        });
    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /// Effet 1
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function updateBars() {
    const cellulesValue = document.querySelectorAll('.celluleValue');
    const data = [];

    cellulesValue.forEach((cellule) => {
        let valeur = parseFloat(cellule.textContent.trim());
        valeur = Math.min(valeur, 100); // Assurez-vous que la valeur ne dépasse pas 100
        data.push(valeur);
    });

    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.height = `${data[index]}%`;
    });
}

updateBars();

document.querySelectorAll('.celluleValue').forEach((cellule) => {
    cellule.addEventListener('input', updateBars);
});

function bounceBar(bar) {
    let originalHeight = parseFloat(bar.style.height);
    let bounceHeight = originalHeight * 1.05;

    bar.style.transition = 'height 0.3s ease';
    bar.style.height = `${bounceHeight}%`;

    // Retour à la hauteur originale après un court délai
    setTimeout(() => {
        bar.style.transition = 'height 0.3s ease-out';
        bar.style.height = `${originalHeight}%`;
    }, 200);
}

document.querySelectorAll('.bar').forEach((bar, index) => {
    bar.addEventListener('click', () => {
        if (index < document.querySelectorAll('.celluleValue').length) {
            const cellule = document.querySelectorAll('.celluleValue')[index];
            let valeurActuelle = parseFloat(cellule.textContent.trim());
            valeurActuelle = Math.min(valeurActuelle + 10, 100); 
            cellule.textContent = valeurActuelle;
            updateBars();
            bounceBar(bar);
            
            bar.classList.add('gradientAnimation');
        }
    });
});

        

    

      
});