var iminja = ['Ана','Марија','Весна','Aлександра'];

var min = iminja[0];
var max = iminja[0];

for (int i = 1; i < iminja.length; i++) 
    if (iminja[i] > max) 
    {
        max = iminja[i];
    }
    if (iminja[i] < min) 
    {
        min = iminja[i];
    }
}

System.out.println("Largest Number in a given array is : " + max);
System.out.println("Smallest Number in a given array is : " + min);
}

}