console.log("work");
//Faccio una const con array e dentro array scrivo i valori per i tipi di mail che sono accettati  
const emailTypes = ["stefanraluca22@gmail", "stefanm@yahoo.it", "email1@gmail.com", "email@ymail2.com"];
//const email_user = prompt("Inserisci il tuo indirizzo email:");

const email_user = document.getElementById("email_user").value;

document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();
    //Seleziono il valore che verrà inserito dal utente
    const email_user = document.getElementById("email_user").value;
    //Faccio una variabile con valore boolean per poter usarla nel loop (cosi da farci vedere se il valore è vero o falso)
    let emailValida = false;
    //Impostiamo un loop al quale diciamo che : 

    //SE il utente inserisce una mail che ha un valore fra quelli indicati nel array allora Stampi in pagina come prompt  che il form è stato inviato correttamente

    for (let i = 0; i < emailTypes.length; i++) {
        if (email_user === emailTypes[i]) {
            emailValida = true;
            email_insert.innerHTML = "Your Email: " + email_user;
        }
    }
    // ALTRIMENTI stampi una alerta in pagina con il messaggio "Riprova ad digitare correttamente la tua email !"



    if (emailValida) {
        alert("Form è stato inviato correttamente!");
        console.log(email_user);
    } else {
        alert("Riprova a digitare correttamente la tua email!");
    }
});




//Usiamo la funzione math per calcolare i numeri random con min e max dove min è 1 e max è 6

/* let player_score = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.info("Player " + player_score);

let computer_score = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.log("Computer " + computer_score);


//Faccio una condizione if per vedere nella console i risultati
if (player_score > computer_score) {

    console.log(player_score, " you win!");


} else if (computer_score > player_score) {

    console.log(computer_score, " computer win!");

} else {
    console.log("Pareggio!");
} */