// var, const
// numericas, boleanas, strings, array, function, objeto, classes
// + (mais), - (menos), * (vezes), / (divisão)
// if, else
// for / while / filter/ forEach

class Camiseta {
    cor;
    tamanho;
    preco;
    marca;
    quantidade;

    constructor(corCami, tamanhoCami, precoCami, marcaCami, quantidadeCami) {
        this.cor = corCami;
        this.tamanho = tamanhoCami;
        this.preco = precoCami;
        this.marca = marcaCami;
        this.quantidade = quantidadeCami;
    }

    getCor() {
        return this.cor;
    }

    getTamanho() {
        return this.tamanho;
    }

    getPreco() {
        return this.preco;
    }

    getMarca() {
        return this.marca;
    }

    getQuantidade() {
        return this.quantidade;
    }

    setCor(corCami) {
        this.cor = corCami;
    }

    setTamanho(tamanhoCami) {
        this.tamanho = tamanhoCami;
    }

    setPreco(precoCami) {
        this.preco = precoCami;
    }

    setMarca(marcaCami) {
        this.marca = marcaCami;
    }
    
    setQuantidade(quantidadeCami) {
        this.quantidade = quantidadeCami;
    }

    imprimir() {
        console.log(this);
    }

    calcularValorTotal() {
        return this.getPreco() * this.getQuantidade();
    }
}

class Carrinho {
    camisas = [];
    adicionarCamisaAoCarrinho (camisa) {
        this.camisas.push(camisa);
    }

    calcularValorTotalDoCarrinho() {
        var total = 0;
        this.camisas.forEach(function(item, index) {
            total += item.calcularValorTotal();
        });

        return total;
    }
}

const camisaVingadores = new Camiseta("azul", "M", 50, "Nike", 5);
const camisaLigaDaJustica = new Camiseta("preta", "G", 100, "Levis", 3);

const carrinho = new Carrinho();
carrinho.adicionarCamisaAoCarrinho(camisaVingadores);
carrinho.adicionarCamisaAoCarrinho(camisaLigaDaJustica);

console.log(carrinho.calcularValorTotalDoCarrinho());