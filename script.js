class Pokemon {
    id;
    nome;
    baseExp;
    constructor(id, nome, baseExp) {
        this.id = id,
        this.nome = nome,
        this. baseExp = baseExp;

        console.log(this)
    }

}

class Registro{
    time1
    baseExpT1
    time2
    baseExpT2

    constructor(time1, baseExpSomaT1, time2, baseExpSomaT2){
        this.time1 = time1;
        this.baseExpT1 = baseExpSomaT1;
        this.time2 = time2;
        this.baseExpT2 = baseExpSomaT2;
    }

    imprimir(){

    }
}

let registro = new Registro()

registro.time1[i].nome

class BancoDados {

    constructor() {
        let id = localStorage.getItem('id')

        if (id === null){
            localStorage.setItem('id', 0)
        }
    }

    verificarId(){
        let proximoId = localStorage.getItem('id');
        return Number(proximoId) + 1;
    }


    gravar(pokemons){
        let id = this.verificarId();

        localStorage.setItem(id, JSON.stringify(pokemons))

        localStorage.setItem('id', id);
    }

    recuperarPokemons(){
        let pokemonsTime = [];

        let id = localStorage.getItem('id');

        for(let i = 1; i<= id; i++){
            let time1 = JSON.parse(localStorage.getItem(i))

            if (time1 == null) {
                continue
            }
            pokemonsTime.push(time1);
        }

        console.log(pokemonsTime)
    }

}

function carregaListaComparacao(){
    bancoDados.recuperarPokemons()

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
    console.log(time2Id);
})

function adicionarPokemonTime1(){

    let pokemon1 = document.getElementById('t1-pokemon-1');
    let pokemonsT1 = new PokemonsT1(pokemon1.value, pokemon2.value, pokemon3.value, pokemon4.value, pokemon5.value, pokemon6.value);
    bancoDados.gravar(pokemonsT1);
}

function adicionarPokemonTime2(){
    let time2 = [];
    let pokemon1 = document.getElementById('t2-pokemon-1');

    time2.push(pokemon1.value, pokemon2.value, pokemon3.value, pokemon4.value, pokemon5.value, pokemon6.value);

    return time2;
}


 let teamTestePokemon = ['1', '22', '44'];


let arrayPokemons = [];

function montaTimePokemon(time){
        time.forEach(element => {
        recebeDadosPokemon(element).then(data => arrayPokemons.push(data));
    });
}

montaTimePokemon(teamTestePokemon);

function recebeDadosPokemon(id){
    
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {

        let pokemon = new Pokemon (data.id, data.name, data.base_experience);
            return pokemon;
    })

}

console.log(arrayPokemons);


/*
let tbody = document.getElementById('tbody-time-1');
let linha = tbody.insertRow('tr')
linha.insertCell(0).innerHTML = pokemon.nome;
*/