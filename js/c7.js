function parNepar(a) {
    if (a % 2 == 0) {
        return 'par';
    } else {
        return 'nepar';
    }
}

var res = parNepar(2);
console.log(res); // par

res = parNepar(7);
console.log(res); //nepar


 // funkcija ubav ne ubav mesec

 res = ubavMesec ('Dekemvri');
 console.log(res); //da

 res = ubavMesec ('Januari');
 console.log(res); // ne

  
function ubavMesec(a) {
    if (a.length % 2 == 0) {
        return 'da';
    }
    return 'ne';
}

// se pod return e kod koj nikogash ne moze da se izvrshi


// anonimna funkcija
// var delenje = function(a,b) {
//     return a / b;
// }

// res = delenje(3,6);
// console.log(res);
  

// 


var ploshtina = function(c,d) {
    return c * d;
}

res = ploshtina(2,13)
console.log(res);

res = ploshtina(57,298);
console.log(res);

//*********************** */

var calc1 = function(a,b,c) {
    var d = a * b;
    return c(d);
}

var calc2 = function(a) {
    return a * a;
}

res = calc1(3, 6, calc2);
console.log(res);


res = calc1(4,7, function(a){
    return a * a;
});

console.log(res);


//*********************************** */

var iminja = ['Vesna', 'Ana', 'Jasna'];
console.log(iminja[0]);


var f = 2;
console.log(iminja[f]);

var dolzina = iminja.length;
console.log(dolzina);

iminja[3] = 'Pero';
console.log(iminja);

var max = iminja.length;

iminja[max] = 'Bojan';
console.log(iminja);

iminja.push('Marko'); //avtomatsko dodavanje na krajot od nizata
console.log(iminja);

iminja[80] = 'Mila';
iminja.push('Kristijan');
console.log(iminja);
console.log(iminja.length);

// length i nareden index se ista brojka

var niza = [345, 'TEXT', false, 'PAK STRING', false, true, false, max, 11, 12, iminja ];
console.log(niza);

niza = [345, 'TEXT', false, 'PAK STRING', false, true, false, max, 11, 12];

for(var i = 0; i < 100; i = i + 1 ){
    console.log('JS', i);
}

// for(var i = 0; i < niza.length; i++){
//     if(Number.isInteger(niza[i])){
//         console.log(niza[i]);
//     }
// }



for(var i = 0; i < niza.length; i++){
    if(typeof niza[i] == "string"){
        console.log(niza[i]);
    } 
}
    
if(2 == '2'){
    console.log("2 e ednakvo na '2'")
}

if(2 === '2'){
    console,log("2 e ednakvo na '2'")
}
