/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
Faça um programa que recebe os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de Entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const { gets } = require('./funcoes-auxiliares');

let numerosSorteados = [];
for (let i = 0; i < 10; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorNumeroSorteado= 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maiorNumeroSorteado) {
        maiorNumeroSorteado = numerosSorteados[i]
    }
}

console.log('O maior número sorteado é: ' + maiorNumeroSorteado);