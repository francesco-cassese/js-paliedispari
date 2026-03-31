'use strict';

//====================================================
//FUNZIONE CONTROLLI GENERALI
//====================================================

function getValidateInput(input) {
    if (input === null) {
        alert('Operazione Annullata')
        return 'Categoria/Numero non inserita/o';
    }

    if (input === "") {
        alert('Non lasciare questo campo vuoto')
        return `L'utente ha lasciato il campo vuoto`;
    }
}



//====================================================
//GENERATOTRE NUMERI CASUALI
//====================================================

//CREO UNA FUNZIONE CHE MI GENERI I NUMERI AUTOMATICAMENTE
function generatorRandomNumber(min, max) {
    //VALORE MASSIMO es"5" - VALORE MINIMO es"1" + 1 PER COPRIRE L'INTERO RANGE E LO SOMMO DI NUOVO PER FAR ARRIVARE IL CALCOLO IN QUEL RANGE.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}