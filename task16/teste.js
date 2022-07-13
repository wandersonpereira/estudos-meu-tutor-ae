import { ExtratoRepository } from "./ExtratoBancario/ExtratoRepository.js";
import { ClienteRepository } from "./Clientes/ClienteRepository.js";
import { SaldoClienteRepository } from "./SaldoCliente/SaldoClienteRepository.js";
const cliente = new ClienteRepository();
const cliente1 = cliente.buscarCliente("76534062002");

const extrato = new ExtratoRepository();
const extrato1 = extrato.buscarExtratoPorCpf("76534062002");

const saldoCliente = new SaldoClienteRepository(extrato1,"76534062002");

console.log("Limite para gastar", saldoCliente.buscarSaldoDisponivel());
console.log("Total Gasto", saldoCliente.buscarTotalGasto());