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


    
   /* Gestion de la modale */
   
   function showModal(message) {   
    console.log("La modale est lancée");
    const modal = document.getElementById('modal');    
    const modalContent = modal.querySelector('.modal-content');
    modal.style.display = 'block';

    // Modification du texte du paragraphe à l'intérieur de la modale
    modalContent.querySelector('p').textContent = message;
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fonction pour mettre à jour les barres en fonction des valeurs des cellules
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

// Initialisation des barres au chargement de la page
updateBars();

// Ajout d'un écouteur d'événement sur chaque cellule pour mettre à jour les barres lorsque les valeurs des cellules sont modifiées
document.querySelectorAll('.celluleValue').forEach((cellule) => {
    cellule.addEventListener('input', updateBars);
});

// Initialisation du compteur de clics
let compteurClics = 0;

// Fonction pour vérifier si toutes les valeurs des cellules sont à 100%
function checkAllValues100(cellules) {
    // Convertir la NodeList en un tableau
    const cellulesArray = Array.from(cellules);
    
    // Vérifier si chaque cellule a une valeur égale à 100
    const allValuesAre100 = cellulesArray.every(cellule => {
        const celluleValue = parseFloat(cellule.textContent.trim());
        
        // Retourner false dès qu'une cellule a une valeur différente de 100
        return celluleValue === 100;
    });
    
    // Renvoyer true si toutes les valeurs sont égales à 100, sinon false
    return allValuesAre100;
}

// Fonction pour mettre à jour le compteur de clics et afficher le total
function updateClicsCounter() {
    compteurClics++;
    document.querySelector('.clicsAffichage').textContent = `${compteurClics}`;
}

// Fonction pour exécuter les actions lorsque toutes les barres sont à 100%
function executeActionsWhenAllBarsAre100Percent(cellules) {
    // Vérifier si toutes les valeurs sont à 100%
    if (checkAllValues100(cellules)) {
        // Afficher un message en fonction du nombre de clics

        if (compteurClics > 4) {
            showModal("Compteur - Bravo, toutes les barres sont à 100% ! Refais le en maximum 4 clics maintenant !");
        } else {
            showModal("Compteur - Bravo, toutes les barres sont à 100% moins de 5 clics ! Filouterie réussie !");
        }

        const btnOK = document.getElementById('btnOK');

        // Ajout d'un écouteur d'événements click sur le bouton "OK"
        btnOK.addEventListener('click', () => {
            closeModal();
            console.log("Le bouton 'OK' a été cliqué !");
            // Vous pouvez ajouter ici le code pour fermer la modale ou exécuter d'autres actions
        });

        // Réinitialiser le compteur de clics
        document.querySelector('.clicsAffichage').textContent = `0`;
        compteurClics = 0;

        // Réinitialiser toutes les cellules à 0
        cellules.forEach(cellule => {
            cellule.textContent = '10';
        });

        // Mettre à jour et animer toutes les barres
        updateBars();

        // Fermer la modale
        //closeModal();
    }
}

// Ajouter un gestionnaire d'événements pour les clics sur les barres
document.querySelectorAll('.bar').forEach((bar, index) => {
    bar.addEventListener('click', () => {

        console.log('On a cliqué sur une barre');
        const incrementValue = parseFloat(bar.getAttribute('data-increment')); // récupérer la valeur d'incrément
        const cellules = document.querySelectorAll('.celluleValue');

        // Incrémenter les valeurs des cellules
        const cellule = cellules[index];
        let valeurActuelle = parseFloat(cellule.textContent.trim());
        valeurActuelle = Math.min(valeurActuelle + incrementValue, 100);
        cellule.textContent = valeurActuelle;

        // Incrémenter le compteur de clics
        updateClicsCounter();

        // Incrémenter les autres barres de moitié de la valeur d'incrément
        cellules.forEach((otherCellule, otherIndex) => {
            if (otherIndex !== index) {
                let otherValue = parseFloat(otherCellule.textContent.trim());
                otherValue = Math.min(otherValue + incrementValue / 2, 100);
                otherCellule.textContent = otherValue;
            }
        });

        // Mettre à jour et animer toutes les barres
        updateBars();

        // Exécuter les actions lorsque toutes les barres sont à 100%
        executeActionsWhenAllBarsAre100Percent(cellules);
    });
});

// Ajouter un écouteur d'événement pour comptabiliser les clics sur les cellulesValue
document.querySelectorAll('.celluleValue').forEach(cellule => {
    cellule.addEventListener('click', updateClicsCounter);
});

// Sélection de tous les éléments avec la classe 'celluleValue'
const cellulesValue = document.querySelectorAll('.celluleValue');

// Ajout d'un écouteur d'événements sur chaque élément '.celluleValue'
cellulesValue.forEach(cellule => {
    cellule.addEventListener('input', () => {
        console.log('Une cellule est modifiée');
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.addEventListener('transitionend', () =>{
                executeActionsWhenAllBarsAre100Percent(cellulesValue);
            })
        });        
    });
});


    

      
});