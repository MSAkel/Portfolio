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

  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach(item => {
    item.addEventListener('click', onClickClose)
  })

  displayProjectsMobile()
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
  // pagination = document.getElementById("project-pagination")


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
    // pagination.textContent = projects[currentProj].number
  
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
  // pagination = document.getElementById("project-pagination")

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
    // pagination.textContent = projects[currentProj].number
  
    leftSection.classList.remove("switch-left-out")
    leftSection.classList.add("switch-left-in")

    rightSection.classList.remove("switch-right-out")
    rightSection.classList.add("switch-right-in")
  }, 400)
}

function displayProjectsMobile(){
  let projectsSection = document.querySelector("#project-section .mobile")
  //let projectContent = document.querySelector(".project-content.mobile")

  projects.forEach(project => {
    //let projectContainer = document.createElement("div")
    //let projectContent = document.createElement("div")
    let imageContainer = document.createElement("div")

    let projNumber = document.createElement("h1")
    // let projTitle = document.createElement("h1")
    let projTitle1 = document.createElement("a")
    // let projType = document.createElement("p")
    let projImage = document.createElement("img")
    let projURL = document.createElement("a")

    // projNumber.textContent = project.number
    // projTitle.textContent = project.title
    // projTitle.textContent = `${project.number} ${project.title}`
    projTitle1.textContent = `${project.number} ${project.title}`
    // projType.textContent = project.details
    projImage.src = project.image
    projURL.textContent = "View Project"
    projURL.href = project.url

    projNumber.classList.add("project-number")
    projURL.classList.add("cta")

    //projectContent.classList.add("project-description")
    imageContainer.classList.add("project-image-mobile")

    // projectContent.appendChild(projNumber)
    // projectContent.appendChild(projTitle)
    // projectContent.appendChild(projType)
    imageContainer.appendChild(projImage)
    imageContainer.appendChild(projTitle1)

    //projectContent.appendChild(imageContainer)
    //projectContainer.appendChild(projectContent)
    projectsSection.appendChild(imageContainer)
  })
  
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