export class CheckOut {
    carrinho;
    pagamento;

    constructor (carrinhoCheckOut) {
        this.carrinho = carrinhoCheckOut;
    }

    finalizarPedido (pagamento) {
        const total = this.carrinho.calcularTotal();
        this.pagamento = pagamento;
        pagamento.efetuarPagamento (total);
    }

    imprimirComprovante() {
        console.log("Cliente", this.carrinho.cliente.nome);
        console.log("Vendedor", this.carrinho.vendedor.nome);

        console.table(this.carrinho.calcados);

        console.log(this.pagamento.tipoPagamento, this.pagamento.valor);

    }
}