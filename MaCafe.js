function cafe(){

for (var gobelets = 2; gobelets > 0; gobelets--) {
console.log('nb gobelets'+ gobelets);

var lstChoix = new Array();
lstChoix[1] = {"libelle" : "Café court", "prix" : 1};
lstChoix[2] = {"libelle" : "Café au lait", "prix" : 1.50};
lstChoix[3] = {"libelle" : "Café allongé", "prix" : 0.30};

var prixMinimum = lstChoix[1]["prix"];

for(var index = 2; index < lstChoix.length; index++) {

  if(lstChoix[index]["prix"] < prixMinimum) {
    prixMinimum = lstChoix[index]["prix"];
  }
}
console.log(prixMinimum);

var piece = prompt ("insérez votre pièces:");


var messageChoix = "faites votre choix: 1, 2 ou 3";
var choix = prompt(messageChoix);

// si c'est pas bon
while (choix == 0 || choix > lstChoix.length-1) {

  choix = prompt("Erreur ! choix invalide." + messageChoix);

}

var price = lstChoix[choix]["prix"];
// var credit = [];
// credit.push(piece);
var rendu = piece - price;
// if (choix==court){
var messagePreparation = "préparation "+lstChoix[choix]["libelle"];
if (piece == price){
  alert(messagePreparation);
  alert("voici votre café");
}
else if(piece>price){
  alert(messagePreparation);
  alert("voici votre monnaie "+ rendu +" Euros");
  alert("voici votre café");
}
else if (piece<price) {
  alert("pièce minimum 1€");

}
/*
if(piece < court) {
  alert("montant minimum 1€");
}
else {
  alert("préparation café court");
  if(rendu > 0) {
      alert("voici votre monnaie "+ rendu +" Euros");
  }
  alert("voici votre café");
}*/


}
alert("hors service");
}
 cafe();
//alert("machine hors service");


// else if (piece==long){
//   alert("préparation café long");
// }
// else if(piece==lait){
//   alert("préparation café lait");
// }
// else{
//   alert("Veuillez insérer le montant exact");
// }
