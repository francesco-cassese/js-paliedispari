'use strict';

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.,
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).,
Sommiamo i due numeri,
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione),
Dichiariamo chi ha vinto.*/

//INIZIALIZZO VARIABILE DI SUPPORTO 
let isInputValid = true;

//FACCIO SCEGLIERE ALL'UTENTE UN NUMERO DA 1 A 5
const inputCategoryUser = prompt('Scegli una categoria scrivendo tra PARI o DISPARI');

//CONTROLLO INPUT CATEGORIA
let checkedCategoryUser = getValidateInput(inputCategoryUser);

if (checkedCategoryUser !== undefined) { // SE LA PRIMA FUNZIONE NON DA UNDEFINED

    isInputValid = false; //L'INPUT NON è VALIDO

} else {
    // TRASFORMO IL TESTO IN MAIUSCOLO 
    const categoryUpper = inputCategoryUser.trim().toUpperCase();

    //CONTROLLO CHE L'UTENTE ABBIA INSERITO LE PAROLE CORRETTE
    if (categoryUpper !== 'PARI' && categoryUpper !== 'DISPARI') {
        alert('Devi scegliere tra PARI o DISPARI');
        isInputValid = false;
    }
}

if (isInputValid) {

    // ADESSO CHIEDO IL NUMERO
    const inputNumberUser = (prompt('Adesso inserisci un numero da 1 a 5'));

    // CONTROLLI GENERALI INPUT NUMERI
    const checkedNumberUser = getValidateInput(inputNumberUser);

    if (checkedNumberUser !== undefined) {
        isInputValid = false;

    } else {

        // TRASFORMO LA STRINGA IN NUMERO 
        const numberUser = parseInt(inputNumberUser);

        //CONTROLLO CHE ALL'INTERNO CI SIA EFFETTIVAMENTE UN NUMERO
        if (isNaN(numberUser)) {
            alert('Formato non valido')
            isInputValid = false;

            // CONTROLLO CHE L'UTENTE ABBIA INSERITO UN NUMERO TRA 1 E 5    
        } else if (numberUser < 1 || numberUser > 5) {
            alert('Devi scegliere un numero tra 1 e 5');
            isInputValid = false
        }
    }
}


//GENERO NUMERO CASUALE PER IL COMPUTER E RICHIAMO LA FUNZIONE
const numberComputer = generatorRandomNumber(1, 5);