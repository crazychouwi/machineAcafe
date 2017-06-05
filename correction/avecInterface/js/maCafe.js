$(document).ready(function() {
    for(i = 1; i <= 20; i++)  {
        generateCoin("#userMoney");
    }

    $("#interface").append(getLstCafeHtml())
});
