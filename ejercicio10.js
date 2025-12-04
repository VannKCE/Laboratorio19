async function cargarPokemones() {
    let lista = [];

    for (let i = 1; i <= 10; i++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await resp.json();
        lista.push(data);
    }

    mostrar(lista);
}

function mostrar(lista) {
    const div = document.getElementById("contenedor");

    lista.forEach(poke => {
        div.innerHTML += `
            <div class="card">
                <h3>${poke.name}</h3>
                <img src="${poke.sprites.front_default}">
                <p>ID: ${poke.id}</p>
            </div>
        `;
    });
}

cargarPokemones();

