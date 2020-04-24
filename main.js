document.addEventListener("DOMContentLoaded", init)


function init() {
  eventListeners()
}


function eventListeners() {
  document.getElementById("menu").addEventListener('click', onClickMenu)
  document.getElementById("close").addEventListener('click', onClickClose)
}

function onClickMenu(){
  document.querySelector(".menu-display").classList.remove("hidden")
  document.getElementById("body").classList.add("overflow-y")
}

function onClickClose(){
  document.querySelector(".menu-display").classList.add("hidden")
  document.getElementById("body").classList.remove("overflow-y")
}