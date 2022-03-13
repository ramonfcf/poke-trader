class PokemonsT1 {
    constructor(poke1, poke2, poke3, poke4, poke5, poke6) {
        this.poke1 = poke1
        this.poke2 = poke2
        this.poke3 = poke3
        this.poke4 = poke4
        this.poke5 = poke5
        this.poke6 = poke6
    }


}

class BancoDados {

    constructor(){
        let id = localStorage.getItem('id');
        if (id === null){
            localStorage.setItem('id', 0)
        }
    }
    gravar(pokemons){
        localStorage.setItem('pokemonsT1', JSON.stringify(pokemons))
    }

    verificarId(){
        let proximoId = localStorage.getItem('id');

    }
}

let bancoDados = new BancoDados()


var time1 = document.querySelector('#botao-time-1');
let time2 = document.querySelector('#botao-time-2');

let pokemon = [];

//Click botão time 1
time1.addEventListener("click", function(){
    let time1Id = adicionarPokemonTime1();

})
//Click botão time 2
time2.addEventListener('click', function(){
    let time2Id = adicionarPokemonTime2();
})

function adicionarPokemonTime1(){

    let pokemon1 = document.getElementById('t1-pokemon-1');
    let pokemon2 = document.getElementById('t1-pokemon-2');
    let pokemon3 = document.getElementById('t1-pokemon-3');
    let pokemon4 = document.getElementById('t1-pokemon-4');
    let pokemon5 = document.getElementById('t1-pokemon-5');
    let pokemon6 = document.getElementById('t1-pokemon-6');

    let pokemonsT1 = new PokemonsT1(pokemon1.value, pokemon2.value, pokemon3.value, pokemon4.value, pokemon5.value, pokemon6.value);
    bancoDados.gravar(pokemonsT1);
}

function adicionarPokemonTime2(){
    let time2 = [];
    let pokemon1 = document.getElementById('t2-pokemon-1');
    let pokemon2 = document.getElementById('t2-pokemon-2');
    let pokemon3 = document.getElementById('t2-pokemon-3');
    let pokemon4 = document.getElementById('t2-pokemon-4');
    let pokemon5 = document.getElementById('t2-pokemon-5');
    let pokemon6 = document.getElementById('t2-pokemon-6');

    time2.push(pokemon1.value, pokemon2.value, pokemon3.value, pokemon4.value, pokemon5.value, pokemon6.value);

    return time2;
}



function recebeDadosPokemon(id){
    let pokemons = [];

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
    let pokemon = {
        nome: data.name,
        baseEX: data.base_experience,
       // img: data['front_default'],
    } 
        pokemons.push(pokemon);
    })
  
        return pokemons;
}


/*
let tbody = document.getElementById('tbody-time-1');
let linha = tbody.insertRow('tr')
linha.insertCell(0).innerHTML = pokemon.nome;
*/