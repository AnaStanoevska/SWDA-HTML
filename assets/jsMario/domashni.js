countBs ("ASDKJQJWELQKJWEBASDBADSBBDA");
function countBs(str) {
    var count = 0;

for(var i = 0; i < str.length ;  i ++) {
    if (str[i] == "B") {
        count++;
    }
}

console.log(count);
}