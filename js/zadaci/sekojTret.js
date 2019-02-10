var count = -1;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        count++;
        if (count % 3 ==0) {
            console.log(i)
        }
    }
}

