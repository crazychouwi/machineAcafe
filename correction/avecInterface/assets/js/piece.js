Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

// on récupère la valeur du coin compris entre [0.01,0.02,0.05,0.10,0.20,0.50,1,2] et on multiplie par 100 pour trouver la bonne image
function getImageOfCoin(valueCoin) {
    valueCoin *= 100;
    return "assets/images/"+valueCoin+"cent.png";

}


function generateCoin(container) {
    // liste des pièces possibles de l'utilisateur
    var lstCoins = [0.01,0.02,0.05,0.10,0.20,0.50,1,2];
    // pièce récupérée au hasard
    var valueCoin = lstCoins.sample();

    // on créé l'image correspondant au chiffre aléatoire
    var imgMoney = $("<img/>");
    imgMoney.addClass('img-circle');
    imgMoney.attr('data-id', valueCoin);
    imgMoney.attr('src',getImageOfCoin(valueCoin));

    // on ajoute l'image dans le container
    $(container).append(imgMoney);

}

