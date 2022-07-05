// ----
// Criar uma lista de objetos Alunos/Notas;
// Criar uma função que retorne quais alunos tiraram acima de 80;
// Imprirmir nome / nota dos alunos que tiraram acima de 80;
// ----
// Criar uma função que incremente um objeto (nome , preço) de lista escolar em um array;
// Imprimir a lista incrementada;
// ----
// Dado o item acima, criar uma função que some todos os valores dos materiais que estão na lista;
// ----
// Criar uma função que receba um valor X (Saldo do cartão) e a lista de materiais, com isso retornar
// Se o saldo é suficiente ou não para efetuar a compra dos materiais escolares

const listaAlunos = [
    {aluno: "Wanderson", nota: 50},
    {aluno: "Alice", nota: 90},
    {aluno: "Eduardo", nota: 81},
    {aluno: "Angel", nota: 90},
];

function retornarNotasMaioresQue80(lista) {
    return lista.filter(function (item, index) {
        return item.nota > 85;
    });
}

const notasAcima80 = retornarNotasMaioresQue80(listaAlunos);
notasAcima80.forEach(function(item, index) {
    console.log("Nome:", item.aluno, "Nota:", item.nota);
});

// forEach, filter
// for(var i = 0; i < notasAcima80.length; i++) {
//     console.log("Nome:", notasAcima80[i].aluno, "Nota:", notasAcima80[i].nota);
// }