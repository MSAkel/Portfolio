document.addEventListener("DOMContentLoaded", init)

let currentProj = 0
let minProject = 0
let maxProject = 1

let projects = [
  {
    "number": "01",
    "title": "Electromanager",
    "details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus voluptate tempora magniaperiam veniam sunt, aliquid totam laborum excepturi animi neque doloremque maiores nostrum facereeveniet nam provident voluptas.",
    "image": "imgs/phone-electro.png",
    "url": "https://play.google.com/store/apps/details?id=com.leadglancestudios.electromanager"
  },
  {
    "number": "02",
    "title": "Melp",
    "details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus voluptate tempora magniaperiam veniam sunt, aliquid totam laborum excepturi animi neque doloremque maiores nostrum facereeveniet nam provident voluptas.",
    "image": "imgs/phone-melp.png",
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
    }, time += 250)
  })
}

function eventListeners() {
  document.getElementById("menu").addEventListener('click', onClickMenu)
  document.getElementById("close").addEventListener('click', onClickClose)
  document.getElementById("next-proj").addEventListener('click', nextProj)
  document.getElementById("prev-proj").addEventListener('click', prevProj)

  document.getElementById("menu").addEventListener('mouseover', onHoverMenu)
  document.getElementById("menu").addEventListener('mouseout', onLeaveMenu)
}

function onHoverMenu(){
  document.getElementById("hamburger-line-1").classList.add("menu-hover")
}
function onLeaveMenu(){
  document.getElementById("hamburger-line-1").classList.remove("menu-hover")
}

function onClickMenu(){
  document.querySelector(".menu-display").classList.add("show")
  // document.getElementById("body").classList.add("overflow-y")
}

function onClickClose(){
  document.querySelector(".menu-display").classList.remove("show")
  // document.getElementById("body").classList.remove("overflow-y")
}

function onViewProject(){

}

function nextProj(){
  leftSection = document.querySelector(".left-section")
  rightSection = document.querySelector(".right-section")

  leftSection.classList.remove("switch-left-in")
  leftSection.classList.add("switch-left-out")

  rightSection.classList.remove("switch-right-in")
  rightSection.classList.add("switch-right-out")


  projNumber = document.getElementById("project-number")
  projTitle = document.getElementById("project-title")
  projDetails = document.getElementById("project-details")
  projImage = document.getElementById("project-image")
  projURL = document.getElementById("view-project-btn")
  pagination = document.getElementById("project-pagination")


  currentProj += 1

  if (currentProj > maxProject){
    currentProj = minProject
  }

  setTimeout(() =>{
    projNumber.textContent = projects[currentProj].number
    projTitle.textContent = projects[currentProj].title
    projDetails.textContent = projects[currentProj].details
    projImage.src = projects[currentProj].image
    projURL.href = projects[currentProj].url
    pagination.textContent = projects[currentProj].number
  
    leftSection.classList.remove("switch-left-out")
    leftSection.classList.add("switch-left-in")

    rightSection.classList.remove("switch-right-out")
    rightSection.classList.add("switch-right-in")
  }, 400)
}

function prevProj(){
  leftSection = document.querySelector(".left-section")
  rightSection = document.querySelector(".right-section")

  leftSection.classList.remove("switch-left-in")
  leftSection.classList.add("switch-left-out")

  rightSection.classList.remove("switch-right-in")
  rightSection.classList.add("switch-right-out")

  projNumber = document.getElementById("project-number")
  projTitle = document.getElementById("project-title")
  projDetails = document.getElementById("project-details")
  projImage = document.getElementById("project-image")
  projURL = document.getElementById("view-project-btn")
  pagination = document.getElementById("project-pagination")

  currentProj -= 1

  if (currentProj < minProject){
    currentProj = maxProject
  }


   setTimeout(() =>{
    projNumber.textContent = projects[currentProj].number
    projTitle.textContent = projects[currentProj].title
    projDetails.textContent = projects[currentProj].details
    projImage.src = projects[currentProj].image
    projURL.href = projects[currentProj].url
    pagination.textContent = projects[currentProj].number
  
    leftSection.classList.remove("switch-left-out")
    leftSection.classList.add("switch-left-in")

    rightSection.classList.remove("switch-right-out")
    rightSection.classList.add("switch-right-in")
  }, 400)
}

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