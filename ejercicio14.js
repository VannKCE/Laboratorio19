let pokemones = [];
let inicio = 0;

async function cargarPokemones() {
    for (let i = 1; i <= 12; i++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await resp.json();
        pokemones.push(data);
    }

    mostrarPokemones();
}

function mostrarPokemones() {
    const contenedor = document.getElementById("cards");
    contenedor.innerHTML = "";
    for (let i = inicio; i < inicio + 3; i++) {
        if (pokemones[i]) {
            const p = pokemones[i];

            contenedor.innerHTML += `
                <div class="card">
                    <h3>${p.name}</h3>
                    <img src="${p.sprites.front_default}">
                    <p>ID: ${p.id}</p>
                </div>
            `;
        }
    }
}

document.getElementById("btnSiguiente").addEventListener("click", () => {
    if (inicio + 3 < pokemones.length) {
        inicio += 3;
        mostrarPokemones();
    }
});

document.getElementById("btnAnterior").addEventListener("click", () => {
    if (inicio - 3 >= 0) {
        inicio -= 3;
        mostrarPokemones();
    }
});

cargarPokemones();
