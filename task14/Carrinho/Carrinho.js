export class Carrinho {
    calcados = [];
    vendedor;
    cliente;
    constructor (vendedorComp, clienteComp ) {
        this.vendedor = vendedorComp; 
        this.cliente = clienteComp;  
    }

    adicionarItemaoCarrinho(item) {
        this.calcados.push(item);
    }

    calcularTotal() {
        var soma = 0;
        this.calcados.forEach(function(calcado, index) {
            soma = soma + calcado.valor;
        });
        return soma;
    }
}