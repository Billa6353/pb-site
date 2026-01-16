const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const calendar = document.getElementById("calendar");
const months = document.querySelectorAll(".month");

let playing = false;

musicBtn.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "⏸ Pause";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play";
  }
  playing = !playing;
});

// SURPRISE BUTTON
surpriseBtn.addEventListener("click", () => {
  alert("You are my safest place, my softest feeling, my forever 💗");
  calendar.classList.remove("hidden");
  createHearts();
});

// HEARTS
function createHearts() {
  for(let i=0;i<30;i++){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = Math.random()*20+20+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),4000);
  }
}

// FESTIVAL ANIMATIONS
months.forEach(month=>{
  month.addEventListener("click", ()=>{
    const type = month.dataset.type;
    if(type==="diwali") createFireworks();
    if(type==="birthday") createBalloons();
    if(type==="christmas") createSnow();
    if(type==="bihu" || type==="puja") createHearts();
  });
});

function createFireworks(){
  for(let i=0;i<20;i++){
    const fire = document.createElement("div");
    fire.classList.add("firework");
    fire.style.left = Math.random()*100+"vw";
    fire.style.top = Math.random()*50+"vh";
    document.body.appendChild(fire);
    setTimeout(()=>fire.remove(),1000);
  }
}

function createBalloons(){
  for(let i=0;i<25;i++){
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.innerHTML = "🎈";
    balloon.style.left = Math.random()*100+"vw";
    document.body.appendChild(balloon);
    setTimeout(()=>balloon.remove(),6000);
  }
}

function createSnow(){
  for(let i=0;i<30;i++){
    const snow = document.createElement("div");
    snow.classList.add("snow");
    snow.innerHTML = "❄️";
    snow.style.left = Math.random()*100+"vw";
    snow.style.fontSize = Math.random()*15+15+"px";
    document.body.appendChild(snow);
    setTimeout(()=>snow.remove(),8000);
  }
}