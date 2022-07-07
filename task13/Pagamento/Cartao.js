import { TipoPagamento } from "./TipoPagamento.js";

export class Cartao extends TipoPagamento {
    tipoPagamento = "Cartao";

    transacionarPagamento(valorPagamento) {
        console.log(
            "Bandeira", "Visa",
            "Valor", valorPagamento
        )
    }
}