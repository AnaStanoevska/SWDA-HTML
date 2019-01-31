function myFunction() {
    if (document.getElementById("select").value == "Celcius") {
      convertc();
    } else {
      convertf();
    }
  }
  
  function convertc() {
    var x;
    x = (document.getElementById("number").value - 32) * 5 / 9;
    document.getElementById("result").value = Math.round(x);
  }
  
  function convertf() {
    var x;
    x = document.getElementById("number").value * 9 / 5 + 32;
    document.getElementById("result").value = Math.round(x);