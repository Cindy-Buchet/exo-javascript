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