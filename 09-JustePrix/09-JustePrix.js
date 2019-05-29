let attempts = 0;
let NumbersMin = 20;
let NumbersMax = 80;

let request = "Entrez un numéro entre 20 et 80";

function NumbersAle(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let GoodNumbers = NumbersAle(NumbersMin, NumbersMax);
let search;
do{
    search = prompt(request);
    attempts++; 
    if (search < GoodNumbers){
        alert("C'est plus");
    } else if (search > GoodNumbers){
        alert("C'est moins");
    }       
}
while (search != GoodNumbers);

alert("Bravo vous avez trouvés en "+attempts+" coups");