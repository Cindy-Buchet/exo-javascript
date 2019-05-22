# Exercices de JavaScript

## Variables

### Exercice : Diseur de bonne aventure

Déclarez les variables suivantes:

* nombre d'enfants
* nom d'une femme
* un pays
* métier

Afficher dans la console :

Vous serez X et habiterez à Y, et marié a Z avec N enfants.
```
let NombresEnfants = prompt("Combien avez-vous d'enfants?");
let NomFemme = prompt("Quel est le nom de votre femme?");
let Pays = prompt("Dans quel pays habitez-vous?");
let Metier = prompt("Quel est votre métier?");

alert("Vous serez "+Metier+" et habiterez à "+Pays+", et marié à "+NomFemme+" avec "+NombresEnfants+" enfants.")
```


### Exercice : Calculer l'age

Déclarez les variables suivantes :

* L'année courante
* L'année de naissance d'une personne

Afficher dans la console l'âge de cette personne
```
let année = 2019
let date = prompt("Quel année êtes-vous né?")
let age = année - date

alert("Vous avez " + age + " ans.")
```
### Exercice : Bientôt vieux

Déclarez les variables suivantes :

* Votre âge
* Un âge maximum, esperons tous vivre 100ans
* Une denrée alimentaire
* Votre consomation de cette denrée par jour

Calculer le nombre de fois que vous en mangerez pour le restant de votre vie.

Mettez le resultat dans la console comme ceci :

Il vous reste N de X avant d'atteindre l'age de Y ans"
Exercice : Priorités
```
let monage = prompt("Quel est votre âge?")
let agemax = 90
let denrée = prompt("Quel est votre denrée alimentaire?")
let consommation = prompt("Quel est la consommation de cette denrée par jour?")
let agerestant = agemax - monage
let nombre = agerestant * consommation

alert("Il vous reste "+nombre+" de "+denrée+" avant d'atteindre l'age de "+agemax+ " ans.")
```

## Logique

Exercice : Langues

* Crée une variable pour specifier une langue ex ("fr","es","en")
* Crée une autre variable qui servira à stocker un message
* Crée une condition pour savoir quelle sera la valeur du message si elle est "fr","es","en".

afficher "Bonjour tout le monde", "Hello world" et "Hola, Mundo" selon la bonne langue

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

### Exercice : Affichage des scores

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

### Exercice : Mettre au pluriel

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