/*
    Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ['Maria', 'João', 'Verônica', 'Beatriz', 'Vanda', 'Viviane', 'Juvenal'];

for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    if (nome.includes('V')) {
        console.log(nome);
    }
}