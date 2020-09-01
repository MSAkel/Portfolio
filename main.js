document.addEventListener("DOMContentLoaded", init)

let currentProj = 0
let minProject = 0
let maxProject = 2

let projects = [
  {
    "number": "01",
    "title": "Electromanager",
    "details": "Mobile",
    "image": "imgs/perspective-electro.png",
    "url": "https://play.google.com/store/apps/details?id=com.leadglancestudios.electromanager"
  },
  {
    "number": "02",
    "title": "Melp",
    "details": "Mobile",
    "image": "imgs/perspective-electro.png",
    "url": "https://github.com/stac0092/react-native-final"
  },
  {
    "number": "03",
    "title": "Pizza Shop",
    "details": "Web",
    "image": "imgs/perspective-electro.png",
    "url": "https://github.com/stac0092/react-native-final"
  }
]

function init() {
  eventListeners()

  // animate in lines
  let lines = document.querySelectorAll(".line")
  let time = 0
  lines.forEach(line => {
    setTimeout(() => {
      line.classList.add("show-line")
    }, time += 350)
  })
}

// Event listeners
function eventListeners() {
  document.getElementById("menu").addEventListener('click', onClickMenu)
  document.getElementById("close").addEventListener('click', onClickClose)

  document.getElementById("menu").addEventListener('mouseover', onHoverMenu)
  document.getElementById("menu").addEventListener('mouseout', onLeaveMenu)

  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach(item => item.addEventListener('click', onClickClose))

  let projCta = document.querySelectorAll(".view-project-btn")
  projCta.forEach(item =>  item.addEventListener('click', onClickProj))
}

// handle menu
function onHoverMenu(){
  document.getElementById("hamburger-line-1").classList.add("menu-hover")
}
function onLeaveMenu(){
  document.getElementById("hamburger-line-1").classList.remove("menu-hover")
}
function onClickMenu(){
  document.querySelector(".menu-display").classList.add("show")
}
function onClickClose(){
  document.querySelector(".menu-display").classList.remove("show")
}

// on view project
async function onClickProj (){
  let lines = document.querySelectorAll(".line")
  let time = 0

  document.querySelector(".vertical-lines").classList.add("index-me")
  
  // animate in transition lines
  lines.forEach((line) => {
    setTimeout(() => {
      line.classList.add("line-transition")
    }, time += 50)
  })

  setTimeout(() => {
    window.location = `./${this.id}.html`;
    document.querySelector(".vertical-lines").classList.remove("index-me")
    lines.forEach((line) => line.classList.remove("line-transition"))
  }, 1700)

}


//****** SCROLL REVEAL ANIMATIONS *******/ 

// Logo and menu
var nav = [
  document.querySelector('#logo'),
  document.querySelector('#menu'),
];
// ScrollReveal().reveal(nav, { origin:'top', delay: 750,distance:'15%',duration: 1000, mobile: false });
ScrollReveal().reveal('.project-background-text', { origin:'bottom', delay: 300,opacity: 0,distance:'6%',duration: 1000, mobile: false });

// section titles
ScrollReveal().reveal('.section-title', { origin:'left', opacity: 0, delay: 350, distance:'2%',duration: 1000, mobile: false });

// Home section animations
ScrollReveal().reveal('.background-text', { origin:'left', delay: 900,distance:'1%',duration: 1400, mobile: false });
ScrollReveal().reveal('.hero-line-1', { origin:'bottom', delay: 1400, opacity: 0,distance:'15%',duration: 1400, mobile: false });
ScrollReveal().reveal('.hero-line-2', { origin:'bottom', delay: 1700, opacity: 0,distance:'15%',duration: 1400, mobile: false });
ScrollReveal().reveal('.hero-cta', { origin:'bottom', delay: 1950, opacity: 0,distance:'15%',duration: 1400, mobile: false });
ScrollReveal().reveal('.home-svg', { origin:'right', opacity: 0, delay: 1200, duration: 2500, mobile: false });

// About section animations
ScrollReveal().reveal('.about-text', { origin:'bottom', opacity: 0, delay: 900, distance:'2%',duration: 2500, mobile: false });
ScrollReveal().reveal('.about img', { origin:'bottom', opacity: 0, delay: 950, distance:'2%',duration: 2500, mobile: false });
ScrollReveal().reveal('.about-svg', { origin:'right', opacity: 0, delay: 1200, duration: 2500, mobile: false })
// About borders
ScrollReveal().reveal('.about-border-bottom', { origin:'right', delay: 500, scale: 0 , distance:'70%',duration: 500, mobile: false });
ScrollReveal().reveal('.about-border-left', { origin:'bottom', delay: 600, scale: 0 , distance:'70%',duration: 500, mobile: false });
ScrollReveal().reveal('.about-border-top', { origin:'left', delay: 650, scale: 0 , distance:'70%',duration: 500, mobile: false });

// Projects section animations
ScrollReveal().reveal('.project-content', { origin:'left', delay: 300,distance:'1%',duration: 900, mobile: false });
ScrollReveal().reveal('#project-number', { origin:'bottom', delay: 700, opacity: 0,distance:'4%',duration: 900, mobile: false });
ScrollReveal().reveal('.project-description', { origin:'bottom', delay: 1000, opacity: 0,distance:'4%',duration: 1200, mobile: false });
ScrollReveal().reveal('.right-section', { origin:'bottom', opacity: 0, delay: 1000, distance:'4%',duration: 1400, mobile: false });

// Contact section animations
ScrollReveal().reveal('.contact-details', { origin:'bottom', delay: 700, opacity: 0,distance:'5%',duration: 1200, mobile: false });
ScrollReveal().reveal('.social', { origin:'bottom', opacity: 0, delay: 1000, distance:'5%',duration: 1400, mobile: false });


// Scroll reveal projects page
ScrollReveal().reveal('.page-top-colour', { origin:'top', delay: 500,distance:'100%',duration: 1400, mobile: false });
ScrollReveal().reveal('.header-img-container', { origin:'top', delay: 1500,distance:'1%',duration: 1400, mobile: false });

ScrollReveal().reveal('.title-and-description h1', { origin:'left', delay: 2000, distance:'2%',duration: 900, mobile: false });
ScrollReveal().reveal('.title-and-description p', { origin:'left', delay: 2500, distance:'2%',duration: 900, mobile: false });
// ScrollReveal().reveal('#project-number', { origin:'left', delay: 300, opacity: 0,distance:'2%',duration: 900, mobile: false });
