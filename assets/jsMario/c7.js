// //

// function SayHello() {
//     console.log("Hello World");
// }

// SayHello();

// function SayHelloAgain(name) {
//     return "Hello " + name;
// }

// console.log( SayHelloAgain("Mario") );

// function MarioPyramid(size) {
//     for(var i = 1; i <= size; i++) {
//         var result = "";

//         for(var j = 1; j<= i; j++) {
//             result += "#"
//         }

//         console.log(result);
//     }
// }

// MarioPyramid(5);


// console.dir(document.querySelector("h2"));

// document.querySelector("h2").innerHTML = "Hello World"


var button = document.querySelector(".date-button");
var result = document.querySelector(".date");

button.addEventListener("dblclick", function()  {
    result.innerHTML = new Date();
});

//Za doma

// var movies = ["Pulp Fiction", "The Wild Bunch", "Star Wars", "Rear Window", "Mad Max"];
// // Nizata movies, so pomosh na JavaScript (DOM) pretvorete ja vo listi -> ul -> li. 