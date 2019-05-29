let handleKey = function (event) {
    let num = event.keyCode;
    let first = document.getElementById('character');
    switch (num) {
        case 49 :
            first.style.backgroundColor = "red";
            break;
        case 50 :
            first.style.backgroundColor = "yellow";
            break;
        case 51 :     
            first.style.backgroundColor = "blue";
            break;
        case 52 :     
            first.style.backgroundColor = "black";
            break;
        case 53 :     
            first.style.backgroundColor = "orange";
            break;
        case 54 :     
            first.style.backgroundColor = "aqua";
            break;
        case 55 :     
            first.style.backgroundColor = "blueviolet";
            break;
        case 56 :     
            first.style.backgroundColor = "brown";
            break;
        case 57 :     
            first.style.backgroundColor = "violet";
            break;
    } 
};
window.addEventListener ('keydown', handleKey);

let two = document.getElementById('character');


let handleKeyTwo = function (event) {
    let num = event.keyCode;

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    
    switch (num) {
        case 38 :
            up.classList.add("highlight");
            break;
        case 40 :
            down.classList.add("highlight");
            break;
        case 37 :     
            left.classList.add("highlight");
            break;
        case 39 :     
            right.classList.add("highlight");
            break;
        default:
            console.log("C'est pas le bon nombre");
    } 
};
window.addEventListener ('keydown', handleKeyTwo);

let handleKeyUp = function (event) {
    let num = event.keyCode;   
     
    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    
    switch (num) {
        case 38 :
            up.classList.remove("highlight");
            break;
        case 40 :
            down.classList.remove("highlight");
            break;
        case 37 :     
            left.classList.remove("highlight");
            break;
        case 39 :     
            right.classList.remove("highlight");
            break;
        default:
            console.log("C'est pas le bon nombre");
    } 
};
window.addEventListener ('keyup', handleKeyUp);