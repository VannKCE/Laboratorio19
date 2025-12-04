fetch("https://pokeapi.co/api/v2/pokemon/25")
    .then(r => r.json())
    .then(data => {
        data.stats.forEach(s => {
            console.log(s.stat.name + ": " + s.base_stat);
        });
    });

    