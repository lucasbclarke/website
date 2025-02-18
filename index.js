const audioContext = new AudioContext();
const audio = new Audio('nothing-special.mp3');
const track = audioContext.createMediaElementSource(audio);
track.connect(audioContext.destination);

//audio.play(); 
