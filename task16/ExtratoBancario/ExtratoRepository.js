import * as ExtratoBancario from "./ExtratoBancario.json"; 

export class ExtratoRepository {
    
    buscarExtratoPorCpf(cpf){
       return ExtratoBancario.default.filter(
            function(extrato){
                if(extrato.cpf == cpf){
                   return true;
                }
                return false;
            }
        ) || [];
    }
}