let time1Pokemons = [];
let time2Pokemons = [];

let bancoDados = new BancoDados()

let botaoTime1 = document.querySelector('#botao-time-1');
let botaoTime2 = document.querySelector('#botao-time-2');
let botaoCalcular = document.querySelector('#botao-calcular')

let trocaJusta = '';

//Click botão time 1
botaoTime1.addEventListener("click", function(){
    let inputIdPokemonT1 = document.querySelector('#t1-pokemon');

    if (inputIdPokemonT1.value == 0){
        window.alert('Insira um Pokemon no time 1')
    } else if (inputIdPokemonT1.value <= 0 || inputIdPokemonT1.value > 150){
        window.alert('Insira o número de um Pokemon entre 1 e 150')
    } else if (time1Pokemons.length == 5) {
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
    } else if (time2Pokemons.length == 5) {
        window.alert('O time 2 está completo')
    } else {
        adicionarPokemonTime2();
    }
})

//Click botão calcular
botaoCalcular.addEventListener("click", function(){
    let baseExpT1 = somaBaseExp(time1Pokemons);
    let baseExpT2 = somaBaseExp(time2Pokemons);


    calculaTroca(baseExpT1, baseExpT2);

    let nomesPokemonsT1 = nomesPokemonsTime(time1Pokemons);
    let nomesPokemonsT2 = nomesPokemonsTime(time2Pokemons);

    
    console.log(trocaJusta);
    let registro = new Registro(nomesPokemonsT1, baseExpT1, nomesPokemonsT2, baseExpT2, trocaJusta)

    bancoDados.gravar(registro);
})

// Função que recebe dado do input do time um, busca o nome e id na api e insere no html pra visualização do usuário, adiciona a id no time1PokemonsId
function adicionarPokemonTime1(){
    let inputIdPokemonT1 = document.querySelector('#t1-pokemon');
    let tbody = document.querySelector('#tbody-time-1');

    let nome = recebeDadosPokemon(inputIdPokemonT1.value).then(data => {
        let linha = tbody.insertRow('tr')
        linha.insertCell(0).innerHTML = `${data.id} -${data.nome}`;
        time1Pokemons.push(data);
    })
    inputIdPokemonT1.focus();
}

// Função que recebe dado do input do time um, busca o nome e id na api e insere no html pra visualização do usuário, adiciona a id no time1PokemonsId
function adicionarPokemonTime2(){
    let inputIdPokemonT2 = document.querySelector('#t2-pokemon');
    let tbody = document.querySelector('#tbody-time-2');

        recebeDadosPokemon(inputIdPokemonT2.value).then(data => {
        let linha = tbody.insertRow('tr')
        linha.insertCell(0).innerHTML = `${data.id} -${data.nome}`;
        time2Pokemons.push(data);

    })
    inputIdPokemonT2.focus();
}


//função com foreach para montar time pokemon
function montaTimePokemon(time, variavel){
    let testando = recebeDadosPokemon(time).then(data => variavel.push(data));
}

//função que busca dados do pokemon na api
function recebeDadosPokemon(id){

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {

        let pokemon = new Pokemon (data.id, data.name, data.base_experience, data.front_default);
            return pokemon;
    })
}


//função que faz o cálculo de troca justa, sempre pegando o time de maior valor. 
function calculaTroca(t1, t2){

    if (t1 < t2) {
    
        let diferenca = (t2 * 0.9).toFixed(2);

        if(t1 > diferenca){
            trocaJusta = 'Troca Justa';
            window.alert('troca Justa')
        } else {
            trocaJusta = 'Troca Injusta';
            window.alert(`Troca Injusta. O valor do Base Experience do time 1 (${t1}) é muito baixo em relação ao time 2  (${t2}).`)
        }

     } else {

        let diferenca = (t1 * 0.9).toFixed(2);

        if(t2 > diferenca){
            trocaJusta = 'Troca Justa';
            window.alert(`Troca Justa`)
        } else {
            trocaJusta = 'Troca Injusta';
            window.alert(`Troca Injusta. O valor do Base Experience do time 2 (${t2}) é muito baixo em relação ao time 1  (${t1}).`)
        }
    }
}

// função que soma todas as base experience dos pokemons de um time.
function somaBaseExp(time){
    let resultadoSoma = 0;
    for (let i = 0; i < time.length; i++){
        let base_experience = time[i].baseExp;
        resultadoSoma = resultadoSoma + base_experience;
    }
    return resultadoSoma;
}

// função para fazer uma string com os nomes dos pokemons dos times
function nomesPokemonsTime(time){
    let nomes = '';

    for (let i = 0; i < time.length; i++){
        nomes = nomes + time[i].nome + ', '
    };

    return nomes;
}


//criar uma verificação para no máximo 6 pokemons para cada time
//criar a verifcaçãod de não achar pokemon na api


/*registro.time1[i].nome

function carregaListaComparacao(){
    bancoDados.recuperarPokemons()
}
*/