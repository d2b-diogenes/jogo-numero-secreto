const numeroSecreto = gerarNumeroAleatorio()

const menorValor = 3
    /* Criada uma constante para receber o valor que irá determinar o MENOR valor */
const maiorValor = 60
    /* Criada uma constante para receber o valor que irá determinar o MAIOR valor */

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
        /* Ao somar 1 no cálculo do Math.random, o valo que for colocado como determinante do Maior valor
        será inclusivo. No caso, o valor que for determinado como MAIOR também poderá ser sorteado. */
}

const elementoMenorValor = document.getElementById('menor-valor')
    /* Criando uma constante para recer o Elemento ID "menor-valor" do HTML */
elementoMenorValor.innerHTML = menorValor
    /* Mudando o innerHTML do elemento "menor-valor" do HTML para o valor da constante "menorvalor". */

const elementoMaiorValor = document.getElementById('maior-valor')
    /* Criando uma constante para recer o Elemento ID "maior-valor" do HTML */
elementoMaiorValor.innerHTML = maiorValor
    /* Mudando o innerHTML do elemento "maior-valor" do HTML para o valor da constante "maiorvalor". */

console.log('Número Secreto:', numeroSecreto)
