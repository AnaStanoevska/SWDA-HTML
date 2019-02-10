var ime  = document.querySelector('.ime');

if(ime.length <= 5){
    console.log('Кратко име');
} else if(ime.length >=5<=8){
    console.log('Име со средна големина');
} else{
    console.log('Долго име');
}
