function verificaSeOChutePossuiUmValorValido (chute) {

    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'; // Foi criada uma div que será colocada ao final do elemento "elementoChute". Essa informação irá aparecer na tela.
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero) ) { 
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`; // Foi criada uma div que será colocada ao final do elemento "elementoChute". Essa informação irá aparecer na tela.        
    }

    if (numero === numeroSecreto) { // Se acertar o número secreto, será recriada a página.
        document.body.innerHTML = `
        <h2> Você acertou! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        `
            /* O "document" irá buscar o "body" do HTML para que possa reescrever a página */
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}
