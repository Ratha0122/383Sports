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


// Select the button element by its ID
const btn = document.querySelector('#button');

// Add scroll event listener to window
window.addEventListener('scroll', function() {
  // Check if the window scroll position is greater than 300 pixels
  if (window.scrollY > 300) {
    // If so, add 'show' class to the button
    btn.classList.add('show');
  } else {
    // Otherwise, remove 'show' class from the button
    btn.classList.remove('show');
  }
});

// Add click event listener to the button
btn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  // Smooth scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
