import { Pagamento } from "./Pagamento.js";

export class Pix extends Pagamento {
    tipoPagamento = "Pix";

    efetuarPagamento (valor) {
        this.valor = valor;

        console.log ("Transferencia Efetuada Para X-Calçados no valor de:", valor);
    }
}
