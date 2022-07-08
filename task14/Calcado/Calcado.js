export class Calcado {
    tipoCalcado;
    modelo;
    marca;
    tamanho;
    cor;
    valor;
    
    constructor (modeloCalc, marcaCalc, tamanhoCalc, corCalc, valorCalcado) {
        this.modelo = modeloCalc;
        this.marca = marcaCalc;
        this.tamanho = tamanhoCalc;
        this.cor = corCalc;
        this.valor = valorCalcado;
    }
}