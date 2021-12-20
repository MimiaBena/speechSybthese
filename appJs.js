//variable declaration

const textOption = document.querySelector('.text');
const voiceSelector = document.querySelector('.voiceOption');
const volumeOption = document.querySelector('.volumeOption');
const rateOption = document.querySelector('.rateOption');
const pitchOption = document.querySelector('.pitchOption');
const speakButton = document.querySelector('.speakButton');
const stopButton = document.querySelector('.stopButton');
var synth = window.speechSynthesis;


//function get Voices

function loadVoice(){
    let voices = [];
    //get the voices
    voices = speechSynthesis.getVoices();
    ///console.log(voices);
    //creation element for each voice
    for(let i =0; i < voices.length; i++){
        const option = document.createElement('option');
        option.value = voices[i].name;
        option.innerHTML = voices[i].name;
        
        //option.textContent = voices[i].name;
        //option.setAttribute('data-lang', voices[i].lang);
        //option.setAttribute('data-name', voices[i].name);
        
        //add to voice selector
       voiceSelector.appendChild(option);
        
    };
    
}
//excute load function
loadVoice();
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoice();
};
//create text and control parameters
var msg = new SpeechSynthesisUtterance();
function parameters(textOption){
    /*new instance représente
    une requète de synthèse vocale. Elle contient le contenu du service permettant de définir la façon dont elle sera lu (langue, hauteur et volume).*/
    
  
  // Set the text.
	msg.text = textOption;
    
    //set volume ant pitch
    msg.volume = parseFloat(volumeOption.value);
    msg.rate = parseFloat(rateOption.value);
    msg.pitch = parseFloat(pitchOption.value);
    
    if (voiceSelector.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { 
                return voice.name == voiceSelector.value;})[0];
	}
  
  // Queue this utterance.
	synth.speak(msg);
}

function stopSpeech(){
    synth.cancel();
}

speakButton.addEventListener('click', function(e){
    if (textOption.value.length > 0) {
		parameters(textOption.value, start = true);
	}
});
stopButton.addEventListener('click', function(e){stopSpeech()});