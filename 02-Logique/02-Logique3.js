let mot = prompt("Donne-moi un nom d'objet")
let nombre = prompt("Tu possèdes combien de " + mot + " ?")

result = nombre

if (nombre == 1) {
    alert("Je possède " + nombre + " " + mot);
} else {
    alert("Je possède " + nombre + " " + mot + "s");
}