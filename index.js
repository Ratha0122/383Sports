const moblie_icon = document.getElementById('mobile-icon');
const moblie_menu = document.getElementById('mobile-menu');

const hamburger_icon = document.querySelector('#mobile-icon i');

function openCloseMenu() {
    moblie_menu.classList.toggle('active');
    if (moblie_menu.style.left == "0%") {
        moblie_menu.style.left = "-100%"
    } else {
        moblie_menu.style.left = "0%"
    }
}

function changeIcon(icon) {
    icon.classList.toggle("fa-xmark")
}

moblie_icon.addEventListener('click', openCloseMenu)

function url(){
    location.href = "https://www.hay88.one/?inviteCode=5289036"
}
