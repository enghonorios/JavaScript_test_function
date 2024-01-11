function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

const etiqueta = 100;
const pagamento = 2;

if (pagamento === 1) {
    console.log(aplicarDesconto(etiqueta, 10));
} else if (pagamento === 2) {
    console.log(aplicarDesconto(etiqueta, 15));
} else if (pagamento === 3) {
    console.log(etiqueta);
} else if (pagamento === 4) {
    console.log(aplicarDesconto(etiqueta, -10));
}



/** Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
 * o preço normal de etiqueta e a escolha da condição de pagamento.
 * 
 * Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo adequado.
 * 
 * Codigo condição de pagamento.
 * 
 * 1 A vista debito, recebe 10% de desconto.
 * 2 A vista dinheiro ou PIX, recebe 15% de desconto.
 * 3 Em duas vezes, preço normal de etiqueta sem juros.
 * 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%. 
 * 
 * 1 opção de logica minha*/