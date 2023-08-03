const imageCount = 3; // Número total de imagens disponíveis
const soundCount = 3; // Número total de sons disponíveis
let currentImageNumber = 1; // Número da imagem atual
let soundInterval; // Variável para guardar o intervalo de repetição do som

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function fadeInOut(element, duration, fadeIn, fadeOut) {
  const interval = 10;
  const steps = duration / interval;
  const delta = 1 / steps;
  let currentVolume = fadeIn ? 0 : 1;

  const fadeInterval = setInterval(() => {
    if (fadeIn) {
      currentVolume += delta;
    } else {
      currentVolume -= delta;
    }
    
    element.volume = currentVolume;

    if (currentVolume <= 0 || currentVolume >= 1) {
      clearInterval(fadeInterval);
    }
  }, interval);
}

function playRandomSound() {
  const randomSoundNumber = getRandomNumber(soundCount);
  const sound = document.getElementById(`sound${randomSoundNumber}`);
  sound.currentTime = 0;
  sound.play();
  fadeInOut(sound, 1000, true, false); // Fade In
}

function startPlayingSound() {
  soundInterval = setInterval(playRandomSound, 200); // Reproduz o som a cada 200 milissegundos
}

function stopPlayingSound() {
  clearInterval(soundInterval); // Para a repetição do som
}

function changeImage() {
  const image = document.getElementById('game-image');
  currentImageNumber = (currentImageNumber % imageCount) + 1; // Incrementa para a próxima imagem na sequência
  image.src = `image${currentImageNumber}.png`;
}

function playRandomSoundAndChangeImage() {
  playRandomSound();
  changeImage();
}
