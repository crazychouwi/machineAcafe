$(document).ready(function () {
    var lstChoix = getLstChoixCafe();

    // on récupère sous forme liste html les différents cafés disponibles et on l'insère dans le dom la liste des cafés
    $("#lstCafe").append(getLstCafeHtml(lstChoix));

    // affichage du message d'accueil
    $(".messageMachine").html(getMessageAcceuil());


    // création de deux objets pour une manipulation plus facile
    // une machine a un seul utilisateur à la fois
    var machine = {
        // on récupère le prix le plus petit de la machine à café
        prixMinimum: getPrixMinimumCafe(lstChoix),
        lstChoixCafe: lstChoix,
        // si mettons par la suite on veut faire en sorte que la machine soit hors service si elle n'a plus de café, il faudra alors refaire une autre boucle ou encore un truc compliqué
        // pour améliorer le code afin de le faire évoluer
        // j'ajoute un boolean permettant d'indiquer l'état de marche de la machine
        // et je jouerai avec pour signaler ou non que la machine puisse servir des cafés
        enMarche: true,

        nbGobelets: 2,
        utilisateur: {
            // au chargement de la page, le solde est à 0
            solde: 0.00
        }

    };



    // on génère les pièces de l'utilisateur
    for (i = 1; i <= 20; i++) {
        generateCoin("#userMoney");
    }

    // on rend possible le drag and drop sur les pièces de l'utilisateur

    $("#userMoney img").draggable();

    $("#coin").droppable({

        drop: function (event, ui) {
            machine.utilisateur.pieceInsere = $(ui.draggable[0]).attr('data-id');

            traitementPiece(machine);

            // affichage des informations du traitement des pièces
            $(".messageMachine").html(machine.info);

            // s'il n'y a pas d'erreur, on supprime la pièce de l'affichage (elle a été engloutie par la machine)
            if (!machine.erreur) {
                $(ui.draggable[0]).remove();

            }
            else {
                // s'il y a une erreur c'est que la pièce n'est pas acceptée donc on la remet à sa place
                $(ui.draggable[0]).draggable("option", "revert", true);
            }


        }

    });

    // l'utilisateur peut annuler à tout moment sa commande, la machine rend donc le solde s'il y en a un
    $('#paveNumerique .cancel').click(function() {


        rendreMonnaie(machine);
        $(".messageMachine").html(machine.info);
        // on affiche au bout de deux secondes le message d'accueil
        setTimeout(function () {
            $(".messageMachine").html(getMessageAcceuil());
            }, 2000
        )

    })

});
