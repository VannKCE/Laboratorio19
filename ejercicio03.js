console.log("Ejercicio 03");

const id = prompt("Ingresa el ID de un Pokémon: ");
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => console.log("Nombre:", data.name))
    .catch(err => console.log("Error:", err));

