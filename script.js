/* ================= INTRO SCREEN + MUSIC ================= */

const intro = document.getElementById("intro-screen");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("bg-music");

enterBtn.addEventListener("click", () => {

    music.play().catch(err => {
        console.log("Music blocked:", err);
    });

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

});

/* ================= COUNTDOWN ================= */

const weddingDate = new Date("August 23, 2026 06:00:00").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        timer.innerHTML = "💜 Today is our Wedding Day 💜";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
        `<strong>${days}</strong> Days
         <strong>${hours}</strong> Hours
         <strong>${minutes}</strong> Minutes
         <strong>${seconds}</strong> Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* ================= ANIMATIONS ================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});

},{ threshold:0.2 });

sections.forEach(section=>{
section.style.opacity="0";
section.style.transform="translateY(70px)";
section.style.transition="1s ease";
observer.observe(section);
});

/* ================= FLOWERS ================= */

function createFlower(){

const flower=document.createElement("div");
flower.innerHTML="🌸";

flower.style.position="fixed";
flower.style.left=Math.random()*100+"vw";
flower.style.top="-40px";
flower.style.fontSize=(20+Math.random()*20)+"px";
flower.style.opacity=Math.random();
flower.style.pointerEvents="none";
flower.style.zIndex="999";

const duration=6000+Math.random()*5000;

flower.animate([
{ transform:"translateY(0px) rotate(0deg)" },
{ transform:`translate(${Math.random()*200-100}px,110vh) rotate(720deg)` }
],{ duration, iterations:1 });

document.body.appendChild(flower);

setTimeout(()=>flower.remove(),duration);
}

setInterval(createFlower,350);