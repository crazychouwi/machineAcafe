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
// il faut que je redéclare une variable pour lui assigner un tableau
var lstChoix = getLstChoixCafe();

// on récupère sous forme de chaîne les différents choix possibles
var messageChoix = getMessageLstChoixCafe(lstChoix);

// on récupère le prix le plus petit de la machine à café
var prixMininimum = getPrixMinimumCafe(lstChoix);

// si mettons par la suite on veut faire en sorte que la machine soit hors service si elle n'a plus de café, il faudra alors refaire une autre boucle ou encore un truc compliqué
// pour améliorer le code afin de le faire évoluer
// j'ajoute un boolean permettant d'indiquer l'état de marche de la machine
// et je jouerai avec pour signaler ou non que la machine puisse servir des cafés
var etatMarche = true;

var gobelets = 2;


    // tant qu'il y a le stock de gobelets
    while (etatMarche) {

           var montantInsere = traitementPiece(prixMininimum);

            // affiche le message avec la liste des cafés et le solde de l'utilisateur, traite les erreurs et récupère le choix de l'utilisateur
            var choix = traitementChoix(messageChoix,lstChoix, montantInsere);
            var prix = lstChoix[choix]["prix"];


            preparationCafe(lstChoix[choix]["libelle"]);

            rendreMonnaie(solde, prix);



    }
    alert("hors service");


