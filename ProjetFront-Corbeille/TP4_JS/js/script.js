var joueurs = {
    "joueur1" : {
        "image" : '/sites/mi2_progFO/aggoune_yanice/TP3_projet/medias/images/brice_maubleu.jpg',
        "nom" : "Brice Maubleu",
        "poste" : "Gardien",
        "description" : "29 ans - 192cm - 83kg - Français - 7 matchs"
    },
    "joueur2" : {
        "image" : '/sites/mi2_progFO/aggoune_yanice/TP3_projet/medias/images/papa_demba_camara.jpg',
        "nom" : "Papa Demba Camara",
        "poste" : "Gardien",
        "description" : "26 ans - 195cm - 70kg - Senegalais - 1 match"
    },
    "joueur3" : {
        "image" : '/sites/mi2_progFO/aggoune_yanice/TP3_projet/medias/images/esteban_salles.jpg',
        "nom" : "Esteban Salles",
        "poste" : "Gardien",
        "description" : "25 ans - 187cm - 78kg - Français - 0 match"
    },
    "joueur4" : {
        "image" : '/sites/mi2_progFO/aggoune_yanice/TP3_projet/medias/images/eric_vandenabeele.jpg',
        "nom" : "Eric Vandenabeele",
        "poste" : "Defenseur",
        "description" : "27 ans - 184cm - 77kg - Français - 8 matchs"
    }
};

var messages = {
    "message1" : {
        "user" : "Socota45",
        "message" : "Ce site est vraiment incroyable, il est si utile et tellement bien codé. Bsahtek khey",
        "date" : "23.11.2019 - 21h20",
        "isNew" : 0
    },
    "message2" : {
        "user" : "Moyemba74",
        "message" : "Comment critiquer ce site qui est tout simplement le plus beau de tous les temps",
        "date" : "23.11.2019 - 20h12",
        "isNew" : 0
    },
    "message3" : {
        "user" : "Gerange17",
        "message" : "Franchement, incroyable ! J'ai jamais vu si bien construit comme site",
        "date" : "23.11.2019 - 18h17",
        "isNew" : 0
    }
};
var nbMessages = 3;
var nbJoueurs = 4;
var nouveauMessage;
var userPresent = false;
var menu = {
    "item1" : {
        "libelle" : 'Menu',
        "url" : 'menu.html',
        "fils" : ["Connexion", "Recherche", "Billetterie", "Promotions"]
    },
    "item2" : {
        "libelle" : 'Actualites',
        "url" : "actualites.html",
        "fils" : ["Equipe", "Calendrier", "Billetterie"]
    },
    "item3" : {
        "libelle" : 'Joueurs',
        "url" : 'joueurs.html',
        "fils" : []
    },
    "item4" : {
        "libelle" : 'Interviews Audio',
        "url" : 'interviews_audio.html',
        "fils" : []
    },
    "item5" : {
        "libelle" : 'Interviews Vidéo',
        "url" : 'interviews_video.html',
        "fils" : []
    },
    "item6" : {
        "libelle" : 'Contact',
        "url" : 'contact.html',
        "fils" : []
    },
    "item7" : {
        "libelle" : "Forum",
        "url" : 'forum.html',
        "fils" : []
    }
};
$(document).ready(distribuerAction);

function distribuerAction() {
    $('#viderMessage').click(viderMessages);
    afficherJoueurs();
    afficherMenu();
    afficherMessage();
    $("#form_ajout_joueur").submit(ajouterJoueur);
    $("#form_message").submit(ajouterMessage);
    affecterClick();
}

function affecterClick() {
    $('button[id^="bt_supprimer_"]').click(supprimerJoueur);
    $('button[id^="bt_modifier_"]').click(modifierJoueur);
}

function afficherJoueurs() {
    for (i in joueurs) {
        var nouveauTr = $('<tr id="ligne_'+i+'"></tr>');
        $('#tableau_joueurs').append(nouveauTr);
        var tdImg = $('<td><img height="70" width="50" alt="'+joueurs[i].nom+'" src="'+joueurs[i].image+'" '+joueurs[i].nom+'/></td>');
        var tdNom = $('<td>'+joueurs[i].nom+'</td>');
        var tdPoste = $('<td>'+joueurs[i].poste+'</td>');
        var tdDesc = $('<td>'+joueurs[i].description+'</td>');
        var tdButtonAgrandir = $('<td><button type="button" name="agrandir">Agrandir</button></td>');
        var idJoueur = i.substring(i.length -1, i.length);
        var tdButtonModifier = $('<td><button type="button" name="modifier" id="bt_modifier_'+idJoueur+'" data-id="'+i+'">Modifier</button></td>');
        var tdButtonSupprimer = $('<td><button type="button" name="supprimer" id="bt_supprimer_'+idJoueur+'" data-id="'+idJoueur+'">Supprimer</button></td>');
        $('#ligne_'+i).append(tdImg);
        $('#ligne_'+i).append(tdNom);
        $('#ligne_'+i).append(tdPoste);
        $('#ligne_'+i).append(tdDesc);
        $('#ligne_'+i).append(tdButtonAgrandir);
        $('#ligne_'+i).append(tdButtonModifier);
        $('#ligne_'+i).append(tdButtonSupprimer);
    }
}

function actualiserCompteur() {
    document.getElementById('th_message').innerHTML = "Message (Nombre de messages : " + nbMessages + ")";
}

