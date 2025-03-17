// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API 
// https://lanciweb.github.io/demo/api/pictures/
// sfruttando la risposta per generare dinamicamente in pagina una serie di foto

// inizializzare la variabile contenente API pictures
const uri = 'https://lanciweb.github.io/demo/api/pictures/';

 // fare la chiamata API
axios.get(uri)
    .then((response) => {
        console.log(response);

        // ottenere l'array di oggetti e salvarlo in una variabile
        const arrayElement = response.data;

        // iterare l'array
        for (let i = 0; i < arrayElement.length; i++) {
            
            // ottenere il singolo oggetto e salvarlo in una variabile
            const currentArray = arrayElement[i];

            // ottenere l'url delle immagini e salvarlo in una variabile
            const {url: imageUrl, date: imageDate, title: imageTitle} = currentArray;
            console.log(imageUrl,imageDate,imageTitle);
            
            // prendere elemento html row e salvarlo in una variabile
            const rowElement = document.querySelector('.row');
            
            // aggiungere elemento html per creare le card
            rowElement.innerHTML += ` <div class="col">
               <img src="img/pin.svg" class="pin-img" alt="Pin rosso">
               <div class="card-photo">
                  <img src="${imageUrl}" alt="${imageTitle}"> 
                </div>
                <div class="card-info">
                  <div class= "date">${imageDate}</div>
                  <h3 class= "title">${imageTitle}</div>
                </div>
            </div>`
        }

    })
    .catch (error => {
        console.log('Errore!');
    })

