// l'utente cliccando un bottone genererĂ  una griglia 10x10 con dei numeri da 1 a 100, l'utente cliccando su di esse le colorerĂ  di azzurro

// Manipolazione DOM
const container = document.getElementById("container");
const genera = document.getElementById("play");

// Bottone genera
genera.addEventListener("click",
    function(){

        // Rigenera celle
        container.innerHTML = "";

        // Cambia scritta button
        this.innerHTML = "Reset";
        
        // Rendere visibile container
        container.style.display = "flex";

        // Stampiamo 100 celle
        for(let i = 1; i <= 100; i++){

            const box = document.createElement("div");
            box.classList.add("box");
            container.append(box);
            box.innerHTML = i;
            
            // Click sui numeri
            box.addEventListener("click",
                function(){
                    box.classList.add("active");
                    console.log(i);
                }
            ) 
        }
    }

)