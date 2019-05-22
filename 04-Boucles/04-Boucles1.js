let increment = 0;

while (increment <=20) {
    console.log(increment);
    let calmodulo = increment % 2;

    if (calmodulo == 0) {
        console.log("C'est pair");
    } else  {
        console.log("C'est impair");
    }

    increment = increment + 1;
}