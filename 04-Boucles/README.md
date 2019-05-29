# Exercices de JavaScript: Boucles

## Exercice : Pair et impair

- Ecrivez une boucle qui va itérer de 0 à 20.
- Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair

- afficher dans la console par exemple : " 2 est pair "


```
let increment = 0;

while (increment <=20) {
    console.log(increment);
    let calmodulo = increment % 2;

    if (calmodulo == 0) {
        console.log("C'est pair");
    } else  {
        console.log("C'est impair");
    }

    increment = increment + 1;
}
```

## Exercice: Multiplication Tables

- Écrire une boucle qui va itérer de 0 à 10
- Pour chaque itération de la boucle, il va multiplier le nombre de 9

- afficher dans la console le résultat par exemple : " 2 * 9 = 18".


```
let increment = 0;

while (increment <10) {
    let multi = increment * 9
    console.log(increment + " * 9 = " + multi);
    increment = increment + 1;
}
```

## Exercice : assigner des grades

- Écrire une boucle qui va itérer de 0 à 100
- Écrire une fonction qui va retourner des grades selon les scores reçu:

    - si le score au dessus de 90 le grade est A
    - si le score au dessus de 80 le grade est B
    - si le score au dessus de 70 le grade est C
    - si le score au dessus de 65 le grade est D
    - si le score n'entre pas dans ces catégories le grade est F

- afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".


```
let increment = 0;

while (increment <=100) {
    
    if (increment > 90) {
        console.log("Pour "+increment+" points vous avez le grade A");
    } 
    else if (increment > 80) {
        console.log("Pour "+increment+" points vous avez le grade B");
    } 
    else if (increment > 70) {
        console.log("Pour "+increment+" points vous avez le grade C");
    }
    else if (increment > 65) {
        console.log("Pour "+increment+" points vous avez le grade D");
    }
    else {
        console.log("Pour "+increment+" points vous avez le grade F");
    }

    increment = increment + 1;
}
```

## Exercice : pyramide

- Écrire une boucle qui va dessiner dans la console (ligne par ligne) le résulat suivant
```
	*  
	* *  
	* * *  
	* * * *  
	* * * * *
```

```
let i;
let etoile ="";
for(i=1; i<=5; i++){
  etoile += "*";
  console.log(etoile);
}
  ```