'use strict';

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.,
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).,
Sommiamo i due numeri,
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione),
Dichiariamo chi ha vinto.*/

//INIZIALIZZO VARIABILE DI SUPPORTO 
let inputIsValid = false;
let userAsCancelled = false;
let numberIsValid = false;
let categoryUpper;
let numberUser;

while (!inputIsValid && !userAsCancelled) {

    //FACCIO SCEGLIERE ALL'UTENTE UN NUMERO DA 1 A 5
    const inputCategoryUser = prompt('Scegli una categoria scrivendo tra PARI o DISPARI');

    //CONTROLLO INPUT CATEGORIA
    const checkedCategoryUser = getValidateInput(inputCategoryUser);

    if (inputCategoryUser === null) { //SE L'UTENTE CLICCA ANNULLA ESCI DAL WHILE
        userAsCancelled = true; //LA VARIABILE DI SUPPORTO DIVENTA TRUE PER USCIRE

    } else if (checkedCategoryUser === undefined) { // SE LA FUNZIONE DA UNDEFINED

        // TRASFORMO IL TESTO IN MAIUSCOLO 
        categoryUpper = inputCategoryUser.trim().toUpperCase().split(" ").join("");

        //CONTROLLO CHE L'UTENTE ABBIA INSERITO LE PAROLE CORRETTE     
        if (categoryUpper === 'PARI' || categoryUpper === 'DISPARI') {
            inputIsValid = true;

        } else {

            // SE DIVERSO FACCIO PARTIRE L'ALLERT
            alert(`Scegli tra PARI o DISPARI e tu hai scritto: ${categoryUpper}`);
        }
    }
}


if (inputIsValid) { //SOLO SE L'INPUT DI PRIMA è VERA ALLORA ENTRA QUI

    while (!numberIsValid && !userAsCancelled) {

        // ADESSO CHIEDO IL NUMERO
        const inputNumberUser = (prompt('Adesso inserisci un numero da 1 a 5'));

        // CONTROLLI GENERALI INPUT NUMERI
        const checkedNumberUser = getValidateInput(inputNumberUser);

        //SE L'UTENTE CLICCA ANNULLA 
        if (inputNumberUser === null) {
            userAsCancelled = true

        } else if (checkedNumberUser === undefined) {

            // TRASFORMO LA STRINGA IN NUMERO 
            numberUser = parseInt(inputNumberUser);

            //CONTROLLO CHE ALL'INTERNO CI SIA EFFETTIVAMENTE UN NUMERO
            if (isNaN(numberUser)) {
                alert('Formato non valido')

                // CONTROLLO CHE L'UTENTE ABBIA INSERITO UN NUMERO TRA 1 E 5    
            } else if (numberUser < 1 || numberUser > 5) {
                alert('Devi scegliere un numero tra 1 e 5');

            } else {
                numberIsValid = true;
            }
        }
    }
}

//STAMPO NELLA CONSOLE LA SCELTA DEL UTENTE
if (inputIsValid && numberIsValid) {
    console.log(`Perfetto.. L'utente ha scelo: ${categoryUpper} ed ha inserito il numero: ${numberUser}`);

    //GENERO NUMERO CASUALE PER IL COMPUTER E RICHIAMO LA FUNZIONE
    const numberComputer = generatorRandomNumber(1, 5);

    console.log(`il computer ha scelto ${numberComputer}`);

    const sum = (numberUser + numberComputer);

    console.log(`il risultato della somma è ${sum}`);

    const finalResult = getParity(sum)

    console.log(`il risultato è ${finalResult}`);
}