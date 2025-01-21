// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input 
// in cui l'utente deve inserire i numeri che ha visto precedentemente,
//  nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
// - Se l’utente ha inserito qualcosa di non valido,
//  segnaliamolo visivamente nel form.
// Consigli del giorno:
// >
// > - Pensate prima in italiano.
// > - Dividete in piccoli problemi la consegna.
// > - Individuate gli elementi di cui avete bisogno per realizzare il programma.
// > - Immaginate la logica come fosse uno snack:
//  "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"

// !numeri casuali in array creato e riempito random
let randomNumbers = [];

function numberGen(arrayNum) {
    for (let i = 0; i < 5; i++) { 

        let num = Math.floor(Math.random() * 50) + 1;  
        arrayNum.push(num);
    }
    
    return arrayNum
}

console.log(numberGen(randomNumbers));

// Mostra i numeri generati nella console
//! Funzione per aggiungere i numeri ai li APPENA CREATI


function displayNumbers(numbers) {

    const numbersList = document.getElementById('numbers-list');

    for (let i = 0; i < numbers.length; i++) {
        const liItems = document.createElement('li');
        liItems.innerHTML = numbers[i]; 
        numbersList.appendChild(liItems); 
    }

}

displayNumbers(randomNumbers)

const listaNumeri = document.getElementById('numbers-list');

//! FACCIO SPARIRE LA LISTA DI NUMERI DOPO TOT SECONDI
setInterval(dNoneFunction, 3000)

function dNoneFunction() {
    
    const listaNumeri = document.getElementById('numbers-list');
    listaNumeri.classList.add("d-none");
    const numeriInseriti = document.getElementById('answers-form');
    numeriInseriti.classList.remove('d-none')

}

//! ho preso tutti i numeri scritti da utente
const btn = document.querySelector('button');

btn.addEventListener('click', function (event) {

    event.preventDefault();
    //! Previene il comportamento predefinito del form

    const randomInput = document.querySelectorAll('.form-control');
    const numeriScritti = [];

    // Itera sugli input e salva i numeri
    for (let i = 0; i < randomInput.length; i++) {

        const value = parseInt(randomInput[i].value); // Converte in numero
        
        numeriScritti.push(value); // Salva solo numeri validi
        
    }


    // Confronta i numeri scritti con quelli generati
    const result = comparetion(randomNumbers, numeriScritti);

    console.log("Numeri scritti dall'utente:", numeriScritti);
    console.log("Numeri indovinati:", result);

    // Mostra i risultati nella pagina
    const pStamp = document.getElementById('message');

    pStamp.innerHTML = `Hai indovinato ${result.length} numeri: ${result.join(", ")}`;
    
    
});


const numeriInseriti = document.getElementById('answers-form');

numeriInseriti.classList.add('d-none')

// Funzione per confrontare i numeri
function comparetion(arrayRandom, writeArray) {
    const indovinati = [];
    for (let i = 0; i < arrayRandom.length; i++) {
        if (writeArray.includes(arrayRandom[i])) {
            indovinati.push(arrayRandom[i]); // Salva i numeri indovinati
        }
    }
    console.log(indovinati)
    return indovinati;
}