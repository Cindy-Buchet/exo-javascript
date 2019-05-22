let Numbers = [7, 5, -12, 6, 32, 18, 14, -2];


var NumbersMin = Math.min.apply(Math, Numbers);
var NumbersMax = Math.max.apply(Math, Numbers);
console.log("Le plus petit nombre est " +NumbersMin);
console.log("Le plus grand nombre est " +NumbersMax);

let addition = NumbersMin + NumbersMax;
console.log("L'addition de ces deux nombres est: "+addition);
