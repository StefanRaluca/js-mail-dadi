console.log("work");
/* //Faccio una const con array e dentro array scrivo i valori per i tipi di mail che sono accettati  

const emailTypes = ["stefanraluca22@gmail", "stefanm@yahoo.it", "email1@gmail.com", "email@ymail2.com"];
const email_user = prompt("Inserisci il tuo indirizzo email:");

//Faccio una variabile con valore boolean per poter usarla nel loop (cosi da farci vedere se il valore è vero o falso)

let emailValida = false;

document.getElementById("emailForm").addEventListener("submit", function (e) {
    e.preventDefault();

//Impostiamo un loop al quale diciamo che : 

for (let i = 0; i < emailTypes.length; i++) {
   //SE il utente inserisce una mail che ha un valore fra quelli indicati nel array allora Stampi in pagina come prompt  che il form è stato inviato correttamente
    if (email_user === emailTypes[i]) {
        emailValida = true;
        const msg_true = prompt("Form è stato inviato correttamente!");
       console.log(email_user);
    }
}
// ALTRIMENTI stampi una alerta in pagina con il messaggio "Riprova ad digitare correttamente la tua email !"
if (!emailValida) {

    const msg_false = alert("Riprova a digitare correttamente la tua email !");

    console.log(msg_false);
}*/

//Usiamo la funzione math per calcolare i numeri random con min e max dove min è 1 e max è 6

let player_score = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

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
}