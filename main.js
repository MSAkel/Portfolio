document.addEventListener("DOMContentLoaded", init)


function init() {
  let page = window.location.pathname.split("/").pop()
  if(!page) page = 'index.html'

  if(page === 'index.html'){
  new fullpage('#fullpage', {
    licenseKey: 'A63A687B-BDE74646-81146E13-901F41D1',
    autoScrolling: true,
    scrollBar:false,
    responsiveWidth: 1250,
    paddingTop: '7rem',
    navigation: true,
    anchors: ['top','jia','electro','melp', 'about', 'contact'],
  });
  } else {
    scrollReveal()
  }

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
  //const page = window.location.pathname.split("/").pop()
  const page = window.location.pathname
  console.log(page)
  //if(page !== '/') return
  if(page === '/index.html' || page === '/')
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
ScrollReveal().reveal('.header', { origin:'left', delay: 600,distance:'20%',duration: 1000, mobile: false });
ScrollReveal().reveal('.header-img-container', { origin:'left', delay: 1300,distance:'1%',duration: 1200, mobile: false });

ScrollReveal().reveal('.title-and-description .title-and-services', { origin:'bottom', delay: 1200, distance:'2%',duration: 1100, mobile: false });
ScrollReveal().reveal('.title-and-description .brief', { origin:'bottom', delay: 1400, distance:'2%',duration: 1100, mobile: false });
ScrollReveal().reveal('#project-number', { origin:'left', delay: 300, opacity: 0,distance:'2%',duration: 900, mobile: false });
}
