/* This function loads pokemon data from the Pokemon API*/
function fetchPokemonJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data; // response.data instead of response.json() with fetch
    })
    .then(function(character) {
      console.log('data decoded from JSON:', character);

      // Build a block of HTML
      const characterHtml = `
        <p><strong>${character[0].character}</strong></p>
        <p>${character[0].quote}</p>
        <img src=${character[0].image} />
      `;
      document.querySelector('#simpson').innerHTML = characterHtml;
    });
}

fetchPokemonJSON();