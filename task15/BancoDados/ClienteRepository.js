import * as clientes from "./dados.json";

export class ClienteRepository {
    listarClientes() {
        return clientes.default;
    }

    filtrarClientePorNome(nome) {
        return clientes.default.filter((cliente, index) => cliente.nome === nome);
    }
}