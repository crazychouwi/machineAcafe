// ce fichier vous montre parfaitement pourquoi je vous disais de découper votre code en petite partie


// une fonction à la différence d'une procédure permet de renvoyer des valeurs
// !!! attention !!! les variables définies dans une fonction ne peuvent être utilisées en dehors de celle ci !
// c'est pour cela que l'on se sert de valeurs retournées


function getMessageAcceuil() {
    return "Veuillez insérer 0.10, 0.20, 0.50, <br/>1 ou 2 euros.<br/>";
}


// retourne la liste des différents choix de cafés
function getLstChoixCafe() {
    // on créé un tableau
    var lstChoixCafe = [];
    // on indique à la colonne 0, on a une ligne qui s'appelle libellé et une autre prix
    lstChoixCafe[0] = {libelle: "Café court", prix: 1};
    // on indique à la colonne 1, on a une ligne qui s'appelle libellé et une autre prix
    lstChoixCafe[1] = {libelle: "Café au lait", prix: 1.50};
    // on indique à la colonne 1, on a une ligne qui s'appelle libellé et une autre prix
    lstChoixCafe[2] = {libelle: "Café allongé", prix: 1.30};

    // si on veut dessiner le tableau, ça correspond à ça
    /*
     |       0       |        1       |       2
     libelle  | "Café court"  | "Café au lait" | "Café allongé"
     prix     | 1             | 1.50           | 1.30

     */

    // pour obtenir le prix du café en colonne 2, je dois faire lstChoix[2]["prix"]
    // si je met seulement lstChoix, le programme va me retourner array car il me retourne tout le tableau
    // si je met seulement lstChoix[2], il va me retourner aussi array car il y a un tableau dans la colonne 2
    // si je met seulement lstChoix['prix'], il va me retourner une erreur. En effet, on doit signaler le premier index, ici c'est un chiffre.

    // on retourne le tableau
    return lstChoixCafe;

}

// pour connaître le prix minimum du tableau
// soit on recréé un tableau histoire que ça rame bien :)
// soit on passe en paramètre le tableau qui permet de le récupérer et de le traiter
// soit on déclare des variables globales (c'est ce que l'on a ici mais je préfère vous montrer avec les paramètres)
function getPrixMinimumCafe(lstChoixCafe) {

    // on récupère le prix de la première ligne
    // en effet, cela nous permet d'avoir un point de comparaison réel
    var prixMinimumCafe = lstChoixCafe[0]["prix"];

    // on commence à parcourrir le tableau à partir de la ligne 1 car on a déjà le prix de la ligne 0
    for (var index = 1; index < lstChoixCafe.length; index++) {

        // si le prix en cours de lecture est plus petit que celui enregistré dans la variable prixMinimum
        if (lstChoixCafe[index]["prix"] < prixMinimumCafe) {
            // alors on l'enregistre dans la variable prixMinimum
            prixMinimumCafe = lstChoixCafe[index]["prix"];
        }
    }

    // console.log(prixMinimumCafe);
    return prixMinimumCafe;
}
// permet d'afficher la liste des choix du tableau
// ainsi si on rajoute une boisson, elle sera affichée automatiquement
// on pourrait ajouter plusieurs paramètres pour décider de l'endroit où on veut afficher le messsage d'information, le message de la liste des cafés
// ou sous quelle forme html on veut caser les informations
// retourne sous forme de liste html la liste des cafés
function getLstCafeHtml(lstChoixCafe) {
    // on ajoute une liste html pour énumérer les café
    var lstCafeHtml = $("<ul/>");

    // équivalent du foreach avec jquery
    $.each(lstChoixCafe, function (index, unCafe) {

        // le numéro du choix est égal à l'index + 1
        var choix = index + 1;
        var liCafeHtml = $("<li/>");
        // on concatène dans le messageLstChoixCafe, la valeur du libellé et du prix
        liCafeHtml.html(choix + " : " + unCafe["libelle"] + " : " + unCafe["prix"] + " euros");
        lstCafeHtml.append(liCafeHtml);

    });
    return lstCafeHtml;
}

// affiche le message en demandant à l'utilisateur de faire son choix
function getMessageLstChoixCafe(lstChoixCafe) {

    // déclarer le message
    var messageLstChoixCafe = "Faites votre choix :";
    // on indique l'endroit où on décide d'afficher ce message
    $('.messageMachine').html(messageLstChoixCafe);

    return messageLstChoixCafe;
}

// permet de traiter le choix de l'utilisateur
function traitementChoix( montantInsere) {

   var messageChoix = '';

    // le choix ne doit pas être égale à 0 ou supérieur à la taille du tableau
    while (choix == 0 || choix > lstChoix.length) {
        messageChoix = prompt("Erreur ! choix invalide." + messageChoix);
    }
    // pour retrouver le bon choix dans le tableau je dois enlever 1
    choix--;

    return choix;
}

