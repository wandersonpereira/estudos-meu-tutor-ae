export class Pagamento {
    valorPagamento = 0;
    orcamento;

    constructor (orcamentoPagamento) {
        this.orcamento = orcamentoPagamento;
    }

    efetuarPagamento(tipoPagamento) {
        this.valorPagamento = this.orcamento.calcularTotalOrcamento();
        tipoPagamento.transacionarPagamento(this.valorPagamento);
    }
}