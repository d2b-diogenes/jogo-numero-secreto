const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {

    chute = e.results[0][0].transcript;

    exibeChuteNaTela(chute);

    verificaSeOChutePossuiUmValorValido(chute); //Será criada uma função para verificar se o número é valido. Essa função será criada em outro arquivo.
};

function exibeChuteNaTela(chute) {

    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () =>  recognition.start()); // O "end" o nome dado quando o evento "addEventListener" termina.
    //Mas ao acabar todos os procedimentos, ele irá reiniciar até o jogador acertar.