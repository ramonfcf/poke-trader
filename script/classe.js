class Pokemon {
    id
    nome
    baseExp
    foto
    constructor(id, nome, baseExp, foto) {
        this.id = id,
        this.nome = nome,
        this.baseExp = baseExp;
        this.foto = foto;
    }

}

class Registro{
    time1
    baseExpT1
    time2
    baseExpT2
    resultado
    constructor(time1Pokemons, baseExpSomaT1, time2Pokemons, baseExpSomaT2, resultado){
        this.time1 = time1Pokemons;
        this.baseExpT1 = baseExpSomaT1;
        this.time2 = time2Pokemons;
        this.baseExpT2 = baseExpSomaT2;
        this.resultado = resultado;
    }

    imprimir(){

    }

    trocaJusta(){
        
    }
}

class BancoDados {

    constructor() {
        let pokeId = localStorage.getItem('pokeId')

        if (pokeId === null){
            localStorage.setItem('pokeId', 0)
        }
    }

    verificarId(){
        let proximoId = localStorage.getItem('pokeId');
        return Number(proximoId) + 1;
    }


    gravar(registro){
        let id = this.verificarId();

        localStorage.setItem(id, JSON.stringify(registro))

        localStorage.setItem('pokeId', id);
    }

    recuperarPokemons(){
        let registros = [];

        let id =localStorage.getItem('pokeId')
        
        for(let i = 1; i <= id; i++){
            let registro = JSON.parse(localStorage.getItem(i));

            if(registro == null){
                continue
            }
            registro.id = i
            registros.push(registro);
        }

       return registros;
    }
}

function carregaListaTrades(){
    
    let registros = [];
    registros = bancoDados.recuperarPokemons();

    console.log(registros);

    let listaRegistros = document.getElementById('historicoTrade');


    registros.forEach(d => {
        let linha = listaRegistros.insertRow();

        linha.insertCell(0).innerHTML = `${d.time1}`;
        linha.insertCell(1).innerHTML = `${d.baseExpT1}`;
        linha.insertCell(2).innerHTML = `${d.time2}`;
        linha.insertCell(3).innerHTML = `${d.baseExpT2}`;
        linha.insertCell(4).innerHTML = `${d.resultado}`;
    });
}