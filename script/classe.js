class Pokemon {
    id
    nome
    baseExp
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
