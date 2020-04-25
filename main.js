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

  projNumber.textContent = projects[currentProj].number
  projTitle.textContent = projects[currentProj].title
  projDetails.textContent = projects[currentProj].details
  projImage.src = projects[currentProj].image
  pagination.textContent = projects[currentProj].number
}

function prevProj(){
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


  projNumber.textContent = projects[currentProj].number
  projTitle.textContent = projects[currentProj].title
  projDetails.textContent = projects[currentProj].details
  projImage.src = projects[currentProj].image
  pagination.textContent = projects[currentProj].number
}