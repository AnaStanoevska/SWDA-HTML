function baraj() {
var ime  = document.querySelector('.ime').value;

if(ime.length <= 5){
    console.log('Кратко име');
} else if(ime.length >=5  && ime.length <=8){
    console.log('Име со средна големина');
} else if(ime.length > 8){
    console.log('Долго име');
}
}
