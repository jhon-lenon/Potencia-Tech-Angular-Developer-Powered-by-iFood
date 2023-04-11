/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto =  10.00;
const fomaPagamento = 2;

const desconto1 = 0.1;
const desconto2 = 0.15;
const juros = 1.1;
let valorPago;

if (fomaPagamento === 'Debito') {
    valorPago = precoProduto - (precoProduto * desconto1);
    console.log(valorPago.toFixed(2));
} else if (fomaPagamento === 'Dinheiro' || fomaPagamento === 'Pix') {
    valorPago = precoProduto - (precoProduto * desconto2);
    console.log(valorPago.toFixed(2));
} else if (fomaPagamento === 2) {
    valorPago = precoProduto;
    console.log(valorPago.toFixed(2));
} else if (fomaPagamento > 2) {
    valorPago = precoProduto * juros;
    console.log(valorPago.toFixed(2));
} 