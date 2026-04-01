'use strict';

//===================================================================
//FUNZIONE PER PULIRE IL TESTO EMESSO
//===================================================================

const pulisciTesto = (testo) => {
    // Trasforma in minuscolo, toglie spazi ai lati e spazi interni
    return testo.toLowerCase().trim().split(" ").join("");
};


//==================================================================
// GESTIONE ERRORI PALINDROMO
//==================================================================

const controllaDati = (input, pulizia) => {

    // Gestione "Annulla"
    if (input === null) {
        return -1;
    }

    // Pulizia
    let testoPulito = pulizia(input);

    // Gestione campo vuoto
    if (testoPulito === "") {
        return 0;
    }

    //Controllo se è un numero o una parola
    if (/^\d+$/.test(testoPulito)) {
        return 1 // Se è un numero restituisce 1 
    } else {
        return 2 // Se non è un numero restituisce 2
    }
};

//===================================================================
//FUNZIONE PER LA VERIFICA DEL PALINDROMO
//===================================================================

const verificaPalindromo = (input, pulizia) => {
    let testoPulito = pulizia(input);
    // Inizio il ciclo fino e controllo fino a metà
    for (let i = 0; i < testoPulito.length / 2; i++) {
        if (testoPulito[i] !== testoPulito[testoPulito.length - 1 - i]) {
            return false; // Appena ne trova una diversa, esce subito
        }
    }
    return true; // Se finisce il ciclo, è palindromo
};