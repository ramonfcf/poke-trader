class Pokemon {
    id;
    nome;
    baseExp;
    constructor(id, nome, baseExp) {
        this.id = id,
        this.nome = nome,
        this. baseExp = baseExp;
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

let arrayPokemons = []; //array de pokemons buscados na api de acordo com o id inserido no input do jogador
let time1PokemonsId = [];
let time2PokemonsId = [];


let registro = new Registro()

/*registro.time1[i].nome

function carregaListaComparacao(){
    bancoDados.recuperarPokemons()
}
*/

let bancoDados = new BancoDados()




var botaoTime1 = document.querySelector('#botao-time-1');
let botaoTime2 = document.querySelector('#botao-time-2');

let pokemon = [];

//Click botão time 1
botaoTime1.addEventListener("click", function(){
    let inputIdPokemonT1 = document.querySelector('#t1-pokemon');

    if (inputIdPokemonT1.value == 0){
        window.alert('Insira um Pokemon no time 1')
    } else if (inputIdPokemonT1.value <= 0 || inputIdPokemonT1.value > 150){
        window.alert('Insira o número de um Pokemon entre 1 e 150')
    } else if (time1PokemonsId.length == 5) {
        window.alert('O time 1 está completo')
    }else {
        adicionarPokemonTime1();
    }
})




//Click botão time 2
botaoTime2.addEventListener("click", function(){
    let inputIdPokemonT2 = document.querySelector('#t2-pokemon');

    if (inputIdPokemonT2.value == 0){
        window.alert('Insira um Pokemon no Time 2')
    } else if (inputIdPokemonT2.value <= 0 || inputIdPokemonT2.value > 150){
        window.alert('Insira o número de um Pokemon entre 1 e 150')
    } else if (time2PokemonsId.length == 5) {
        window.alert('O time 2 está completo')
    } else {
        adicionarPokemonTime2();
    }
})



function adicionarPokemonTime1(){
    let inputIdPokemonT1 = document.querySelector('#t1-pokemon');
    var pokemonId = inputIdPokemonT1.value;
    let tbody = document.querySelector('#tbody-time-1');

    let nome = recebeDadosPokemon(inputIdPokemonT1.value).then(data => {
        let linha = tbody.insertRow('tr')
        linha.insertCell(0).innerHTML = `${data.nome} - ${data.id}`;
    })

    time1PokemonsId.push(pokemonId);
    inputIdPokemonT1.focus();

    console.log(time1PokemonsId)
}




function adicionarPokemonTime2(){
    let inputIdPokemonT2 = document.querySelector('#t2-pokemon');
    var pokemonId = inputIdPokemonT2.value;
    let tbody = document.querySelector('#tbody-time-2');

    let nome = recebeDadosPokemon(inputIdPokemonT2.value).then(data => {
        let linha = tbody.insertRow('tr')
        linha.insertCell(0).innerHTML = data.nome;
    })

    time2PokemonsId.push(pokemonId);
    inputIdPokemonT2.focus();

    console.log(time2PokemonsId)
}








//let poketeam = ['22', '37', '45'];


//montaTimePokemon(poketeam);




function montaTimePokemon(time){
        time.forEach(element => {
        recebeDadosPokemon(element).then(data => arrayPokemons.push(data));
    });
}


function recebeDadosPokemon(id){

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {

        let pokemon = new Pokemon (data.id, data.name, data.base_experience);
            return pokemon;
    })
}

//console.log(arrayPokemons)

