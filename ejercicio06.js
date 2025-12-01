console.log("Ejercicio 06");
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => res.json())
    .then(data => console.log(data.sprites.front_default));
