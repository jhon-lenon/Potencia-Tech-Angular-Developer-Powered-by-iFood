/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        const IMC = (this.peso / (this.altura * this.altura)).toFixed(2);

        if (IMC < 18.5) {
            return 'O IMC é: ' + IMC + ' - Você Está Abaixo do Peso!';
        } else if (IMC < 25 ) {
            return 'O IMC é: ' + IMC + ' - Você Está com o Peso Normal!';
        } else if (IMC < 30 ) {
            return 'O IMC é: ' + IMC + ' - Você Está Acima do Peso!';
        } else if (IMC < 40 ) {
            return 'O IMC é: ' + IMC + ' - Você Está Obeso!';
        } else if (IMC > 40 ) {
            return 'O IMC é: ' + IMC + ' - Você Está com Obesidade Grave!';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularIMC());