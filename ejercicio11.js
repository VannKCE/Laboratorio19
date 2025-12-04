function buscar() {
    const texto = document.getElementById("pokeInput").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${texto}`)
        .then(r => r.json())
        .then(data => {
            const tipos = data.types.map(t => t.type.name);

            document.getElementById("info").innerHTML = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}">
                <p>Tipos: ${tipos.join(", ")}</p>
            `;
        })
        .catch(() => {
            document.getElementById("info").innerHTML = "<p>Pokémon no encontrado</p>";
        });
}
