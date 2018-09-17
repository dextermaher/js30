window.onload = function() {
  main();
}

let utterance;
let voices;
let voicesDropdown;
let options;
let speakButton;
let stopButton;
let msgTxtArea;

function main() {
  init();

  msgTxtArea          = document.querySelector('[name="text"]');
  utterance.text      = msgTxtArea.value;

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  speakButton.addEventListener('click', speak);
  stopButton.addEventListener('click', stop)

  options.forEach(option => option.addEventListener('change', setOption));
}



function init() {
  utterance          = new SpeechSynthesisUtterance();
  voices             = [];
  voicesDropdown     = document.querySelector('[name="voice"]');
  options            = document.querySelectorAll('[type="range"], [name="text"]');
  speakButton        = document.querySelector('#speak');
  stopButton         = document.querySelector('#stop');
}

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices.map(voice => `<option value="${voice.name}">${voice.name} <===[]- (${voice.lang})</option>`)
                                   .join('')
                                   //.filter(voice => voice.lang.includes('en'));
}

function setVoice() {
  utterance.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

function speak() {
  utterance.text = msgTxtArea.value;
  speechSynthesis.speak(utterance);
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver){
    speechSynthesis.speak(utterance);
  }
}


function stop() {
  speechSynthesis.cancel();
}


function setOption() {
  console.log(this.name, this.value);
  utterance[this.name] = this.value;
  toggle();
}