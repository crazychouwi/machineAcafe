// ce fichier vous montre parfaitement pourquoi je vous disais de découper votre code en petite partie


// une fonction à la différence d'une procédure permet de renvoyer des valeurs
// !!! attention !!! les variables définies dans une fonction ne peuvent être utilisées en dehors de celle ci !
// c'est pour cela que l'on se sert de valeurs retournées

// retourne la liste des différents choix de cafés
function getLstChoixCafe() {
    // on créé un tableau
    var lstChoixCafe =[];
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
function getMessageLstChoixCafe( lstChoixCafe) {

    // \n permet un retour à la ligne
    var messageLstChoixCafe = "Faites votre choix :\n";

    // équivalent du foreach avec jquery
    $.each(lstChoixCafe, function(index, unCafe) {
        console.log(unCafe);
        // le numéro du choix est égal à l'index + 1
        var choix = index+1;
        // on concatène dans le messageLstChoixCafe, la valeur du libellé et du prix
        messageLstChoixCafe = messageLstChoixCafe + "- " +choix+" : "+ unCafe["libelle"]+ " : " + unCafe["prix"] + " euros\n";

    });

    return messageLstChoixCafe;
}

// permet de traiter le choix de l'utilisateur
function traitementChoix(messageChoix, lstChoixCafe, montantInsere) {

    // on indique à l'utilisateur son solde et la liste des choix
    var choix = prompt("Solde :"+montantInsere+'\n'+messageChoix);

    // le choix ne doit pas être égale à 0 ou supérieur à la taille du tableau
    while (choix == 0 || choix > lstChoix.length) {
        choix = prompt("Erreur ! choix invalide." + messageChoix);
    }

    return choix;
}

// procédure permettant de signaler la préparation du café et qu'il soit servi
// une procédure fait une action mais ne renvoit pas de valeurs ! (pas de return)
function preparationCafe(cafe) {

     alert("préparation en cours : " + cafe);
     alert("voici votre café");

}

// permet d'indiquer à l'utilisateur s'il faut qu'il insère encore des pièces ou pas
function traitementPiece(prixMinimum) {
    // l'utilisateur insère une pièce
    var messagePiece = "Insérez votre monnaie :";

    // la toute première fois on affiche le message pour insérer des pièces
    // on parse la valeur sinon le code inArray (écrit plus bas) ne fonctionne pas car il doit comparer une chaine avec un float (chiffre à virgule)
    // parse = passer le type d'une variable en un autre

    // ça va ? vous n'avez pas envie de mourrir ?
    // si vous arrivez à comprendre ce code, vous avez fait la moitié du chemin pour devenir programmeur !!! l'autre moitié étant d'arriver à le faire !!!
    // pour info j'ai pondu cette fonction en 2 heures, en effaçant, en refaisant, en bloquant dessus. j'ai programmé au fur et à mesure et c'était dur !!!
    var pieceInsere = parseFloat(prompt(messagePiece));
    var solde = 0;

    // liste des pièces acceptées
    var lstPieceAcceptees = [0.1, 0.2, 0.5, 1, 2];

    // le message d'erreur est soit "montant insuffisant" soit "pièces non acceptées"
    var messageErreur = '';

    // tant que le solde n'est pas égale au prix minimum, on demande à l'utilisateur d'insérer une pièce et en lui indiquant le solde
    while(solde < prixMinimum) {

        // on utilise la fonction inArray pour savoir si la pièce insérée est présente dans le tableau des pièces acceptées
        // si la pièce est acceptée on est quand même dans le cas où le montant est insuffisant
        if($.inArray(pieceInsere,lstPieceAcceptees) != -1) {
            messageErreur =  'Montant insuffisant. \nVous devez insérer au minimum : '+prixMinimum+" euro(s).";
            // on ajoute la pièce au solde
            solde += pieceInsere;
        }
        // la machine n'accepte que les pièces de 0.10, 0.20, 0.50, 1 et 2 euros
        else {
            messageErreur = 'Pièces non acceptées. Veuillez insérer 0.10, 0.20, 0.50, 1 ou 2 euros. \n';

        }

        // il faut parser le montant en float car par défaut c'est considéré comme une chaine
        // si on ajoute un montant à une chaine c'est comme si on la concaténait
        // donc ça n'ajoute pas une somme
        pieceInsere = parseFloat(prompt(messageErreur+'\nSolde : '+solde+' euros.\n'+messagePiece));
    }

    return solde;


}

// procédure permettant de rendre la monnaie
// une procédure fait une action mais ne renvoit pas de valeurs ! (pas de return)
function rendreMonnaie(solde, prixCafe) {

    if(rendu > 0) {
        alert("voici votre monnaie " + rendu + " Euros");
    }


}