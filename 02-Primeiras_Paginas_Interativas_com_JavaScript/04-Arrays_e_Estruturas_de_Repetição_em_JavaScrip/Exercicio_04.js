/*
    4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/
let numerosPares = [];

for (let i = 0; i < 50; i++) {
    if ((i % 2 === 0) && (i > 10)) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);