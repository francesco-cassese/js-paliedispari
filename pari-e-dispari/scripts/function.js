'use strict';

//====================================================
//FUNZIONE PER PULIRE IL TESTO EMESSO
//====================================================

const pulisciTesto = testo => {
    // Trasforma in maiuscolo, toglie spazi ai lati e spazi interni
    return testo.toUpperCase().trim().split(" ").join("");
};

//====================================================
//GESTIONE ERRORI
//====================================================

const controllaPresenza = (input, pulizia) => {

    // Gestione "Annulla"
    if (input === null) {
        return -1;
    }

    // Pulizia Testo
    const inputPulito = pulizia(input);

    // Gestione campo vuoto
    if (inputPulito === "") {
        return 0;
    }
    return inputPulito;
}

//Gestione errori numero

const validaNumero = input => {

    // Trasformiamo in numero vero
    const numero = Number(input);

    if (isNaN(numero)) {
        return -1;       //se non è un numero restituisce -1
    }

    if (numero <= 0 || numero > 5) {
        return 0;        //se è fuori range restituisce 0
    }

    return numero;       //altrimenti restituisce numero valido
}

//====================================================
//CONTROLLO PAROLE AMMESSE
//====================================================

const validaParola = (testo, opzione1, opzione2) => {

    if (testo === opzione1 || testo === opzione2)
        return testo;
}

//====================================================
//GENERATOTRE NUMERI CASUALI
//====================================================

//CREO UNA FUNZIONE CHE MI GENERI I NUMERI AUTOMATICAMENTE
const generatoreNumeriRandom = (min, max) => {
    //VALORE MASSIMO es"5" - VALORE MINIMO es"1" + 1 PER COPRIRE L'INTERO RANGE E LO SOMMO DI NUOVO PER FAR ARRIVARE IL CALCOLO IN QUEL RANGE.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//====================================================
//CALCOLATORE NUMERI PARI O DISPARI
//====================================================

const getParity = (numero, opzione1, opzione2) => {

    if (numero % 2 === 0) {
        return opzione1;

    } else {
        return opzione2;
    }
}
