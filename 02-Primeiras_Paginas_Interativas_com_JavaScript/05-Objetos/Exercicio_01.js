/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKm;

    constructor(marca, cor, gastoMedioCombustivelPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
    }

    gastoComCombustivel(kmRodado, precoCombustivel) {
        let valorGasto = precoCombustivel * this.gastoMedioCombustivelPorKm * kmRodado;

        return "R$ " + valorGasto.toFixed(2) + " Reais";
    }


}

    const corssa = new Carro('Classic', 'Preto', 1/12);
    console.log(corssa);
    console.log((corssa.gastoComCombustivel(70, 5)));

