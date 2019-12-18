function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function exercice1() {
    var bonneRep = getRandomInt(100);
    var notWin = true;
    var res = prompt('Saisissez un chiffre entre 1 et 100');
    var max = 100;
    var min = 1;
    var nbTry = 0;
    while (notWin && nbTry < 4) {
        if (bonneRep === res) {
            notWin = false;
        } else if (bonneRep < res) {
            res = prompt('C\'est moins, vous cherchez un nombre entre ' + min + ' et ' + max);
        } else if (bonneRep > res) {
            res = prompt('C\'est plus, vous cherchez un nombre entre ' + min + ' et ' + max);
        }
        nbTry = nbTry + 1;
    }

    if (!notWin) {
        alert("Vous avez gagné !! ");
    } else {
        alert("Vous avez perdu !! ");
    }
}

var france = ['Paris', 'Lyon', 'Grenoble', 'Marseille'];
var espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
var usa = ['Los Angeles', 'Las Vegas', 'Seattle', 'Washington'];
var angleterre = ['Londres', 'Manchester', 'Liverpool', 'Southampton'];

function demarrerexercice2() {
    document.location = 'exercice2.html';
}


function exercice2() {
    var ville = document.getElementById("ville").value;
    if (france.indexOf(ville) !== -1) {
        alert("Bienvenue en France !")
    } else if (espagne.indexOf(ville) !== -1) {
        alert("Bienvenue en Espagne !");
    } else if (usa.indexOf(ville) !== -1) {
        alert("Bienvenue aux Etats-Unis !");
    } else if (angleterre.indexOf(ville) !== -1) {
        alert("Bienvenue en Angleterre");
    } else {
        alert("Je n'ai pas reconnu la ville, veuillez réessayer svp");
    }
    document.location = 'exercice2.html';
}