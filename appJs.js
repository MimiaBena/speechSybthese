//variable declaration

const text = document.querySelector('.text');
const voiceSelector = document.querySelector('.voiceOption');
const volume = document.querySelector('.volumeOption');
const rate = document.querySelector('.rateOption');
const pitch = document.querySelector('.pitchOption');
const speakButton = document.querySelector('.speakButton');
const stopButton = document.querySelector('.stopButton');



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
//loadVoice();
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoice();
};
//create text and control parameters
