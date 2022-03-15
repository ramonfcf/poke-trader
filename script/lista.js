
let url = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const pokemonsPromises = [];


for (i = 1; i <= 150; i++){
    pokemonsPromises.push(fetch(url(i)).then(response => response.json()))
}

Promise.all(pokemonsPromises)
    .then(pokemons => {
        for (i = 0; i < 150; i++){
            let lista = document.getElementById('lista__pokemons');
            let linha = lista.insertRow();
            linha.classList.add('principal__tabela-historicos')
            linha.insertCell(0).innerHTML = `${pokemons[i].id} - `;
            linha.insertCell(1).innerHTML = `${pokemons[i].name}`;
            linha.insertCell(2).innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[i].id}.png"/>`
        }
 });
         