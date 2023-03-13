const numeroSecreto = gerarNumeroAleatorio()

const menorValor = 3
const maiorValor = 60

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

const valorTela = document.getElementById('box')

    /* API de reconhecimento de voz / fala. Essa API permite que seja
    incorporado dados de voz nos apps web.
    Tem 1 que reconhece a fala, Speech Recognition e um que
    é capaz de falar o que está lendo, Speech Synthesis.  */