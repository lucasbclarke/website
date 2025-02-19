function playaudio() {
  const audioContext = new AudioContext();
  const audio = new Audio('nothing-special.mp3');
  audio.play();
  alert("test")
}
