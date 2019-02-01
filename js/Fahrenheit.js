 function calc () {
     var a = parseInt (document.querySelector('.a') .value);
     var b = parseInt (document.querySelector('.b') .value);
     var sel = parseInt (document.querySelector('.select') .value);

if(sel ==='+') {
    document.querySelector('res').value = a + b;
}

if(sel ==='-') {
    document.querySelector('res').value = a - b;
}

if(sel ==='/') {
    document.querySelector('res').value = a / b;
}

if(sel ==='*') {
    document.querySelector('res').value = a * b;
}

}