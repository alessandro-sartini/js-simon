// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali. 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input 
// in cui l'utente deve inserire i numeri che ha visto precedentemente,
//  nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da indovinare sono stati individuati.
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

// !FACCIO SPARIRE LA LISTA DI NUMERI DOPO TOT SECONDI
displayNumbers(randomNumbers)
setTimeout(dNoneFunction, 1000)

function dNoneFunction() {
    
    const listaNumeri = document.getElementById('numbers-list');

    listaNumeri.classList.add("d-none");
    const numeriInseriti = document.getElementById('answers-form');
    numeriInseriti.classList.remove('d-none')

}
// input-group
// numeriScritti=[]
// const inputGroup = document.getElementById('input-group');
// numeriScritti.push(inputGroup.value)
// console.log(numeriScritti)

