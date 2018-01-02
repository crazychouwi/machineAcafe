$(document).ready(function () {
    var lstChoix = getLstChoixCafe();

    // on récupère sous forme liste html les différents cafés disponibles et on l'insère dans le dom la liste des cafés
    $("#lstCafe").append(getLstCafeHtml(lstChoix));


    // si mettons par la suite on veut faire en sorte que la machine soit hors service si elle n'a plus de café, il faudra alors refaire une autre boucle ou encore un truc compliqué
    // pour améliorer le code afin de le faire évoluer
    // j'ajoute un boolean permettant d'indiquer l'état de marche de la machine
    // et je jouerai avec pour signaler ou non que la machine puisse servir des cafés
    var etatMarche = true;

    var nbGobelets = 2;

    var traitement = {
        // on récupère le prix le plus petit de la machine à café
        prixMinimum: getPrixMinimumCafe(lstChoix),
        // au chargement de la page, le solde est à 0
        solde: 0.00
    };

    // on génère les pièces de l'utilisateur
    for (i = 1; i <= 20; i++) {
        generateCoin("#userMoney");
    }

    // on rend possible le drag and drop sur les pièces de l'utilisateur

    $("#userMoney img").draggable();

    $("#coin").droppable({

        drop: function (event, ui) {
            traitement.pieceInsere = $(ui.draggable[0]).attr('data-id');

            traitementPiece(traitement);

            // affichage des informations du traitement des pièces
            $(".messageMachine").html(traitement.info);

            // s'il n'y a pas d'erreur, on supprime la pièce de l'affichage (elle a été engloutie par la machine)
            if (!traitement.erreur) {
                $(ui.draggable[0]).remove();

            }
            else {
                // s'il y a une erreur c'est que la pièce n'est pas acceptée donc on la remet à sa place
                $(ui.draggable[0]).draggable("option", "revert", true);
            }


        }

    })

});
