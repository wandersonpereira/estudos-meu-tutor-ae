import {Carro} from "./AutoMovel/Carro.js";
import { Orcamento } from "./Orcamento/Orcamento.js";
import { Reparo } from "./Orcamento/Reparo.js";
import { Troca } from "./Orcamento/Troca.js";
import { Boleto } from "./Pagamento/Boleto.js";
import { Cartao } from "./Pagamento/Cartao.js";
import { Pagamento } from "./Pagamento/Pagamento.js";

const carro = new Carro(2018, "X6", "Branca");
const orcamento = new Orcamento(carro);
const trocaOleo = new Troca(5000);
const desamacarLataria = new Reparo(15000);

orcamento.adicionarDefeito(trocaOleo);
orcamento.adicionarDefeito(desamacarLataria);

orcamento.fecharOrcamento(6);

const pagamento = new Pagamento(orcamento);
const pagamentoCartao = new Cartao();

orcamento.imprimirOcamento();

pagamento.efetuarPagamento(pagamentoCartao);
