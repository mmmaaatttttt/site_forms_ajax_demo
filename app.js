console.log("page loaded");

const pokemonForm = document.querySelector("form");
const pokemonArea = document.querySelector("#pokemon-area");

// 1. control form submit behavior with JS
pokemonForm.addEventListener("submit", getPokemon);

async function getPokemon(event) {
  event.preventDefault();
  const pokemonInput = event.target.pokemon;
  const pokemon = pokemonInput.value;
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  
  // 2. On form submit, go to the pokemon API 
  const response = await fetch(apiUrl);
  const responseData = await response.json();

  // 3. Get data on the pokemon and
  //   put the image of the pokemon on the page
  generateHTML(responseData);
}

function generateHTML(pokeData) {
  pokemonArea.innerHTML = `
    <h1>${pokeData.name}</h1>
    <p>Height: ${pokeData.height}</p>
    <p>Weight: ${pokeData.weight}</p>
    <img src="${pokeData.sprites.front_default}" alt="${pokeData.name} front default" />
  `;
} 