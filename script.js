const PASSWORD = "1311";
const lock = document.getElementById("lock");
const site = document.getElementById("site");
document.getElementById("unlock").addEventListener("click", unlock);
document.getElementById("pass").addEventListener("keydown", e => { if(e.key === "Enter") unlock(); });
function unlock(){
  if(document.getElementById("pass").value === PASSWORD){
    lock.classList.add("hidden"); site.classList.remove("hidden");
    document.getElementById("music").play().catch(()=>{});
  } else document.getElementById("error").textContent = "That isn't the secret code. Try again ❤️";
}
const audio = document.getElementById("music");
document.getElementById("musicBtn").addEventListener("click", async ()=>{
  if(audio.paused){try{await audio.play();document.getElementById("musicBtn").textContent="♫ Pause";}catch(e){}}
  else{audio.pause();document.getElementById("musicBtn").textContent="♫ Music";}
});
document.querySelectorAll(".photo-card input").forEach(input=>{
 input.addEventListener("change",()=>{
  const file=input.files && input.files[0]; if(!file)return;
  const url=URL.createObjectURL(file); const box=input.parentElement.querySelector(".photo-placeholder");
  box.innerHTML=""; const img=document.createElement("img");img.src=url;img.alt="A favourite memory";box.appendChild(img);
 });
});
document.getElementById("wishBtn").addEventListener("click",()=>{
 document.getElementById("wishMessage").textContent="May every beautiful thing find its way to you. Happy Birthday, my love! ❤️";
 confetti();
});
document.getElementById("blowBtn").addEventListener("click",()=>{
 document.getElementById("flame").classList.add("out");
 document.getElementById("candleMessage").textContent="Wish sent to the universe! May it come true, Poona Kutty ✨";
 confetti();
});
document.getElementById("secretBtn").addEventListener("click",()=>{
 document.getElementById("secret").classList.toggle("hidden");
});
function confetti(){
 for(let i=0;i<65;i++){
  const el=document.createElement("i");el.textContent=["♥","✦","✧","♡"][Math.floor(Math.random()*4)];
  el.style.cssText=`position:fixed;z-index:99;left:${Math.random()*100}vw;top:-30px;color:${["#b85c75","#e4a9b8","#c99b62"][i%3]};font-size:${12+Math.random()*20}px;pointer-events:none;transition:transform 2.5s linear,opacity 2.5s linear`;
  document.body.appendChild(el);requestAnimationFrame(()=>{el.style.transform=`translateY(${110+Math.random()*90}vh) rotate(${Math.random()*700}deg)`;el.style.opacity="0"});
  setTimeout(()=>el.remove(),2700);
 }
}
