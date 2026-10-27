const socket =io();

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;
const recognition =new SpeechRecognition();
recognition.addEventListener('start', () => {
    console.log('Speech recognition started');
});

recognition.addEventListener('error', (e) => {
    console.log('Speech recognition error:', e.error);
});
document.querySelector('button').addEventListener('click',() =>{
	recognition.start() ;
});
recognition.addEventListener('result',(e) =>{
	let last=e.results.length-1;
	let text = e.results[e.results.length - 1][0].transcript;

	console.log('Recognized speech:', text);


	socket.emit('chat message',text);
	
});

socket.on('bot reply', (message) => {
    console.log('Bot:', message);

    const speech = new SpeechSynthesisUtterance(message);
    speechSynthesis.speak(speech);
});
