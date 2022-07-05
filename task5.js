// Receber uma lista de valores e cacular 
// a média de todos os valores existente na lista
const lista = [
    1,
    20,
    50,
    100,
    80,
    60,
    2,
    12,
    500
];

var soma = 0;
for (var index = 0; index < lista.length; index++) {
    soma = soma + lista[index];
}

const media = soma / lista.length;
console.log(media);