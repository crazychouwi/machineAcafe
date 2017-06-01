// pour plus de visibilité dans le code on met les différentes fonctionnalités dans des fonctions
// elles sont présentes dans le fichier machine.js afin de lire facilement le programme principal

// on met ce code avant d'entrer dans la boucle sinon il sera exécuter à chaque fois qu'un utilisateur voudra prendre un café
// (comment faire ramer un programme ???)

// permet de définir la liste des choix de cafés
// getLstChoixCafe() retourne un tableau
// !!! attention !!! les variables définies dans une fonction ne peuvent être utilisées en dehors de celle ci !
// je ne peux donc pas écrire
// getLstChoixCafe();
// et après utiliser le tableau lstChoixCafe
var lstChoix = getLstChoixCafe();

// on récupère sous forme de chaîne les différents choix possibles
var messageChoix = getMessageLstChoixCafe(lstChoix);

// on récupère le prix le plus petit de la machine à café
var prixMininimum = getPrixMinimumCafe(lstChoix);


    // tant qu'il y a le stock de gobelets
   for (var gobelets = 2; gobelets > 0; gobelets--) {

       var montantInsere = traitementPiece(prixMininimum);

        // affiche le message avec la liste des cafés et le solde de l'utilisateur, traite les erreurs et récupère le choix de l'utilisateur
        var choix = traitementChoix(messageChoix,lstChoix, montantInsere);
        var prix = lstChoix[choix]["prix"];

        var rendu = montantInsere - prix;

        var messagePreparation = preparationCafe(lstChoix[choix]["libelle"]);

       if (piece == prix) {
           alert(messagePreparation);
           alert("voici votre café");
       }
       else if (piece > price) {
           alert(messagePreparation);
           alert("voici votre monnaie " + rendu + " Euros");
           alert("voici votre café");
       }
       else if (piece < price) {
           alert("pièce minimum 1€");

       }


    }
    alert("hors service");


