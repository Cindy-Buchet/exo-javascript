let increment = 0;

while (increment <=100) {
    
    if (increment > 90) {
        console.log("Pour "+increment+" points vous avez le grade A");
    } 
    else if (increment > 80) {
        console.log("Pour "+increment+" points vous avez le grade B");
    } 
    else if (increment > 70) {
        console.log("Pour "+increment+" points vous avez le grade C");
    }
    else if (increment > 65) {
        console.log("Pour "+increment+" points vous avez le grade D");
    }
    else {
        console.log("Pour "+increment+" points vous avez le grade F");
    }

    increment = increment + 1;
}