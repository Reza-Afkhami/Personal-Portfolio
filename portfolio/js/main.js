"use strict"
const navbar = document.querySelector(".dropdown")
const textEl = document.querySelector(".typewriter-text")
function hamburg() {
    navbar.style.transform = "translateY(0px)"
}
function close_ham(){
    navbar.style.transform = "translateY(-500px)"
}
let texts = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER"
]
let speed = 100
let textIndex = 0
let characterIndex = 0
function typeWriter(){
    if (characterIndex< texts[textIndex].length){
        textEl.innerHTML += texts[textIndex].charAt(characterIndex)
        characterIndex++
        setTimeout(typeWriter,speed)
    }
    else {
        setTimeout(eraseText,1000)
    }
}
function eraseText() {
    if (textEl.innerHTML.length > 0) {
        textEl.innerHTML = textEl.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50)
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter
