var time1 = document.querySelector('#botao-time-1');
let time2 = document.querySelector('#botao-time-2');


time1.addEventListener("click", function(){
    let time1Id = adicionarPokemonTime1();

    time1Id.forEach(element => {
        let baseEXp = recebeDadosPokemon(element);

        console.log(baseEXp)
    });

})

time2.addEventListener('click', function(){
    let time2Id = adicionarPokemonTime2();
})

function adicionarPokemonTime1(){
    let time1 = [];

    let pokemon1 = document.getElementById('t1-pokemon-1');
    let pokemon2 = document.getElementById('t1-pokemon-2');
    let pokemon3 = document.getElementById('t1-pokemon-3');
    let pokemon4 = document.getElementById('t1-pokemon-4');
    let pokemon5 = document.getElementById('t1-pokemon-5');
    let pokemon6 = document.getElementById('t1-pokemon-6');

    time1.push(pokemon1.value, pokemon2.value, pokemon3.value, pokemon4.value, pokemon5.value, pokemon6.value)
    
    return time1;
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
    
    let baseEX = data['base_experience']
    console.log(baseEX)

    return baseEX
})

       
}
   