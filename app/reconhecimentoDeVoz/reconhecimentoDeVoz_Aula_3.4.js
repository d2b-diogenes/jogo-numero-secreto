const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

recognition.addEventListener('result', onSpeak); //Quando for inicializada, o "addEventListener" irá pegar o evento e colocar o retorno em "Result". "Result" é o nome dado para o que o evento irá trazer.
    //O "addEventListener" irá iniciar uma função callback chamada "onSpeak"
    //Documentação: https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function

function onSpeak(e) { //A função "onSpeak" foi chamada quando o "addEventListener" foi inicializado
    console.log(e.results[0][0].transcript); //O resultado do eventro trás diversas informações e foi colocado o caminho para buscar termo que é falado. 
};