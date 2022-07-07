import { Concerta } from "./Concerta.js";

export class Orcamento {
    listaDefeitos = [];
    autoMovel;
    concerto;

    constructor(autoMovelOrcamento) {
        this.autoMovel = autoMovelOrcamento;

    }

    adicionarDefeito(defeito) {
        this.listaDefeitos.push(defeito);
    }

    fecharOrcamento(quantidadeDias) {
        this.concerto = new Concerta(quantidadeDias);
    }

    calcularTotalOrcamento() {
        var soma = 0;
        this.listaDefeitos.forEach(
            function(defeito, index) {
                soma = soma + defeito.valor;
            }
        );

        return soma;
    }

    imprimirOcamento () {
        console.log(this.autoMovel.tipoAutoMovel);
        console.log("Previsto para:", this.concerto.dataEstimada);

        console.table(this.listaDefeitos);
    }
}