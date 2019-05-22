let letters = ['b','o','n','j','o','u','r'];
let guess = ['_','_','_','_','_','_','_'];

function compare(letter){
  let boolean = false;
  for(let i = 0; i < letters.length;i++){
    if(letters[i] == letter){
      let position = letters[i];
      alert("Bravo, vous avez trouvé la lettre "+ position)
      guess[i] = letters[i];
      boolean = true;
    }
  }
  return boolean;
}
function equals(){
  let compt = 0;
  for(let i = 0; i < guess.length;i++){
    if(guess[i] != '_'){
      compt++;
    }
  }
  return compt;
}

while (true) {
  let letter = prompt("Entrez une lettre");
  if(compare(letter)){
    alert("Continuez de chercher: "+guess);
  }
  if(equals() == letters.length){
    alert("Bravo, vous avez trouvé le mot");
    break;
  }
}

