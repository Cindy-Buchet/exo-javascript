let test = document.querySelectorAll(".hoverMe");
style = "";

for (let i = 0; i < test.length; i++){
    let target = test[i];
    target.addEventListener("mouseover", function( Prem ) {   
        target.style.display = "none";  
    });
}


    let bouton = document.getElementById("reset");

bouton.addEventListener("mouseover", function(Deux){
    let test = document.querySelectorAll(".hoverMe");
    for (let i = 0; i < test.length; i++){
        let target = test[i];
        if (target.style.display = "none"){
            target.style.display = "block";
        } 
    }
        
})
document.body.addEventListener("mouseover", function(Trois){
    let x = Trois.clientX;
    let y = Trois.clientY;
    let axex = document.getElementById('p-x');
    let axey = document.getElementById('p-y');

    axex.innerHTML = "Les coordonnées de l'axe x sont: "+x + " px";
    axey.innerHTML = "Les coordonées de l'axe y sont: " +y+ " px";
    console.log("trigger");
})