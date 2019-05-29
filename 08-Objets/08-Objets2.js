let table = ["épée", "fusil", "hâche", "couteau", "spectre"];


let sword = {
    title : "épée",
    physic : 12,
    magic : 38,
    minLevel : 32,
    available : false,
}
let axe = {
    title : "hache",
    physic : 35,
    magic : 42,
    minLevel : 15,
    available : true,
}

let gun = {
    title : "fusil",
    physic : 34,
    magic : 26,
    minLevel : 7,
    available : true,
}

let knife = {
    title : "couteau",
    physic : 3,
    magic : 16,
    minLevel : 19,
    available : false,
}

let spectrum = {
    title : "spectre",
    physic : 21,
    magic : 15,
    minLevel : 1,
    available : true,
}

let arr = [];
arr.push(sword)
arr.push(axe)
arr.push(gun)
arr.push(knife)
arr.push(spectrum)

console.log("Tout les objets:")
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i].title);
    }

console.log("Les objets disponible:")
function avaibles(){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].available == true){
            console.log(arr[i].title)
        }
    }
}
avaibles();

console.log("Les objets donc le niveau de min 10:")
function objMin(){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].minLevel >= 10){
            console.log(arr[i].title)
        }
    }
}
objMin();