$(document).ready(distribuerAction);

var france = ['Paris', 'Lyon', 'Grenoble', 'Marseille'];
var espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
var usa = ['Los Angeles', 'Las Vegas', 'Seattle', 'Washington'];
var angleterre = ['Londres', 'Manchester', 'Liverpool', 'Southampton'];



function distribuerAction() {
    $('#bt1').click(exercice2);
}
function exercice2() {
    var ville = prompt('Choisir le nom d\'une ville');
    if (france.indexOf(ville) !== -1) {
        $('#bienvenue').text("Bienvenue en France !");
        france.forEach((item, index2) => {
            if (ville !== item) {
                var nouveauLi = $('<li>'+item+'</li>');
                $('#listeville').append(nouveauLi);
            }
        });
    } else if (espagne.indexOf(ville) !== -1) {
        $('#bienvenue').text("Bienvenue en Espagne !");
        espagne.forEach((item, index2) => {
            if (ville !== item) {
                var nouveauLi = $('<li>'+item+'</li>');
                $('#listeville').append(nouveauLi);
            }
        });
    } else if (usa.indexOf(ville) !== -1) {
        $('#bienvenue').text("Bienvenue aux Etats-Unis !");
        usa.forEach((item, index2) => {
            if (ville !== item) {
                var nouveauLi = $('<li>'+item+'</li>');
                $('#listeville').append(nouveauLi);
            }
        });
    } else if (angleterre.indexOf(ville) !== -1) {
        $('#bienvenue').text("Bienvenue en Angleterre !");
        angleterre.forEach((item, index2) => {
            if (ville !== item) {
                var nouveauLi = $('<li>'+item+'</li>');
                $('#listeville').append(nouveauLi);
            }
        });
    } else {
        alert("Je n'ai pas reconnu la ville, veuillez réessayer svp");
    }

    $('#bt1').text('Ajouter une destination');
    $('#bt1').off("click", exercice2);
    $('#bt1').click(exercice2Add);
}

function exercice2Add() {
    var ville = prompt('Choisir le nom d\'une ville a ajouter');
    var nouveauLi = $('<li>'+ville+'</li>');
    $('#listeville').append(nouveauLi);
}