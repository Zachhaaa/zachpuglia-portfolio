let dropdowns       = document.querySelectorAll('#navbar .dropdown')
let dropdownIcons   = document.querySelectorAll('#navbar .dropicon')
let dropdownItems   = document.querySelectorAll('#navbar ul')

let dropdownDropped = new Array(dropdowns.length).fill(false)

function toggleDropdown(dropdownIndex) {
    if (dropdownDropped[dropdownIndex]) {
     
        dropdownDropped[dropdownIndex] = false
        dropdownIcons[dropdownIndex].style.transform = 'rotate(0deg)'
        dropdownItems[dropdownIndex].style.display = 'none'

    }
    else {
      
        dropdownDropped[dropdownIndex] = true
        dropdownIcons[dropdownIndex].style.transform = 'rotate(90deg)'
        dropdownItems[dropdownIndex].style.display = 'block'

    }
}

dropdowns.forEach((e, i) => {
    e.onclick = () => { toggleDropdown(i) }
})

let menuButton = document.getElementById('menu-button')
let navdirs    = document.getElementById('navdirs')
let menuOpen   = false

menuButton.onclick = () => {
    if (menuOpen) {
        menuOpen = false;
        navdirs.style.display = 'none'
    }
    else {
        navdirs.style.display = 'block'
        menuOpen = true; 
    }
}
let mq = window.matchMedia("(max-width: 870px)") // Keep in sync with theme.scss mq
let menuButtonActive = false;
mq.addEventListener("change", e => {
    if  (e.matches)
        navdirs.style.display = 'none'
    else
        navdirs.style.display = 'block'
})