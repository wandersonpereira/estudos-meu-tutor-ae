// Criar uma variável que contenha o saldo de débito de uma conta.

// Criar duas variáveis com os valores de compra de um cliente, 
// onde cada uma dessas variáveis tenha um valor de uma compra.

// Imprimir o total do valor gasto;
// Imprimir o saldo restante dado as compras que foram realizadas;
// E caso o saldo total seja menor que 0 Imprimir a mensagem "você está usando o cheque especial"

var saldo = 200;

var gasto1 = 50;
var gasto2 = 300;

// função == ação
const gastoTotal = gasto1 + gasto2;
const saldoTotalEmConta = saldo - gastoTotal;

console.log(gastoTotal);
console.log(saldoTotalEmConta);

if (saldoTotalEmConta < 0) {
    console.log("você está usando o cheque especial");
}