// fonction permettant d'utiliser un gobelet et de signaler la préparation du café et qu'il soit servi
// une procédure fait une action mais ne renvoit pas de valeurs ! (pas de return)
function preparationCafe(cafe, nbGobelets) {

    nbGobelets--;
    alert("préparation en cours : " + cafe);
    alert("voici votre café");
    return nbGobelets;

}

// permet d'indiquer à l'utilisateur s'il faut qu'il insère encore des pièces ou pas
// on retourne un objet permettant de faire un passage par référence
// c'est à dire que si les éléments sont modifiés à l'extérieur ou à l'intérieur de la fonction on peut toujours récupérer les nouvelles valeurs
function traitementPiece(machine) {

    // on parse la pièce insérée en float au cas ou elle est traitée en chaine de caractère
    machine.utilisateur.pieceInsere = parseFloat(machine.utilisateur.pieceInsere);

    // liste des pièces acceptées
    var lstPieceAcceptees = [0.1, 0.2, 0.5, 1, 2];

    machine.erreur = false;

    var premierPassage = true;

    // l'utilisateur doit insérer une pièce
    machine.info = getMessageAcceuil();

    // on récupère la pièce passé dans l'insert
    // on utilise la fonction inArray pour savoir si la pièce insérée est présente dans le tableau des pièces acceptées
    // si la pièce est acceptée on est quand même dans le cas où le montant est insuffisant
    if ($.inArray(machine.utilisateur.pieceInsere, lstPieceAcceptees) != -1) {
        // on ajoute la pièce au solde
        machine.utilisateur.solde += machine.utilisateur.pieceInsere;
        // on doit en plus faire autre chose ! roh c'est chiant. commentez cette ligne pour mieux comprendre.
        // c'est bon ? si vous insérez 0.10 puis 0.20 vous aurez un solde de 0.30000000000000004 euros.
        // bizarre non ?
        // en fait javascript passe en langage plus bas niveau pour faire des calculs
        // il traduit les float qu'on lui passe et fait son calcul et des fois ça ne tombe pas juste !
        // il faut donc dire au programme récupère moi les deux chiffres après la virgule.
        // quand on met la fonction toFixed ce con de js le parse en string
        // il faut donc reparser le solde en float (youpi !)
        machine.utilisateur.solde = parseFloat(machine.utilisateur.solde.toFixed((2)));

        // tant que le solde n'est pas égale au prix minimum, on demande à l'utilisateur d'insérer une pièce et en lui indiquant le solde
        if (machine.utilisateur.solde < machine.prixMinimum) {
            machine.info += 'Montant insuffisant. <br/>Vous devez insérer au minimum : ' + machine.prixMinimum + " euro(s).<br/>";
        }


    }
    // la machine n'accepte que les pièces de 0.10, 0.20, 0.50, 1 et 2 euros
    else {
        machine.info += 'Pièces non acceptées.  <br/>';
        machine.erreur = true;

    }

    machine.info += '\nSolde : ' + machine.utilisateur.solde + ' euros.<br/>';

    if (machine.utilisateur.solde >= machine.prixMinimum) {
        machine.info += "Faites votre choix ou insérez plus de monnaie.";
    }

    return machine;


}


// procédure permettant de rendre la monnaie
// une procédure fait une action mais ne renvoit pas de valeurs ! (pas de return)
function rendreMonnaie(machine) {

    var message = '';

    // si le prix du café == 0 ça veut dire que la personne n'a rien pris et a annulé son choix, on lui rend donc quand même sa monnaie
    if(typeof cafeChoisi === "undefined") {
        cafeChoisi = 0;
        machine.info = "Commande annulée.<br/>"
    }


    machine.utilisateur.solde -= cafeChoisi;
    // quand on met la fonction toFixed ce con de js le parse en string
    // il faut donc reparser le solde en float (youpi !)
    machine.utilisateur.solde = parseFloat(machine.utilisateur.solde.toFixed((2)));
    if (machine.utilisateur.solde > 0) {
        machine.info += "voici votre monnaie " + machine.utilisateur.solde + " Euros";
        // on remet à 0 le solde
        machine.utilisateur.solde = 0;
    }

    return machine;

}


// fonction permettant d'indiquer l'etat de marche de la machine selon le nombre de gobelets
// on pourrait aussi ajouter selon le stock de café
// s'il y a évolution à faire, ce sera dans cette fonction directement et pas dans le programme principal
// hé oui! on est des feignasses !!! on veut retoucher le moins possible au code !!
function gestionEtatEnMarche(nbGobelets) {
    // par défaut la machine est en marche
    var etatMarche = true;

    // s'il n'y a plus de gobelets
    if (nbGobelets == 0) {
        // la machine ne marche plus
        etatMarche = false;
    }

    return etatMarche;

}