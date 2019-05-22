let numbers = [1,2,3,4,5,6,7,8,9];
total= 0;

  for (i=0; i<9; i++) {
    total= total + numbers[i]++;
    console.log(total);
  }