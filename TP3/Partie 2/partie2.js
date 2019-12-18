var france = ['Paris', 'Lyon', 'Grenoble', 'Marseille'];
var espagne = ['Madrid', 'Barcelone', 'Valence', 'Seville'];
var usa = ['Los Angeles', 'Las Vegas', 'Seattle', 'Washington'];
var angleterre = ['Londres', 'Manchester', 'Liverpool', 'Southampton'];
window.addEventListener("load", distribuerAction);
function distribuerAction() {
    document.getElementById('bt1').addEventListener("click", exercice2);
}
function exercice2() {
    var ville = prompt('Choisir le nom d\'une ville');
    if (france.indexOf(ville) !== -1) {
        document.getElementById('bienvenue').innerHTML = "Bienvenue en France !";
        france.forEach((item, index2) => {
            if (ville !== item) {
                var node = document.createElement("LI");                 // Create a <li> node
                var textnode = document.createTextNode(item);         // Create a text node
                node.appendChild(textnode);
                document.getElementById("listeville").appendChild(node);
            }
        });
    } else if (espagne.indexOf(ville) !== -1) {
        document.getElementById('bienvenue').innerHTML = "Bienvenue en Espagne !";
        espagne.forEach((item, index2) => {
            if (ville !== item) {
                var node = document.createElement("LI");                 // Create a <li> node
                var textnode = document.createTextNode(item);         // Create a text node
                node.appendChild(textnode);
                document.getElementById("listeville").appendChild(node);
            }
        });
    } else if (usa.indexOf(ville) !== -1) {
        document.getElementById('bienvenue').innerHTML = "Bienvenue aux Etats-Unis !";
        usa.forEach((item, index2) => {
            if (ville !== item) {
                var node = document.createElement("LI");                 // Create a <li> node
                var textnode = document.createTextNode(item);         // Create a text node
                node.appendChild(textnode);
                document.getElementById("listeville").appendChild(node);
            }
        });
    } else if (angleterre.indexOf(ville) !== -1) {
        document.getElementById('bienvenue').innerHTML = "Bienvenue en Angleterre !";
        angleterre.forEach((item, index2) => {
            if (ville !== item) {
                var node = document.createElement("LI");                 // Create a <li> node
                var textnode = document.createTextNode(item);         // Create a text node
                node.appendChild(textnode);
                document.getElementById("listeville").appendChild(node);
            }
        });
    } else {
        alert("Je n'ai pas reconnu la ville, veuillez réessayer svp");
    }

    document.getElementById('bt1').innerHTML = 'Ajouter une destination';
    document.getElementById('bt1').removeEventListener("click", exercice2);
    document.getElementById('bt1').addEventListener("click", exercice2Add);
}

function exercice2Add() {
    var ville = prompt('Choisir le nom d\'une ville a ajouter');
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(ville);         // Create a text node
    node.appendChild(textnode);
    document.getElementById("listeville").appendChild(node);
}