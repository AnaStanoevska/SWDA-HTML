function valuta() {
    var add = document.querySelector('.number');
    var usd = document.querySelector('.usd');
    var eur = document.querySelector('.eur');
    var result = document.querySelector('.result');
    usd.value = add * 61.5;
    eur.value = add * 54;

}