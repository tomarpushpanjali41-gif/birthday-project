setInterval(function(){
    let confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "20px";
    document.body.appendChild(confetti);

    setTimeout(function(){
        confetti.remove();
    },3000);
},500);

document.addEventListener("mousemove", function(e){
let star = document.createElement("div");
star.innerHTML="✨";
star.style.position="fixed";
star.style.left=e.clientX+"px";
star.style.top=e.clientY+"px";
document.body.appendChild(star);

setTimeout(()=>{star.remove()},500);
});

let text = "May your life be filled with happiness, success and endless smiles 💕";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();

setInterval(function(){
    let balloon = document.createElement("div");
    balloon.innerHTML = "🎈";
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(balloon);

    setTimeout(function(){
        balloon.remove();
    },6000);
},800);

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.querySelector("button").addEventListener("click", function(){
    for(let i=0;i<100;i++){
        particles.push({
            x: canvas.width/2,
            y: canvas.height/2,
            radius: Math.random()*3+2,
            color: `hsl(${Math.random()*360},100%,50%)`,
            speedX: (Math.random()-0.5)*6,
            speedY: (Math.random()-0.5)*6
        });
    }
});

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,index)=>{
        p.x += p.speedX;
        p.y += p.speedY;
        p.radius *= 0.96;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if(p.radius < 0.5){
            particles.splice(index,1);
        }
    });
    requestAnimationFrame(animate);
}
animate();

let photos = document.querySelectorAll(".photo");

document.getElementById("lightBtn").addEventListener("click", function(){

    document.getElementById("overlay").classList.add("light-on");

    document.getElementById("music").play();

});

setTimeout(()=>{
    photos.forEach((p,i)=>{
        setTimeout(()=>{
            p.classList.add("show-photo");
        },i*800);
    });
},1500);

setTimeout(function(){
document.getElementById("popup").style.display="block";
},4000);