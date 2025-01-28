
let mail = document.getElementById('mailList');
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

btn.addEventListener('click', () => {

    mail.innerHTML = "";
    mailGen(10);

})




