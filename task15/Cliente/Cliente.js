export class Cliente {
    nome;
    idade;
    altura;
    endereco;
    sexo;
   
    constructor(objetoCliente) {
        this.nome = objetoCliente.nome;
        this.idade = objetoCliente.idade;
        this.altura = objetoCliente.altura;
        this.endereco = objetoCliente.endereco;
        this.sexo = objetoCliente.sexo;
    }

    eMaiorDeIdade() {
        return this.idade >= 18;
    }
}