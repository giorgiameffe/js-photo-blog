// ELEMENTI HTML

// Row
const rowElement = document.querySelector('.row');

// Overlay
const overlayElement = document.querySelector('.overlay-container');

//Overlay img
const overlayImgElement = document.querySelector('img');


// Bottone da creare

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Chiudi';
buttonElement.classList.add('overlay-button');

// AXIOS

// inizializzare la variabile contenente API pictures
const uri = 'https://lanciweb.github.io/demo/api/pictures/';

// fare la chiamata API
axios.get(uri)
    .then((response) => {

        // ottenere l'array di oggetti e salvarlo in una variabile
        const arrayApi = response.data;
        // console.log(arrayApi);

        // iterare l'array
        for (let i = 0; i < arrayApi.length; i++) {

            // ottenere il singolo oggetto e salvarlo in una variabile
            const currentArrayApi = arrayApi[i];
            // console.log(currentArrayApi);

            // invocare la funzione per creare elemento html
            rowElement.innerHTML += createHtmlElement(currentArrayApi); 

        }

        // Elemento html (array di card)

        const cardsElement = document.querySelectorAll('.col');

        // IMMAGINI OVERLAY

        // fare un ciclo for per ottenere le singole card

        for (let i = 0; i < cardsElement.length; i++) {

            const currentCard = cardsElement[i];
            // console.log(currentCard);
            const currentElementApi = arrayApi[i];
            // console.log(currentElementApi);

            // aggiungere evento al click dell'immagine (overlay)

            currentCard.addEventListener('click', function(){

                // svuotare l'inner a ogni iterazione per far apparire una singola immagine ad ogni click
                overlayElement.innerHTML = '';
                
                //appendere il bottone creato al contenitore padre
                overlayElement.appendChild(buttonElement);

                // aggiungere foto all'overlay
                overlayElement.innerHTML += createHtmlImg(currentElementApi);
                
                // modificare il display dell'overlay
                overlayElement.classList.remove('d-none');

                // aggiungere eventi al click del bottone

                const buttonOverlayElement = document.querySelector('.overlay-button');

                buttonOverlayElement.addEventListener("click", function() {

                    overlayElement.classList.add("d-none");
                })
 
            })
        }

    })
    .catch(error => {
        console.log(alert("Attezione! L'indirizzo inserito non è corretto."));
    })


// FUNZIONI

// Funzione per creare le card

function createHtmlElement(obj) {

    return ` <div class="col">
<img src="img/pin.svg" class="pin-img" alt="Pin rosso">
<div class="card-photo">
   <img src="${obj.url}" alt="${obj.title}"> 
 </div>
 <div class="card-info">
   <div class= "date">${obj.date}</div>
   <h3 class= "title">${obj.title}</div>
 </div>
</div>`
}

// Funzione per creare le immagini overlay

function createHtmlImg (obj) {

    return `<img class="overlay-img" src="${obj.url}" alt="${obj.title}"> `

}
