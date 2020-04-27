document.addEventListener("DOMContentLoaded", init)

let currentProj = 0
let minProject = 0
let maxProject = 1

let projects = [
  {
    "number": "01",
    "title": "Electromanager",
    "details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus voluptate tempora magniaperiam veniam sunt, aliquid totam laborum excepturi animi neque doloremque maiores nostrum facereeveniet nam provident voluptas.",
    "image": "imgs/phone-electro.png"
  },
  {
    "number": "02",
    "title": "Melp",
    "details": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus voluptate tempora magniaperiam veniam sunt, aliquid totam laborum excepturi animi neque doloremque maiores nostrum facereeveniet nam provident voluptas.",
    "image": "imgs/phone-melp.png"
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
}

function onClickMenu(){
  document.querySelector(".menu-display").classList.remove("hidden")
  document.getElementById("body").classList.add("overflow-y")
}

function onClickClose(){
  document.querySelector(".menu-display").classList.add("hidden")
  document.getElementById("body").classList.remove("overflow-y")
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
  projButton = document.getElementById("view-project-btn")
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
  projButton = document.getElementById("view-project-btn")
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
    pagination.textContent = projects[currentProj].number
  
    leftSection.classList.remove("switch-left-out")
    leftSection.classList.add("switch-left-in")

    rightSection.classList.remove("switch-right-out")
    rightSection.classList.add("switch-right-in")
  }, 400)
}