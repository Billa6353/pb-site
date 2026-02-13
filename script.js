const envelope = document.getElementById('envelope');
const music = document.getElementById('bgMusic');
let isOpen = false;

envelope.addEventListener('click', () => {
  if (!isOpen) {
    envelope.classList.add('open');
    music.play();
    startHeartRain();
    isOpen = true;
  }
});

function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    heart.style.opacity = Math.random();
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 300);
}
