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

  let lines = document.querySelectorAll(".line")
  let time = 0
  lines.forEach(line => {
    setTimeout(() => {
      line.classList.add("show-line")
    }, time += 350)
  })
}

function eventListeners() {
  document.getElementById("menu").addEventListener('click', onClickMenu)
  document.getElementById("close").addEventListener('click', onClickClose)

  document.getElementById("menu").addEventListener('mouseover', onHoverMenu)
  document.getElementById("menu").addEventListener('mouseout', onLeaveMenu)

  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach(item => {
    item.addEventListener('click', onClickClose)
  })
}

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


ScrollReveal().reveal('.project-background-text', { origin:'bottom', delay: 300,opacity: 0,distance:'6%',duration: 1000, mobile: false });
// Home section animations
ScrollReveal().reveal('.background-text', { origin:'left', delay: 400,distance:'1%',duration: 1400, mobile: false });
ScrollReveal().reveal('#hero-title', { origin:'bottom', delay: 1000, opacity: 0,distance:'1%',duration: 1400, mobile: false });
ScrollReveal().reveal('.background-svg', { origin:'bottom', opacity: 0,duration: 2500, mobile: false });

// About section animations
ScrollReveal().reveal('.rect-top-reveal', { origin:'bottom', delay: 400,duration: 2500, mobile: false });
ScrollReveal().reveal('.about', { origin:'bottom', opacity: 0, distance:'2%',duration: 2500, mobile: false });

// Project section animations
ScrollReveal().reveal('#project-number', { origin:'left', delay: 300, opacity: 0,distance:'2%',duration: 900, mobile: false });
ScrollReveal().reveal('.project-description', { origin:'bottom', delay: 400, opacity: 0,distance:'3%',duration: 1200, mobile: false });
ScrollReveal().reveal('#project-image', { origin:'bottom', opacity: 0, delay: 400, distance:'3%',duration: 1400, mobile: false });

// Contact section animations
ScrollReveal().reveal('.contact-details', { origin:'bottom', delay: 400, opacity: 0,distance:'3%',duration: 1200, mobile: false });
ScrollReveal().reveal('.social', { origin:'bottom', opacity: 0, delay: 400, distance:'3%',duration: 1400, mobile: false });