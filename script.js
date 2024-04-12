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

        deltaX = deltaY < 0 ? 1 : -1;

        positionX_page1 += 200 * deltaX;
        positionX_page2 += 200 * deltaX;
        positionX_page3 += 200 * deltaX;
        positionX_page4 += 200 * deltaX;
        positionX_page5 += 200 * deltaX;
        positionX_page6 += 200 * deltaX;
        positionX_page7 += 200 * deltaX;
        positionX_page8 += 200 * deltaX;


        const containerWidth = document.querySelector('.container').offsetWidth;
       
        const maxLeftPosition = containerWidth -  rectanglePage1.offsetWidth;

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

            positionX_page1 = maxLeftPosition;
            positionX_page2 = positionX_page1 + rectanglePage2.offsetWidth;
            positionX_page3 = positionX_page2 + rectanglePage3.offsetWidth;
            positionX_page4 = positionX_page3 + rectanglePage4.offsetWidth;
            positionX_page5 = positionX_page4 + rectanglePage5.offsetWidth;
            positionX_page6 = positionX_page5 + rectanglePage6.offsetWidth;
            positionX_page7 = positionX_page6 + rectanglePage7.offsetWidth;
            positionX_page8 = positionX_page7 + rectanglePage8.offsetWidth;
        }

        if (positionX_page1 === 0 && deltaX > 0) {
            return;
        }

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
            let pageSuivante;
            if (index + 1 < btnSuivants.length) {
                pageSuivante = index + 1; 
            } else {
                pageSuivante = 0;             }

            const nextPage = document.querySelector(`.page${pageSuivante + 1}`);             
           
            if (nextPage) {
                nextPage.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        });
    });
    
    btnPrecedents.forEach((button, index) => {
        button.addEventListener('click', function () {
            let pagePrecedente;
            if (index - 1 >= 0) {
                pagePrecedente = index - 1;
            } else {
                pagePrecedente = btnPrecedents.length - 1; 
            }
            const prevPage = document.querySelector(`.page${pagePrecedente + 1}`);             
           
            if (prevPage) {
                prevPage.scrollIntoView({ behavior: 'smooth', inline: 'start' });
            }
        });
    });
    
    });
    
// document.addEventListener('DOMContentLoaded', function() {
//     const element = document.getElementById('rectanglePage2');
//     let accumulatedScroll = 0; // Accumulation du défilement de la molette
//     let startPos = -300; // Position de départ fictive pour l'agrandissement
//     let endPos = 8000; // Valeur arbitraire pour la position de fin
//     let minWidth = 200; // Largeur minimale
//     let maxWidth = 800; // Largeur maximale

//     // Fonction pour mettre à jour la largeur
//     function updateWidth(scrollDelta) {
//         accumulatedScroll += scrollDelta;

//         // Limiter l'accumulation pour qu'elle reste entre startPos et endPos
//         if (accumulatedScroll < startPos) {
//             accumulatedScroll = startPos;
//         } else if (accumulatedScroll > endPos) {
//             accumulatedScroll = endPos;
//         }

//         // Calculer la nouvelle largeur basée sur l'accumulation
//         let newWidth = minWidth + ((accumulatedScroll - startPos) / (endPos - startPos)) * (maxWidth - minWidth);
//         element.style.width = `${newWidth}px`;
//     }

//     document.addEventListener('wheel', function(e) {
//         // Utiliser deltaY pour le défilement vertical, ajuster le multiplicateur au besoin pour le rendre plus sensible
//         updateWidth(e.deltaY * 10);
//     });
//});


  