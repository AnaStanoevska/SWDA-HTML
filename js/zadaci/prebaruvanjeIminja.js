var Pero = document.querySelector('.Pero');
var Janko = document.querySelector('.Janko');
var Stanko = document.querySelector('.Stanko');
var Vanco = document.querySelector('.Vanco');
var Elena = document.querySelector('.Elena');
var Vesna = document.querySelector('.Vesna');
var Jana = document.querySelector('.Jana');
var Irena = document.querySelector('.Irena');
var ime = document.querySelector('.iminja');



document.addEventListener('change', function(){
    switch(ime.value){ 
        case 'Pero':
            console.log("Pero"); 
            break;
        case 'Janko':
            console.log("Janko"); 
            break;
        case 'Stanko':
            console.log("Stanko"); 
            break;
        case 'Vanco':
            console.log("Vanco"); 
            break;
        case 'Elena':
            console.log("Elena"); 
            break;
        case 'Vesna':
            console.log("Vesna"); 
            break;
        case 'Jana':
            console.log("Jana"); 
            break;
        case 'Irena':
            console.log("Irena"); 
            break; 
    }
});
