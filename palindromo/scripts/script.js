'use strict';

//================================================================
//PALINDROMO
//================================================================

// Chiedo la parola o il numero all'utente
const inputUtente = prompt("Inserisci una parola o un numero da valutare:");

// Controllo validità dati e faccio la distinzione tra numero e parola tramite funzione
const datiValidati = controllaDati(inputUtente, pulisciTesto);

// Stampo i vari casi di errore
if (datiValidati === -1) {
    alert(`Operazione Annullata`);
} else if (datiValidati === 0) {
    alert(`Non lasciare questo spazio vuoto`)
} else {

    //Pulisco il testo richiamando la funzione
    //const testoValidato = pulisciTesto(inputUtente)

    // Verifico se la parole è un Palindromo
    const isPalindrome = verificaPalindromo(inputUtente, pulisciTesto);

    // Stampo ii risultati 
    if (datiValidati === 1) {
        alert(isPalindrome ? `${inputUtente} è un numero palindromo` : `${inputUtente} non è un numero palindromo`);
    } else if (datiValidati === 2) {
        alert(isPalindrome ? `${inputUtente} è un  palindromo` : `${inputUtente} non è palindromo`);
    }
}
