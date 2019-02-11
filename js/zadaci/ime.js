var iminja = ['Ана','Марија','Весна','Aлександра'];
function iminja() {
    var najdolgo = iminja [0];
    var najkratko = iminja [0];

    for(var i = 0; i < iminja.length; i++) {
        if(iminja[i].length > najdolgo.length) {
            najdolgo = iminja[i];
        }

        if(iminja[i].length < najkratko.length) {
            najkratko = iminja[i];
        }
    }

    console.log(najdolgo);
    console.log(najkratko);
}