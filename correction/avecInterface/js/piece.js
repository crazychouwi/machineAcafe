Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
};

function getImageOfCoin(valueCoin) {
    valueCoin *= 100;
    return "images/"+valueCoin+"cent.png";

}


function generateCoin(container) {
    // liste des pièces possibles de l'utilisateur
    var lstCoins = [0.01,0.02,0.05,0.10,0.20,0.50,1,2];
    // pièce récupérée au hasard
    var valueCoin = lstCoins.sample();


    var spanMoney = $("<img/>");
    spanMoney.attr('src',getImageOfCoin(valueCoin));

    $(container).append(spanMoney);

}

