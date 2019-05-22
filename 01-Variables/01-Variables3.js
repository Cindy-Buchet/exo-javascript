let monage = prompt("Quel est votre âge?")
let agemax = 90
let denrée = prompt("Quel est votre denrée alimentaire?")
let consommation = prompt("Quel est la consommation de cette denrée par jour?")
let agerestant = agemax - monage
let nombre = agerestant * consommation

alert("Il vous reste "+nombre+" de "+denrée+" avant d'atteindre l'age de "+agemax+ " ans.")