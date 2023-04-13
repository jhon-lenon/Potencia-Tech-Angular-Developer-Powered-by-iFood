
// Exercicio 00
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

// Exercício 01
function tabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
}

// Exercicio 02
const entradasEx2 = [4, 100, 150, 90, 200];
let maiorNumero = 0;
let menorNumero = 9999999999;

function gets() {
    const valor = entradasEx2[indse];
    indse++;
    return valor;
}

function imprimeMaiorEMenor() {
    for (let i = 0; i < entradasEx2.length; i++) {
        if (entradasEx2[i] < menorNumero) {
            menorNumero = entradasEx2[i];
        }
        if (entradasEx2[i] > maiorNumero) {
            maiorNumero = entradasEx2[i];
        }
    }
    console.log('O menor número é: ' + menorNumero);
    console.log('O maior número é: ' + maiorNumero);
}

// Exercicio 03
const entradasEx3 = [5, 1, 3, 9, 10, 12];
let numerosPares = [];

function imprimeNumerosPares() {
    for (let i = 0; i < entradasEx3.length; i++) {
        if (entradasEx3[i] % 2 === 0) {
            numerosPares.push(entradasEx3[i]);
        }
    }
    console.log('Números Pares: ' + numerosPares);
}


module.exports = { gets, print, tabuada, imprimeMaiorEMenor, imprimeNumerosPares };