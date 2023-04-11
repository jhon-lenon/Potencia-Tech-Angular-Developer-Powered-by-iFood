/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variaveis. sendo elas:
      1 - Preço do combustivel;
      2 - Gasto médio de combustivel do carro por KM;
      3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para essa viagem.
*/

let precoCombustivel = 5.79;
const gastoKmPorLitro = 10;
let distanciaEmKm = 100;


let litrosCombustivel = distanciaEmKm/gastoKmPorLitro;
let gastoCombustivel = litrosCombustivel * precoCombustivel;

console.log(gastoCombustivel.toFixed(2));