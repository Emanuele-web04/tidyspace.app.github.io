
var labelError = document.getElementById('label');
var errorMessage = document.getElementById('error');
var emailInput = document.getElementById('email-input');
const button = document.querySelector('#submit');

const hamburger = document.querySelector('.ham_menu');
const menu = document.querySelector('.full-menu');
const menuItems = document.querySelectorAll('.menuItem');

function toggleMenu() {
    if (menu.classList.contains('is-active')) {	 
        menu.classList.remove('is-active');
        hamburger.classList.remove('open');
        console.log("Toggling");
    } else {
        menu.classList.add('is-active');
        hamburger.classList.add('open');  // Corrected line
        console.log("notToggling");
    }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

  