let mainCharacter = {
    name : "Miyu",
    level : 10,
    life : 12,
    weapon : {
        name : "épée",
        damage : 34,
    }
}

let degats = mainCharacter.level * mainCharacter.weapon.damage

function attack(){-
    console.log(mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + " les dégâts sont " + degats)
}
attack();