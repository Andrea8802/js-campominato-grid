// l'utente cliccando un bottone genererà una griglia 10x10 con dei numeri da 1 a 100, l'utente cliccando su di esse le colorerà di azzurro

// Manipolazione DOM
const container = document.getElementById("container");
const genera = document.getElementById("play");
const elements = document.getElementsByClassName("box");


// Bottone genera
genera.addEventListener("click",
    function(){
        container.style.display = "flex";
        for(i = 1; i <= 100; i++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("click",
                function(){
                    box.classList.toggle("active");
                    console.log(parseInt(box.firstChild.nodeValue));
                }
            )
            container.append(box);
            box.innerHTML = i;
            
        }
    }

)