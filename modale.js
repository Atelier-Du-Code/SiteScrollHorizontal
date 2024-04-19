// Récupérer la modale et le bouton pour l'ouvrir
var modal = document.getElementById("myModal");
var openModalButton = document.getElementById("openModalButton");

// Récupérer le bouton pour fermer la modale
var closeButton = document.getElementsByClassName("close")[0];

// Lorsque l'utilisateur clique sur le bouton pour ouvrir la modale, l'afficher
openModalButton.onclick = function() {
  modal.style.display = "block";
}

// Lorsque l'utilisateur clique sur le bouton pour fermer la modale, la masquer
closeButton.onclick = function() {
  modal.style.display = "none";
}

// Lorsque l'utilisateur clique en dehors de la modale, la masquer
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