function afficherMenu() {
    for (i in menu) {
        var nouveauLi = $('<li id="limenu_'+i+'"></li>');
        $('#listeMenu').append(nouveauLi);
        var nouveauLien = $('<a href="'+menu[i].url+'">'+menu[i].libelle+'</a>');
        $('#limenu_'+i).append(nouveauLien);
        if (menu[i].fils.length !== 0) {
            var nouvelleListe = $('<ul id="ul_sousmenu_'+i+'"></ul>');
            $('#limenu_'+i).append(nouvelleListe);
            for (j in menu[i].fils) {
                var nouveauSousLi = $('<li id="li_sous_menu_'+j+'_'+i+'"></li>');
                $('#ul_sousmenu_'+i).append(nouveauSousLi);
                var nouveauSousLien = $('<a href="#">'+menu[i].fils[j]+'</a>');
                $('#li_sous_menu_'+j+'_'+i).append(nouveauSousLien);
            }
        }
    }
}

function ajouterJoueur() {
    event.preventDefault();
    var nom = $("#nom_joueur").val();
    var poste = $("#poste_joueur").children("option:selected").val();
    var description = $("#description_joueur").val();
    nbJoueurs += 1 ;
    var nouveauJoueur = "\"joueur"+nbJoueurs+"\"";

    var joueursString = JSON.stringify(joueurs);
    joueursString = joueursString.substring(0, joueursString.length-1);
    joueursString += "," + nouveauJoueur + ": {";
    joueursString += ' \"image\" : ' + '\" \"' + ",";
    joueursString += ' \"nom\" : \"' + nom + "\",";
    joueursString += ' \"poste\" : \"' + poste + "\",";
    joueursString += ' \"description\" : \"' + description+'\"';
    joueursString += "}}";
    joueurs = JSON.parse(joueursString);
    $('#tabJoueurs').empty();
    afficherJoueurs();
    affecterClick();
}

function supprimerJoueur() {
    var joueurToDelete = $(this).data('id');
    console.log(joueurToDelete);
    delete joueurs[joueurToDelete-1];
    $('#ligne_joueur'+joueurToDelete).hide();
}

function modifierJoueur() {
    var joueurToUpdate = $(this).data('id');

    $("#nom_joueur").val(joueurs[joueurToUpdate].nom);
    $("#poste_joueur").val(joueurs[joueurToUpdate].poste);
    $("#description_joueur").val(joueurs[joueurToUpdate].description);

    $("#ajout_joueur").val('Modifier');
    $("#ajout_joueur").off();
    console.log(joueurToUpdate);
    $('#ajout_joueur').click(function appliquerModif(){
        console.log(joueurToUpdate);
        joueurs[joueurToUpdate].nom = $("#nom_joueur").val();
        joueurs[joueurToUpdate].poste = $("#poste_joueur").val();
        joueurs[joueurToUpdate].description = $("#description_joueur").val();
    });
}

function afficherMessage() {
    for (i in messages) {
        var nouveauTr = $('<tr id="ligne_'+i+'"></tr>');
        $('#tableau_messages').append(nouveauTr);
        var tdUser = $('<td>'+messages[i].user+'</td>');
        var tdMessage = $('<td>'+messages[i].message+'</td>');
        var tdDate = $('<td>'+messages[i].date+'</td>');

        $('#ligne_'+i).append(tdUser)
                      .append(tdMessage)
                      .append(tdDate);
        if (messages[i].isNew === 1) {
            $('#ligne_'+i).fadeOut(900).delay(300).fadeIn(800);
        }
    }
    actualiserCompteur();
}

function ajouterMessage() {
    event.preventDefault();

    var userName = $('#user_name').val();
    var message = $('#message_txt').val();
    var now = new Date();
    var annee   = now.getFullYear();
    var mois    = now.getMonth() + 1;
    var jour    = now.getDate();
    var heure   = now.getHours();
    var minute  = now.getMinutes();
    var date = jour+'/'+mois+'/'+annee+' - '+heure+'h'+minute;

    checkUserPresent(userName);
    if (userPresent) {
        alert("Attention cet user name a déjà été utilisé dans la shoutbox");
    }
    for (i in messages) {
        messages[i].isNew = 0;
    }
    nbMessages += 1 ;
    var nouveauMessage = "\"message"+nbMessages+"\"";
    if (nbMessages !== 1) {
        var messageString = JSON.stringify(messages);
        messageString = messageString.substring(0, messageString.length - 1);
        messageString += "," + nouveauMessage + ": {";
        messageString += ' \"user\" : \"' + userName + "\",";
        messageString += ' \"message\" : \"' + message + "\",";
        messageString += ' \"date\" : \"' + date + '\",';
        messageString += ' \"isNew\" :' + 1;
        messageString += "}}";
    } else {
        var messageString = JSON.stringify(messages);
        messageString = messageString.substring(0, messageString.length - 1);
        messageString += nouveauMessage + ": {";
        messageString += ' \"user\" : \"' + userName + "\",";
        messageString += ' \"message\" : \"' + message + "\",";
        messageString += ' \"date\" : \"' + date + '\"';
        messageString += "}}";
    }
    console.log(messageString);
    messages = JSON.parse(messageString);
    actualiserCompteur();
    $('#body_tabMessages').empty();
    afficherMessage();
}

function viderMessages() {
    for (i in messages) {
        delete messages[i];
    }
    $('#body_tabMessages').empty();
    nbMessages = 0;
    actualiserCompteur();
    afficherMessage();
}

function checkUserPresent(userName) {
    for (i in messages) {
        if (messages[i].user === userName) {
            userPresent = true;
        }
    }
}



