let pokemons = [
    {nome:'bulbasaur', base_experience: 64},
    {nome:'ivysaur', base_experience: 142},
    {nome:'venusaur', base_experience: 263},
    {nome:'charmander', base_experience: 62},
    {nome:'charmeleon', base_experience: 142},
    {nome:'charizard', base_experience: 267},
    {nome:'squirtle', base_experience: 63}
]


let team1 = [pokemons[2], pokemons[4], pokemons[5]];
let team2 = [pokemons[0], pokemons[5], pokemons[2]];


let valorBaseExpT1 = somaBaseExp(team1);  // 473
let valorBaseExpT2 = somaBaseExp(team2);  // 672

console.log(valorBaseExpT1)
console.log(valorBaseExpT2)


function calculaTroca(t1, t2){
    if (t1 < t2) {
        let diferenca = (t2 * 0.9).toFixed(2);
        if(t1 > diferenca){
            console.log('troca Justa')
        } else {
            console.log('troca injusta')
        }
    } else {
        let diferenca = (t1 * 0.9).toFixed(2);
        if(t2 > diferenca){
            console.log('troca Justa')
        } else {
            console.log('troca injusta')
        }
    }
}


function somaBaseExp(time){
    let resultadoSoma = 0;

    for (let i = 0; i < time.length; i++){
        let baseExp = time[i].base_experience;
        resultadoSoma = resultadoSoma + baseExp;
    }

    return resultadoSoma;
}

calculaTroca(valorBaseExpT1, valorBaseExpT2)



//criar uma verificação para no máximo 6 pokemons para cada time
//criar a verifcaçãod de não achar pokemon na api