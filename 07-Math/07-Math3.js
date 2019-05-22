function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let premier = entierAleatoire(50, 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let deuxième = getRandomInt(2);


var troisième = Math.floor(Math.random() * 11);




console.log("Un nombre aléatoire entre 50 et 100: " + premier);

console.log("Un nombre entre 0 ou 1: " + deuxième);

console.log("Un nombre aléatoire entre 1 et 10: " + troisième);