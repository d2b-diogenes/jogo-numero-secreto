const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; //Código retirado do site Web Speech API para utilizar 

const recognition = new SpeechRecognition(); //Instanciando a construtor SpeechRecognition()

recognition.lang = 'pt-Br'; //Configurando o reconhecimento de voz para a nossa língua. Obs.: o "B" tem que ser em maiúsculo.

recognition.start(); //O reconhecimento de voz é iniciado e aparece na aba da página um símbolo mostrando o uso do microfone

/* Leituras relacionadas ao Reconhecimento de voz:

Web Speech API
https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

Using the Web Speech API
https://wicg.github.io/speech-api/#speechreco-section

Sobre a complexa intergace da Web Speech API:
https://wicg.github.io/speech-api/#speechreco-section

Artigo:
https://www.sitepoint.com/introducing-web-speech-api/

*/
