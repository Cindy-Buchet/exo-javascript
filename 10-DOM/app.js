/* EXERCICE 1 */

let ClassBody = document.body;
ClassBody.classList.remove("bg-aqua");
ClassBody.classList.add("bg-olive");

let IdFirstPara = document.getElementById("first-paragraph");
IdFirstPara.classList.remove("bg-lime");
IdFirstPara.classList.remove("gray");
IdFirstPara.classList.add("aqua");

let BgSilver = document.querySelectorAll(".bg-silver");
for (let i = 0; i < BgSilver.length; i++){
    BgSilver[i].classList.add("bg-teal");
    BgSilver[i].classList.remove("bg-silver");
}

let BlockQuote = document.querySelectorAll("blockquote");
for (let i = 0; i < BlockQuote.length; i++){
    BlockQuote[i].classList.add("bg-white");
}

/* EXERCICE 2 */

let Table = document.querySelector("#my-table");
Table.classList.add("bg-purple");

let Para = document.querySelectorAll("body p");
for (let i =0; i < Para.length; i++){
    Para[i].classList.add("shadow");
}

/* EXERCICE 3 */ 

let Pre = document.querySelector("pre");
Pre.style.color = "white";
Pre.style.backgroundColor = "black";
Pre.style.borderTop = "3px solid red";
Pre.style.borderBottom = "3px solid red";

let H3 = document.querySelector("h3").innerHTML = "<em>Itelic title ! yeah !</em>";
let H2 = document.querySelector("h2").innerHTML = "<strong>HTML doens't work !</strong>";

/* EXERCICE 4 */

let Ul = document.querySelector("ul").innerHTML += "<li>Mon meilleur ami est <a href='http://www.google.com'>Google</a></li>"
let FirstLi = document.querySelector("ul li");
FirstLi.style.color = "red";

/* EXERCICE 4 ² */

let parent = document.querySelector("ol");
let child = parent.children; 
let nombreEnfants=child.length;

for(let i = 0;i < nombreEnfants;i++){
    parent.removeChild(child[0]);
}

let tab =  ["Silent Teacher","Code Monkey", "CodeCombat"];
for (let i = 0; i < tab.length; i++){
    let newLi = document.createElement("li");
    newLi.textContent = tab[i];
    parent.appendChild(newLi);
}
