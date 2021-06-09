console.log("page loaded");

const pokemonForm = document.querySelector("form");

// 1. control form submit behavior with JS
pokemonForm.addEventListener("submit", getPokemon);

function getPokemon(event) {
  event.preventDefault();
  const pokemonInput = event.target.pokemon;
  const pokemon = pokemonInput.value;
  console.log("pokemon is", pokemon);
  // 2. On form submit, go to the pokemon API 
  // 3. Get data on the pokemon and
  //   put the image of the pokemon on the page
}