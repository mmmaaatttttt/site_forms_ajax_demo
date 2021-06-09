console.log("page loaded");

const pokemonForm = document.querySelector("form");

// 1. control form submit behavior with JS
pokemonForm.addEventListener("submit", getPokemon);

async function getPokemon(event) {
  event.preventDefault();
  const pokemonInput = event.target.pokemon;
  const pokemon = pokemonInput.value;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  console.log("apiUrl is", apiUrl);
  
  // 2. On form submit, go to the pokemon API 
  const response = await fetch(apiUrl);
  const responseData = await response.json();
  console.log("response stuff", response, responseData);
  // 3. Get data on the pokemon and
  //   put the image of the pokemon on the page
}