function buscarPokemon() {
    const id = document.getElementById("pokemonId").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json())
        .then(data => {
            document.getElementById("resultado").innerHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}">
                <p>ID: ${data.id}</p>
                <p>Peso: ${data.weight}</p>
                <p>Altura: ${data.height}</p>
                <p>Habilidades:</p>
                <ul>${data.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}</ul>
            `;
        })
        .catch(() => {
            document.getElementById("resultado").innerHTML = "<p>Pokémon no encontrado</p>";
        });
}
