'use strict';

//=========================================================================
//FUNZIONE PALINDROMO
//=========================================================================

function checkPalindrome(input) {

    //INIZIALIZZO LA VARIABILE NELLA FUNZIONE DA USARE COME USCITA DAL CICLO 
    let isPalindrome = true;

    // INIZIALIZZO LA VARIABILE DA AGGIORNARE NELLA DISTINZIONE FINALE
    let message = "";

    //SE L'UTENTE CLICCA ANNULLA, ESCO SUBITO
    if (input === null) {
        alert(`Operazione annullata`);
        return "Annullato";
    }

    //MI ASSICURO CHE NON CI SIANO SPAZI SUPERFLUI E CHE LA PAROLA SIA TUTTA IN MINUSCOLO
    const cleanPrompt = input.toLowerCase().trim().split(" ").join("");

    //CONTROLLO CHE IL "PROMPT" NON RESTI VUOTO
    if (cleanPrompt === "") {
        alert("Inserisci una parola/numero da valutare");
        return "Campo vuoto"
    }

    //PER OGNI LETTERA DELLA PAROLA
    //PARTI DALLA POSIZIONE 0, ARRIVA FINO A METà DELLA PAROLA DIGITATA E AD OGNI GIRO AGGIUNGI 1 A i 
    for (let i = 0; i < cleanPrompt.length / 2 && isPalindrome; i++) {

        //SE LA LETTERA IN QUESTIONE è DIVERSA DALLA LETTERA CHE STA ALLA STESSA DISTANZA MA PARTENDO DALLA FINE
        //  CAMBIA LA VARIABILE IN FALSE   
        if (cleanPrompt[i] !== cleanPrompt[cleanPrompt.length - 1 - i]) {
            isPalindrome = false;
        }
    }

    //DISTINZIONE TRA NUMERI E LETTERE
    if (/^\d+$/.test(cleanPrompt)) {
        const cleanNumber = cleanPrompt;
        message = isPalindrome ? `${cleanNumber} è un numero Palindromo` : `${cleanNumber} Non è un numero palindromo`;

    } else {
        message = isPalindrome ? `${inputUser} è un Palindromo` : `${inputUser} Non è un Palindromo`;
    }
    return message;
}
