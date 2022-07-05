// var const
// numericas, boleanas, strings, array
// + (mais), - (menos), * (vezes), / (divisão)
// if
// for/ while
const listaCompras = [
    "Arroz",
    "bolacha", 
    "coca", 
    "leite"
];
const listaComprasValor = [
    25.20,
    2.05,
    8.80,
    3.75
];

// 25.20 + 2.50 + 8.80 + 3.75 = x;
var totalCompra = 0;
for (var index = 0; index < listaComprasValor.length; index++) { // index = 4
    totalCompra = totalCompra + listaComprasValor[index];
}

console.log("Valor total é igual a: ", totalCompra);

for (var index = 0; index <= 3; index++) { // index = 4
    console.log(listaCompras[index]); // leite
    console.log(listaComprasValor[index]); // 3.00
}

var index = 0;
while (index <= 3) {
    console.log(listaCompras[index], listaComprasValor[index]); 
    index++;
}

