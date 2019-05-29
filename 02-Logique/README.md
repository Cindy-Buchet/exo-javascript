# Exercices de JavaScript: Logique

## Exercice : Langues

* Crée une variable pour specifier une langue ex ("fr","es","en")
* Crée une autre variable qui servira à stocker un message
* Crée une condition pour savoir quelle sera la valeur du message si elle est "fr","es","en".

Afficher "Bonjour tout le monde", "Hello world" et "Hola, Mundo" selon la bonne langue

```
let lg = prompt("Quel est votre langue? FR, ES ou EN?")

if (lg == "fr") {
    alert("Salut tout le monde!");
} else if (lg == "es") {
    alert("Hola, Mundo!");
} else if (lg == "en"){
    alert("Hello world!");
} else {
    alert("Vous vous êtes trompés");
}
```

## Exercice : Affichage des scores

* Crée une variable qui contient un score
* Crée une variable qui contiendra le resultat
* Faire des conditions pour etablir les rangs selon le score

* Vous avez le rang A si vous avez un score égal ou supérieur a 90
* Vous avez le rang B si vous avez un score inférieur a 90
* Vous avez le rang C si vous avez un score inférieur ou égal a 50

```
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
```

## Exercice : Mettre au pluriel

* Crée une variable contenant un mot au singulier
* crée une variable qui contient le nombre dont tu en dispose
* crée une variable qui contiendra le résultat
* Faire une condition pour savoir si il faut rajouter un "s" ou pas

Le résultat doit être par exemple : "Je possède 4 pommes"

```
let mot = prompt("Donne-moi un nom d'objet")
let nombre = prompt("Tu possèdes combien de " + mot + " ?")

result = nombre

if (nombre == 1) {
    alert("Je possède " + nombre + " " + mot);
} else {
    alert("Je possède " + nombre + " " + mot + "s");
}
```