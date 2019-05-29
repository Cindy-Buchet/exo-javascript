let table = {};
let character = {
    name : "Albert",
    age : 23,
    items_to_give : ["tablette", "smartphone", "PSP", "Nintendo"],
}

for(let key in character){
    console.log( character[key])
}

let Func = function giveItem(){
    return character.items_to_give[Math.floor(Math.random() * character.items_to_give.length)];
}

console.log("Voici un objet aléatoire: "+Func())