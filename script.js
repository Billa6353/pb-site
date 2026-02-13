const envelope = document.getElementById('envelopeWrapper');
const music = document.getElementById('bgMusic');
const fwContainer = document.getElementById('fireworks-container');

// Create Background Fireworks automatically
function createFirework() {
  const fw = document.createElement('div');
  fw.className = 'firework';
  fw.style.left = Math.random() * 100 + "vw";
  fw.style.top = Math.random() * 60 + "vh";
  fw.style.backgroundColor = ['#ff0000', '#ffd700', '#ff69b4'][Math.floor(Math.random()*3)];
  fwContainer.appendChild(fw);
  setTimeout(() => fw.remove(), 1500);
}

setInterval(createFirework, 800);

// Open Letter Event
envelope.addEventListener('click', () => {
  if (!envelope.classList.contains('is-open')) {
    envelope.classList.add('is-open');
    music.play();
    
    // Intense burst of fireworks on open
    for(let i=0; i<15; i++) {
        setTimeout(createFirework, i * 100);
    }
  }
});
