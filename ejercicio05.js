console.log("Ejercicio 05");
async function obtenerPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    const data = await res.json();
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
}

obtenerPokemon();

