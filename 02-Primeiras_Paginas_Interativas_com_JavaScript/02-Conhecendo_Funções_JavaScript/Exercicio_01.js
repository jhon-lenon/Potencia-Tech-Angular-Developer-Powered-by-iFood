/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoProduto =  100.00;
const fomaPagamento = 3;

let valorPago;

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}
function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));
}

if (fomaPagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10).toFixed(2));
} else if (fomaPagamento === 2) {
    console.log(aplicarDesconto(precoProduto, 15).toFixed(2));
} else if (fomaPagamento === 3) {
    valorPago = precoProduto;
    console.log(valorPago.toFixed(2));
} else if (fomaPagamento === 4) {
    console.log(aplicarJuros(precoProduto, 10).toFixed(2));
} 