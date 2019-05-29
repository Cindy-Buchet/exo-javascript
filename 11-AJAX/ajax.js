const req = new XMLHttpRequest();
req.open('GET', 'data.json');
req.send();

req.onload = function (){
    let people = req.response;
    people = JSON.parse(people);

    people.map(function(arr){
        arr.score = Math.round(Math.random()*1000);
    });

    people.sort(function(a,b){
        if (a.score < b.score){
            return 1
        } else if (a.score > b.score){
            return -1
        } else{
            return 0
        }
    })
}


console.log(req.responseText);

/*
req.number = "Coucou";
numbers = "";
for (let i = 0; req.lenght; i++){
    numbers = numbers + i;
    console.log(req); 
}



*/