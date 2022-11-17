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

            creaBox(100);

        } else if (difficolta.value === "normale"){

            creaBox(81);

        } else if (difficolta.value === "difficile"){

           creaBox(49);
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
function creaBox(nBox){
     // Rendere visibile container
     container.style.display = "flex";

     // Stampiamo 100 celle
    for(i = 1; i <= nBox; i++){

        const box = document.createElement("div");
        box.classList.add("box");

        // Condizione che controlla la modalità
        if (nBox === 100){
            box.classList.add("facile");

        } else if (nBox === 81){
            box.classList.add("normale");

        } else if (nBox === 49){
            box.classList.add("difficile");
        }

        container.append(box);
        let num = box.innerHTML = i;

        // Click sui numeri
        box.addEventListener("click",
            function(){
                box.classList.toggle("active");
                console.log(num);
            }
        )

        
    }
}