
let mail = document.getElementById('mailList');
const input = document.getElementById('inputNumber');
const btn = document.querySelector('.btn');

function mailGen(n) {

    //task ciclo la chiamata sotto per N volte
    for (i = 0; i < n; i++) {

        //task chiamata API per generare mail randomica
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response)

                //task genero la mail come innerHTML direttamente nella lista in pagina
                mail.innerHTML += `<a href="#" class="list-group-item list-group-item-action text-primary-emphasis">${response.data.response}</a>`
            })
            .catch(error => {
                console.error(error)
            })

    }
}

//task evoco la funzione che fa i due task di sopra!
mailGen(10);


// //task versione fetch
// fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
//     .then(response => response.json())
//     .then(data => {
//         //task genero la mail come innerHTML direttamente nella lista in pagina
//         mail.innerHTML += `<a href="#" class="list-group-item list-group-item-action">${data.response}</a>`
//     })
//     .catch(error => {
//         console.error(error);
//     });

//task al click svuoto la lista di mail e riempio semplicemente rievocando la funzione(con piccolo controllo)
btn.addEventListener('click', () => {

    mail.innerHTML = "";

    //task piccolo controllo per non superare il min/max dell'input!
    (input.value > 30 || input.value < 1) ?
        (alert(`numeri consentiti da 1 a 30!!!`) + window.location.reload())
        : mailGen(input.value);
})





