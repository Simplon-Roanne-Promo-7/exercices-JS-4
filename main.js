// Déclaration d'un tableau de couleurs
let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// Sélection de tous les éléments avec la classe 'square'
let squares = document.querySelectorAll('.square');

// Pour chaque élément square dans la liste
squares.forEach(function (square) {

    // Ajouter un écouteur d'événement pour le clic sur l'élément square
    square.addEventListener('click', function () {

        // Vérifier la couleur de fond de l'élément square
        if (square.style.backgroundColor == colors[0]) {
            // Si la couleur de fond est la première couleur du tableau, changer la couleur à la deuxième couleur
            square.style.backgroundColor = colors[1];
        }
        else if (square.style.backgroundColor == colors[1]) {
            // Si la couleur de fond est la deuxième couleur du tableau, changer la couleur à la troisième couleur
            square.style.backgroundColor = colors[2];
        }
        else if (square.style.backgroundColor == colors[2]) {
            // Si la couleur de fond est la troisième couleur du tableau, changer la couleur à la quatrième couleur
            square.style.backgroundColor = colors[3];
        }
        else if (square.style.backgroundColor == colors[3]) {
            // Si la couleur de fond est la quatrième couleur du tableau, changer la couleur à la cinquième couleur
            square.style.backgroundColor = colors[4];
        }
        else if (square.style.backgroundColor == colors[4]) {
            // Si la couleur de fond est la cinquième couleur du tableau, changer la couleur à la première couleur
            square.style.backgroundColor = colors[0];
        }
        else {
            // Si la couleur de fond est différente de toutes les couleurs du tableau, changer la couleur à la première couleur
            square.style.backgroundColor = colors[0];
        }

    })
});

// Sélection de l'élément avec la classe 'modal'
let modal = document.querySelector('.modal');

// Fonction pour afficher la fenêtre modale
function showModal() {
    modal.style.display = 'block';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

// Fonction pour masquer la fenêtre modale
function hideModal() {
    modal.style.display = 'none';
    document.body.style.backgroundColor = 'white';
}

// Ajouter un écouteur d'événement pour le clic sur le corps de la page
document.body.addEventListener('click', function (event) {
    console.log(event.target);
    // Si l'élément cliqué a la classe 'modal', masquer la fenêtre modale
    if (event.target.classList.contains('modal')) {
        hideModal();
    }
});

// Sélection de l'élément avec la classe 'hidden'
let pHidden = document.querySelector('.hidden');

// Tableau pour stocker les touches du clavier pressées
let keyPressed = [];

// Ajouter un écouteur d'événement pour la pression d'une touche du clavier
document.body.addEventListener('keydown', function (event) {

    // Vérifier la touche du clavier pressée
    if (event.key == 'a' || event.key == 'b' || event.key == 'c') {
        // Si la touche pressée est 'a', 'b' ou 'c', ajouter la touche au tableau keyPressed
        keyPressed.push(event.key);
    } else {
        // Si la touche pressée n'est pas 'a', 'b' ou 'c', réinitialiser le tableau keyPressed et masquer l'élément pHidden
        keyPressed = [];
        pHidden.classList.add('hidden');
        pHidden.style.color = 'black';

    }

    // Vérifier si les touches 'a' et 'b' ont été pressées
    if (keyPressed.includes('a') && keyPressed.includes('b')) {
        // Si les touches 'a' et 'b' ont été pressées, afficher l'élément pHidden
        pHidden.classList.remove('hidden');
    }

    // Vérifier si les touches 'a', 'b' et 'c' ont été pressées
    if (keyPressed.includes('a') && keyPressed.includes('b') && keyPressed.includes('c')) {
        // Si les touches 'a', 'b' et 'c' ont été pressées, changer la couleur de texte de l'élément pHidden en rouge
        pHidden.style.color = 'red';
    }
    console.log(keyPressed);

});

let boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
    box.addEventListener('mousedown', function () {
        box.classList.toggle('extend-witdh');
    })
    box.addEventListener('mouseup', function () {
        box.classList.toggle('extend-witdh');
    })
});

