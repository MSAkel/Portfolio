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
  const page = window.location.pathname.split("/").pop()
  if(page === 'index.html'){
  new fullpage('#fullpage', {
    licenseKey: 'A63A687B-BDE74646-81146E13-901F41D1',
    autoScrolling: true,
    scrollBar:false,
    responsiveWidth: 1250,
    // verticalCentered: true,
    paddingTop: '7rem',
    navigation: true,
    // navigationPosition: 'left',
    anchors: ['top','jia','electro','seed','melp', 'about', 'contact'],
    // anchors: ['','','','','', '', ''],
    // navigationTooltips:['Hello','JIA','Electro','SEED','Melp','About','Contact'],
    // showActiveTooltip: false,
    afterRender: function(){
      scrollReveal()
    }

    // scrollHorizontally: true,

  });
  }
  //methods
  // fullpage_api.setAllowScrolling(false);

  eventListeners()

  window.onkeydown = function(e) {
    if (e.keyCode == 8 && e.target == document.body)
      e.preventDefault();
  }

  // animate in lines
  let lines = document.querySelectorAll(".line")
  let time = 0
  lines.forEach(line => {
    setTimeout(() => {
      line.classList.add("show-line")
    }, time += 350)
  })

  setTimeout(() => {
    document.querySelector(".vertical-lines").classList.remove("index-me")
  }, 750)


}

// Event listeners
function eventListeners() {
  document.getElementById("menu").addEventListener('click', onClickMenu)
  document.getElementById("close").addEventListener('click', () => 
  document.querySelector(".menu-display").classList.remove("show"))

  document.getElementById("menu").addEventListener('mouseover', onHoverMenu)
  document.getElementById("menu").addEventListener('mouseout', onLeaveMenu)

  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach(item => item.addEventListener('click', onClickClose))

  document.querySelector(".logo").addEventListener('click', handleNavigation)

  let projCta = document.querySelectorAll(".view-project-btn")
  projCta.forEach(item =>  item.addEventListener('click', handleNavigation))

  let nextProj = document.querySelectorAll(".next-proj")
  nextProj.forEach(item =>  item.addEventListener('click', handleNavigation))
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
  const page = window.location.pathname.split("/").pop()
  if(page !== 'index.html') return
  document.querySelector(".menu-display").classList.remove("show")
}

// on view project
async function handleNavigation() {
  let lines = document.querySelectorAll(".line")
  let time = 0

  lines.forEach(line => line.classList.remove("transition-out"))

  document.querySelector(".vertical-lines").classList.add("index-me")
  
  // animate in transition lines
  lines.forEach((line) => {
    setTimeout(() => {
      line.classList.add("line-transition")
    }, time += 50)
  })

  setTimeout(() => {
    window.location = `./${this.getAttribute('data-link')}.html`;
  }, 1700)

}


//****** SCROLL REVEAL ANIMATIONS *******/ 
function scrollReveal(){

// Logo and menu
/** 
var nav = [
  document.querySelector('#logo'),
  document.querySelector('#menu'),
];
// ScrollReveal().reveal(nav, { origin:'top', delay: 750,distance:'15%',duration: 1000, mobile: false });
ScrollReveal().reveal('.project-background-text', { origin:'bottom', delay: 300,opacity: 0,distance:'6%',duration: 1000, mobile: false });

// section titles
ScrollReveal().reveal('.section-title', { origin:'left', opacity: 0, delay: 350, distance:'2%',duration: 1000, mobile: false });

// Home section animations
ScrollReveal().reveal('.background-text', { origin:'bottom', delay: 500, distance:'15%', duration: 1000, mobile: false });
ScrollReveal().reveal('.hero-line-1', { origin:'bottom', delay: 750, distance:'35%', duration: 1000, mobile: false });
ScrollReveal().reveal('.hero-line-2', { origin:'bottom', delay: 900, distance:'35%', duration: 1000, mobile: false });
ScrollReveal().reveal('.hero-cta', { origin:'bottom', delay: 1050, distance:'15%', duration: 1000, mobile: false });
// ScrollReveal().reveal('.home-svg', { origin:'right', opacity: 0, delay: 1200, duration: 1000, mobile: false });

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
ScrollReveal().reveal('#project-number', { origin:'bottom', delay: 300, opacity: 0,distance:'10%',duration: 700, mobile: false });
ScrollReveal().reveal('.project-description', { origin:'bottom', delay: 350, opacity: 0,distance:'10%',duration: 700, mobile: false });
ScrollReveal().reveal('.right-section', { origin:'bottom', opacity: 0, delay: 700, distance:'4%',duration: 1400, mobile: false });

// Contact section animations
ScrollReveal().reveal('.contact-details', { origin:'bottom', delay: 650, opacity: 0,distance:'25%',duration: 1000, mobile: false });
ScrollReveal().reveal('.social', { origin:'bottom', opacity: 0, delay: 700, distance:'25%',duration: 1000, mobile: false });

*/
// Scroll reveal projects page
// ScrollReveal().reveal('.page-top-colour', { origin:'top', delay: 500,distance:'100%',duration: 1400, mobile: false });
// ScrollReveal().reveal('.header-img-container', { origin:'top', delay: 1500,distance:'1%',duration: 1400, mobile: false });

// ScrollReveal().reveal('.title-and-description .title-and-services', { origin:'bottom', delay: 2000, distance:'2%',duration: 900, mobile: false });
// ScrollReveal().reveal('.title-and-description .brief', { origin:'bottom', delay: 2500, distance:'2%',duration: 900, mobile: false });
// ScrollReveal().reveal('#project-number', { origin:'left', delay: 300, opacity: 0,distance:'2%',duration: 900, mobile: false });
}
