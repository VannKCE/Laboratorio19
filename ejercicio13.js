function buscarStats() {
    const nombre = document.getElementById("poke").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(r => r.json())
        .then(data => {
            let html = `
                <h3>${data.name.toUpperCase()}</h3>
                <img src="${data.sprites.front_default}">
                <h4>Estadísticas base</h4>
                <ul>
            `;

            data.stats.forEach(s => {
                html += `<li>${s.stat.name}: ${s.base_stat}</li>`;
            });

            html += "</ul>";
            document.getElementById("stats").innerHTML = html;
        })
        .catch(() => {
            document.getElementById("stats").innerHTML = "<p>Pokémon no encontrado</p>";
        });
}
