// var, const
// numericas, boleanas, strings, array, function
// + (mais), - (menos), * (vezes), / (divisão)
// if
// for/ while

function somarValores(valor1, valor2) {
    console.log(valor1 + valor2);
}

// console.log("oi", 10, []);

somarValores(6, 10);
somarValores(5, 5);
somarValores(3, 3);
somarValores(8, 100);
somarValores(-8, 10);
somarValores(5, 1000);
// somarValores();



// Receber uma lista de valores e cacular 
// a média de todos os valores existente na lista
function cacularMedia(lista) {
    var soma = 0;
    for (var index = 0; index < lista.length; index++) {
        soma = soma + lista[index];
    }

    return soma / lista.length;
}
const listaCalc = [1,2,5,6,10];
const media = cacularMedia(listaCalc);
console.log(media);