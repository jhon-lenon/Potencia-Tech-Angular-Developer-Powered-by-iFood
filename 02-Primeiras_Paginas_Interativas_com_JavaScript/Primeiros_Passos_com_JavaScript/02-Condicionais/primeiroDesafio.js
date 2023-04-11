/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 5 variaveis. sendo elas:
      1 - Preço do Etanol;  
      2 - Preço do combustivel;
      3 - O tipo de combustível que está no seu carro;
      4 - Gasto médio de combustível do carro por KM;
      5 - Distância em KM por viagem;

    Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoKmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumido = distanciaEmKm / gastoKmPorLitro;

if (tipoCombustivel === 'Etanol') {
  let valorGasto = litrosConsumido * precoEtanol;
  console.log(valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Gasolina') {
  let valorGasto = litrosConsumido * precoGasolina;
  console.log(valorGasto.toFixed(2));
}
