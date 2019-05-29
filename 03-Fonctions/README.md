# Exercices de JavaScript: Fonctions

## Exercice : Calculs

Déclarez les variables suivantes :

* Fonction qui fait des soustractions
* Fonction qui fait des division
* Fonction qui fait des multiplications
* Fonction qui fait des calcule de pourcentages ( 2 arguments: valeur et pourcentage ) par exemple : "50% de 10 = 5";
* Faire un fonction qui fait des calcules de vitesse (2 arguments : distance, temps en heure)

Le résultat doit être par exemple : '50km/h'
```
let soustra = function (a, b) {
    return a - b;
}

let division = function (a, b) {
    return a / b;
}

let multi = function (a, b) {
    return a * b;
}
/*
var result = multi(10, 2); 
alert(result) 
*/

let pourc = function (valeur, pourcentage) {
    return (pourcentage / 100 ) * valeur ; 
}

/*
let result = pourc(10, 50); 
alert(result) 
*/

let vitesse = function (distance, temps) {
    return distance / temps ;
}

/*
let result = vitesse(100, 2);
alert(result + " km/h")
*/
```