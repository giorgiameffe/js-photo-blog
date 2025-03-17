// ELEMENTI HTML

// Button
const buttonElement = document.querySelector('.overlay-button');
console.log(buttonElement);
// Overlay
const overlayElement = document.querySelector('.overlay-container');
console.log(overlayElement);
overlayElement.classList.add('d-none');


// AXIOS


// inizializzare la variabile contenente API pictures
const uri = 'https://lanciweb.github.io/demo/api/pictures/';

// fare la chiamata API
axios.get(uri)
    .then((response) => {

        // ottenere l'array di oggetti e salvarlo in una variabile
        const arrayElement = response.data;

        // iterare l'array
        for (let i = 0; i < arrayElement.length; i++) {

            // ottenere il singolo oggetto e salvarlo in una variabile
            const currentArray = arrayElement[i];

            // ottenere l'url delle immagini e salvarlo in una variabile
            const { url: imageUrl, date: imageDate, title: imageTitle } = currentArray;

            // prendere elemento html row e salvarlo in una variabile
            const rowElement = document.querySelector('.row');

            // invocare la funzione per creare elemento html
            rowElement.innerHTML += createHtmlElement(currentArray); 
        }

        // Elemento html (array di card)

        const cardsElement = document.querySelectorAll('.col');
        console.log(cardsElement);

        // IMMAGINI OVERLAY

        // fare un ciclo for per ottenere le singole card

        for (let i = 0; i < cardsElement.length; i++) {

            const currentCard = cardsElement[i];
            console.log(currentCard);

            // aggiungere evento al click dell'immagine (overlay)

            currentCard.addEventListener('click', function(){

                overlayElement.classList.remove('d-none');
            })
        }

        // aggiungere evento al click del bottone

        buttonElement.addEventListener ('click', function(){

            overlayElement.classList.add('d-none');
        })



    })
    .catch(error => {
        console.log('Errore!');
    })



// FUNZIONE ELEMENTO HTML

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
