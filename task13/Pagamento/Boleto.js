import { TipoPagamento } from "./TipoPagamento.js";

export class Boleto extends TipoPagamento {
    tipoPagamento = "Boleto";

    transacionarPagamento(valorPagamento) {
        console.log(
            "Boleto", "123456789456412316549874654654654654654",
            "Valor", valorPagamento
        )
    }
}