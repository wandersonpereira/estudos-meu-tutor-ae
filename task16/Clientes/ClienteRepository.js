import * as Cliente from "./Clientes.json"; 

export class ClienteRepository {
    listar(){
        return Cliente.default;
    }
    
    buscarCliente(identificador){
       return Cliente.default.filter(
            function(cliente){
                if(cliente.cpf == identificador){
                   return true;
                }
                return false;
            }
        )[0] || null;
    }
}