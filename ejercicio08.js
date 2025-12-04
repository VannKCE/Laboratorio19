console.log("Ejercicio 08");
const randomId = Math.floor(Math.random() * 898) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(res => res.json())
    .then(data => console.log("Pokémon aleatorio:", data.name));


    