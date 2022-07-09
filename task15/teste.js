// var const
// json
// numericas, boleanas, strings, array, objetos, classes, funções
// + (mais), - (menos), * (vezes), / (divisão)
// if
// for/ while / map / filter / foreach / push
// import * as clientes from "./dadosClientes.json";
// const clientes = required("./dadosClientes.json");
// console.log(clientes);

import { ClienteRepository } from "./BancoDados/ClienteRepository.js";
import { Cliente } from "./Cliente/Cliente.js";

const clienteRepository = new ClienteRepository();
const clientes = clienteRepository.listarClientes();

const listaClientesClass = [];
clientes.forEach((objCliente) => {
    const clienteClass = new Cliente(objCliente);
    if (clienteClass.eMaiorDeIdade()) {
        listaClientesClass.push( clienteClass );
    }
});
console.log(listaClientesClass);