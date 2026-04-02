'use strict';

// DICHIARO VARIABILI PER POTER SALVARE I RISULTATI SUCCESSIVAMENTE
let sceltaCategoriaUtente;
let sceltaNumeroUtente;

// VARIABILE DI SUPPORTO PER USCITA WHILE 
let ilNumeroEvalido = false;
let laCategoriaEValida = false;
let utenteHaAnnullato = false;


while (!laCategoriaEValida && !utenteHaAnnullato) {
    //FACCIO SCEGLIERE UNA CATEGORIA
    const inputUtente = prompt('Scegli una categoria scrivendo tra PARI o DISPARI');

    //MI ASSICURO CHE IL TESTO EMESSO NON ABBIA ERRORI
    const testoPulito = controllaPresenza(inputUtente, pulisciTesto);

    //STAMPO ERRORI SCELTA CATEGORIA
    if (testoPulito === -1) {                   //SE L'UTENTE ANNULLA ESCE CAMBIANDO LA VARIABILE IN TRUE            
        alert('Operazione annullata');
        utenteHaAnnullato = true;

    } else if (testoPulito === 0) {             //SE L'UTENTE LASCIA IL CAMPO VUOTO
        alert('Non lasciare questo campo vuoto')
    } else {

        //VALIDO LA PAROLA CON UNA FUNZIONE
        sceltaCategoriaUtente = validaParola(testoPulito, 'PARI', 'DISPARI');

        //SE IL TESTO è VALIDATO CAMBIA STATO A TRUE
        if (sceltaCategoriaUtente) {
            laCategoriaEValida = true;

            //ALTRIMENTI ERRORE
        } else {
            alert(`Scegli tra PARI o DISPARI e tu hai scritto: ${testoPulito}`);
        }
    }
}

//SOLO SE LA CATEGORIA è VALIDA ENTRA QUI
if (laCategoriaEValida) {
    while (!ilNumeroEvalido && !utenteHaAnnullato) {

        //FACCIO SCEGLIERE UN NUMERO DA 1 A 5
        const inputNumeroUtente = prompt('Scegli un numero da 1 a 5');

        //CONTROLLO VALIDAZIONE NUMERO
        const numeroPresente = controllaPresenza(inputNumeroUtente, pulisciTesto);

        if (numeroPresente === -1) {        // operazione annullata esco dal while cambiando la variabile
            alert('Operazione annullata');
            utenteHaAnnullato = true;

        } else if (numeroPresente === 0) {   // evito di far lasciare il campo vuoto
            alert('Non lasciare questo campo vuoto');

        } else {

            // ulteriore controllo sul numero
            const numeroValidato = validaNumero(numeroPresente);

            if (numeroValidato === -1) {                      //Se l'utente non mette un numero
                alert('Immetti un NUMERO per favore')

            } else if (numeroValidato === 0) {                // se l'utente non sceglie tra 1 e 5
                alert('Sei fuori dal range, scegli TRA 1 e 5');
            } else {
                sceltaNumeroUtente = numeroValidato;        // salvo il risultato
                ilNumeroEvalido = true;                        // ed esco cambiando lo stato della variabile
            }
        }
    }
}

//Stampo nella console il risultato finale solo se entrambe le variabili sono vere
if (laCategoriaEValida && ilNumeroEvalido) {

    // GENERAZIONE E CALCOLO
    const numeroComputer = generatoreNumeriRandom(1, 5);
    const somma = sceltaNumeroUtente + numeroComputer;
    const risultatoFinale = getParity(somma, 'PARI', 'DISPARI');

    // STATISTICHE DELLA PARTITA
    console.log(`MATCH: Utente (${sceltaCategoriaUtente}: ${sceltaNumeroUtente}) vs Computer (${numeroComputer})`);

    // ESITO 
    console.log(`RISULTATO: La somma è ${somma}, un numero ${risultatoFinale}`);

    // VERDETTO FINALE
    const verdettoFinale = sceltaCategoriaUtente === risultatoFinale
        ? 'ERROR 404: Dignità del Computer non trovata! HAI VINTO!!!'
        : 'Protocollo dominazione attivato... HAI FALLITO LA PREVISIONE';

    alert(verdettoFinale);
}