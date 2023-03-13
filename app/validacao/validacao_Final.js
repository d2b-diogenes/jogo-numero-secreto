function verificaSeOChutePossuiUmValorValido (chute) {

    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero) ) { 
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou! </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
            //Foi criado o Button para que seja possível reiniar o jogo

    } else if (numero > numeroSecreto) {
                elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += ` 
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => { //Foi criado o evento para escutar o clique na página "body". Foi criado uma função anônima que leva o evento como parâmetro
    if (e.target.id == 'jogar-novamente') { // Se o evento target.id for igual ao nome do botão "jogar-novamente" 
        window.location.reload() // Irá recarregar a página
    }
})