const elementoChute = document.getElementById('chute'); //Pegando o elemento da página HTML onde será mostrado o resultado do que é falado

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) { //Função que irá pegar o que é falado no evento

    chute = e.results[0][0].transcript; // Colocando em uma variável o resultado que vem do evento.

    exibeChuteNaTela(chute); //Depois que pega o que foi falado, é chamado a função para exibir na tela o resultado.

};

function exibeChuteNaTela(chute) {

    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `

    // É utilizado o assento ` agudo para escreve dentro o código HTML que deverá ser escrito no innerHTML
    // Para colocar dentro do código HTML um dado que vem do JavaScript é preciso usar ${ } e colocar nome da variável dentro. Ex.: ${dado}
}