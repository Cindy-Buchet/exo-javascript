let score = prompt("Quel est ton score sur 100 ?")
let result = score

if (result >= 90) {
    alert("Vous êtes rang A");
} 
else if (result < 90 & result > 50) {
    alert("Vous êtes rang B");
} 
else if (result <= 50) {
    alert("Vous êtes rang C");
}