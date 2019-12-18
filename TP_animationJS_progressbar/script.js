function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
}

$(document).ready(distribuerAction);
var pas;
var avancement;


function distribuerAction() {
    $('#progress').click(boutonProgresser);
    $('#reset').click(boutonReset);
    $('#valider').click(enregistrerPas);
    $('#fullBar').hide();
    pas = parseInt("20");
    avancement = parseInt("0");
}


function boutonProgresser() {
    avancement = parseInt(avancement) + parseInt(pas);
    console.log(parseInt(avancement));
    if (parseInt(avancement) > 100) {
        progress(100,$('#progressBar'));
        $('#fullBar').show();
    } else if (parseInt(avancement) === 100) {
        $('#fullBar').show();
        progress(100,$('#progressBar'));

    } else {
        progress(parseInt(avancement),$('#progressBar'));
    }

    if (parseInt(avancement) >= 40 && parseInt(avancement) < 60) {
        $('#bar').css('background-color','#E79505');
        $('#progressBar').css('border-color','#E79505');
    } else if (parseInt(avancement) >= 60 && parseInt(avancement) < 80) {
        $('#bar').css('background-color','#F3D504');
        $('#progressBar').css('border-color','#F3D504');
    } else if (parseInt(avancement) >= 80 && parseInt(avancement) < 100) {
        $('#bar').css('background-color','#97F304');
        $('#progressBar').css('border-color','#97F304');
    } else if (parseInt(avancement) === 100) {
        $('#bar').css('background-color','#04F309');
        $('#progressBar').css('border-color','#04F309');
    }
}

function boutonReset() {
    progress(0,$('#progressBar'));
    avancement = 0;
    $('#fullBar').hide();
    $('#bar').css('background-color','#E72D05');
    $('#progressBar').css('border-color','#E72D05');
}

function enregistrerPas() {
    if ($('#pas').val() <= 100 && $('#pas').val() >= 1) {
        pas = $('#pas').val();
    } else {
        alert('Le pas n\'est pas valide, veuillez rentrer un pourcentage');
    }
}