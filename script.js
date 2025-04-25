const hamburger=document.querySelector(".hamburger_menu");
const navbar=document.querySelector(".navigation_menu");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    document.querySelector(".heading header").classList.toggle("active");
    document.querySelector(".heading h1").classList.toggle("active");
    document.querySelector(".heading h2").classList.toggle("active");
})
hamburger.addEventListener("touchmove",()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    document.querySelector(".heading header").classList.toggle("active");
    document.querySelector(".heading h1").classList.toggle("active");
    document.querySelector(".heading h2").classList.toggle("active");
})
const darkmode=document.querySelector(".changemode");
darkmode.addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
    document.querySelector("#main_navigation_bar").classList.toggle("darkmode");
    document.querySelectorAll(".navele").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelector(".hamburger_menu").classList.toggle("darkmode");
    document.querySelector(".changemode").classList.toggle("darkmode");
    document.querySelector(".navigation_menu nav").classList.toggle("darkmode");
    document.querySelectorAll(".bar").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelectorAll(".navigation_menu nav a").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelector(".heading header").classList.toggle("darkmode");
    document.querySelector(".heading h1").classList.toggle("darkmode");
    document.querySelector(".heading h2").classList.toggle("darkmode");
})
darkmode.addEventListener("touchmove",()=>{
    document.querySelector(".container").classList.toggle("darkmode");
    document.body.classList.toggle("darkmode");
    document.querySelector("#main_navigation_bar").classList.toggle("darkmode");
    document.querySelectorAll(".navele").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelector(".navigation_menu nav").classList.toggle("darkmode");
    document.querySelector(".hamburger_menu").classList.toggle("darkmode");
    document.querySelector(".changemode").classList.toggle("darkmode");
    document.querySelectorAll(".bar").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelectorAll(".navigation_menu nav a").forEach((ele)=>{
        ele.classList.toggle("darkmode");
    })
    document.querySelector(".heading header").classList.toggle("darkmode");
    document.querySelector(".heading h1").classList.toggle("darkmode");
    document.querySelector(".heading h2").classList.toggle("darkmode");
})
function togglemode(){
    if(darkmode.textContent=="🌙"){
        darkmode.textContent="☀";
    }else{
        darkmode.textContent="🌙";
    }
}
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".head").style.height="0";
    document.querySelector(".head").style.webkitAnimation="slidedown 0.2s ease-in 0.9s 1 forwards";
    Array.from(document.querySelector(".head").children).forEach((ele)=>{
        ele.style.display="none";
    });
})
setTimeout(()=>{
    Array.from(document.querySelector(".head").children).forEach((ele)=>{
        ele.style.removeProperty("display");
    })
},900);