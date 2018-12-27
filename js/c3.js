function CentimetarToMetter(cm) {
    console.log(cm/100)
}

CentimetarToMetter(100);

function GramToKilogram(g) {
    console.log(g/1000)
}

GramToKilogram(1000);


var bukva = "A";

if(bukva =="A") {
    console.log("A");
} else if(bukva == "B") {
    console.log("B");
} else if(bukva == "C") {
    console.log("C");
} else {
    console.log("Непозната буква...");
}

// dinamicki vrednosti



switch(bukva) {
    case "A":
        console.log("A");
        break;
    case "B":
        console.log("B");
        break;
    case "C":
        console.log("C");
        break;
    default:
    console.log("Непозната буква...")
}

// fiksni vrednosti
 
function mesec(m) {
    var p = m.length % 2;
    switch(ana) {
        case 1:
            console.log("Ubav mesec");
            break;
        case 0:
            console.log("Neubav mesec");
            break;
    }
}

for(var i = 1; i < 50; i = i + 2) {
    console.log(i);
}

for(var i = 0; i < 100; i = count) {
    console.log(i);
}

var count = 