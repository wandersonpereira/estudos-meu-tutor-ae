// Criar uma função que incremente um objeto (nome , preço) de lista escolar em um array;
// Imprimir a lista incrementada;
// ----
// Dado o item acima, criar uma função que some todos os valores dos materiais que estão na lista;
// ----
// Criar uma função que receba um valor X (Saldo do cartão) e a lista de materiais, com isso retornar
// Se o saldo é suficiente ou não para efetuar a compra dos materiais escolares

var lista = [];
function adicionarItemAList(item) {
    lista.push(item);
}

function somarTotalLista(lista) {
    var soma = 0;
    lista.forEach(function (item) {
        soma += item.preco;
    });

    return soma;
}

function efetuarPagamento(saldoEmConta, lista) {
    const saldoTotal = somarTotalLista(lista);
    if (saldoEmConta >= saldoTotal) {
        return "Compra aprovada com sucesso";
    }

    return "Saldo insuficiente";
}

adicionarItemAList({nome: "Caderno", preco: 100.00});
adicionarItemAList({nome: "Caneta", preco: 5.00});
adicionarItemAList({nome: "Apontador", preco: 100.00});
adicionarItemAList({nome: "Borracha", preco: 2.00});

const pagar = efetuarPagamento(300, lista);
console.log(pagar);
// const soma = somarTotalLista(lista);
// console.log(soma);
// console.log(lista);