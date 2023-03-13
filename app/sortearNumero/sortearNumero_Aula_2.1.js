const numeroSecreto = gerarNumeroAleatorio() 
    /* Será guardado em uma constante a chamada para a função */

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100)
}
    /* É criada uma função chamada gerarNumeroAleatorio que irá gerar um número aleatório
    por meio da função Math.random( ) e irá retornar o valor gerado. 
    O número gerado é um número racional que varia entre 0 e menos 1, e para que esse número
    seja um número inteiro é necessário transformar com o "parseInt( )"
    para que possa ser gerado números maiores que 1 é necessário múltiplicar
    por 10 para ter 1 dezena, 100 para ter 2 dezenas e assim vai */


console.log('Número Secreto:', numeroSecreto)
