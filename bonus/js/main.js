// l'utente cliccando un bottone genererà una griglia 10x10 con dei numeri da 1 a 100, l'utente cliccando su di esse le colorerà di azzurro

// Manipolazione DOM
const container = document.getElementById("container");
const genera = document.getElementById("play");
const difficolta = document.getElementById("difficolta");
const reset = document.getElementById("reset");

difficolta.value = "facile";

// Bottone genera
genera.addEventListener("click",
    function(){

        // Controllo difficoltà
        if (difficolta.value === "facile"){

            creaBox(100, "facile");

        } else if (difficolta.value === "normale"){

            creaBox(81, "normale");

        } else if (difficolta.value === "difficile"){

           creaBox(49, "difficile");
        }
    }
)

// Bottone Reset
reset.addEventListener("click",
    function(){
        location.reload();
    }
)

// Funzioni

// Funzione scelta modalità
function creaBox(nBox, modalita){
     // Rendere visibile container
     container.style.display = "flex";

     // Stampiamo 100 celle
    for(let i = 1; i <= nBox; i++){

        const box = document.createElement("div");
        box.classList.add("box");
        box.classList.add(modalita);

        container.append(box);
        box.innerHTML = i;
        let num = i;

        // Click sui numeri
        box.addEventListener("click",
            function(){
                box.classList.toggle("active");
                console.log(num);
            }
        )
    }
}
