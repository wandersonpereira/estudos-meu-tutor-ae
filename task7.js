// var, const
// numericas, boleanas, strings, array, function, objeto
// + (mais), - (menos), * (vezes), / (divisão)
// if
// for/ while

const carroWanderson = {
    ano: 2018,
    cor: "branco",
    modelo: "EcoSport",
    marca: "Ford",
    eZeroKM: false
};

const carroEduardor = {
    ano: 2012,
    cor: "branco",
    modelo: "Siena",
    marca: "Fiate",
    eZeroKM: false
};

const garagem = [carroWanderson, carroEduardor];

const carroAngel = {
    ano: 2022,
    cor: "branco",
    modelo: "X6",
    marca: "BMW",
    eZeroKM: false
};

garagem.push(carroAngel);

// function filtrarCarrosPorAno(listaCarros, anoFiltro) {
//     const listaTemporaria = [];
//     for(var index = 0; index < listaCarros.length; index++) {
//         if (listaCarros[index].ano >= anoFiltro) {
//             listaTemporaria.push(listaCarros[index]);
//         }
//     }

//     return listaTemporaria;
// }

function filtrarCarrosPorAno(listaCarros, anoFiltro) {
    return listaCarros.filter(function(carro, index) {
        return carro.ano >= anoFiltro;
    });
}

const carrosFiltrados = filtrarCarrosPorAno(garagem, 2022);
console.log(carrosFiltrados);