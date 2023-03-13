function verificaSeOChutePossuiUmValorValido (chute) {

    const numero = +chute; // A contante "numero" irá receber o número Inteiro que vem da transformação da "string"

    if (chuteForInvalido(numero)) { //Irá verifica se o chute não é um Número "isNAN", "is Not A Number"
        console.log('Valor inválido');
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero) ) { //Irá verifica se o chute está entre os parâmetros 
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}.`)        
    }

}

function chuteForInvalido(numero) { //Função que irá verificar se é um número
    return Number.isNaN(numero); // "Number.isNAN" é um método que verifica se é um número. No caso, se não for um número, ele irá retornar verdadeiro.
}

function numeroForMaiorOuMenorQueOPermitido(numero) { //Função que irá verificar se o chute está dentro dos parâmetros
    return numero > maiorValor || numero < menorValor
}
