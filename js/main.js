// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API 
// https://lanciweb.github.io/demo/api/pictures/
// sfruttando la risposta per generare dinamicamente in pagina una serie di foto

const uri = 'https://lanciweb.github.io/demo/api/pictures/';

axios.get(uri)
    .then((response) => {
        console.log(response);


    })
    .catch (error => {
        console.log('Errore!');
    })

