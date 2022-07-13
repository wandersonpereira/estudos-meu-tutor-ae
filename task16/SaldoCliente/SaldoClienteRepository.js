import * as SaldoCliente from "./SaldoCliente.json";

export class SaldoClienteRepository {
    extratoBancario;
    cpfCliente;
    
    constructor(extratoBancarioSaldo,cpfClienteSaldo){
        this.extratoBancario = extratoBancarioSaldo;
        this.cpfCliente = cpfClienteSaldo;
    }

    buscarSaldoDisponivel(){
        var somaExtrato = 0;
        this.extratoBancario.forEach(
            function(extrato){
                somaExtrato = somaExtrato + extrato.valor;
            }
        );

        const saldoCliente = SaldoCliente.default.filter(
            (saldo) => saldo.cpf == this.cpfCliente
        )[0];

        return saldoCliente.limiteCredito - somaExtrato;
    }
    buscarTotalGasto(){
        var totalGasto  = 0;
        this.extratoBancario.forEach(
            (extrato) => totalGasto += extrato.valor
        );
        return totalGasto;
    }
}