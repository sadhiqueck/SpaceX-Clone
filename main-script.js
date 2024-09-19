// to hamburgen view

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('side-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}




 //navigatiopn hiding when scroll


let lastScrollTop = 0; // Store the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // User is scrolling down
    navbar.style.top = '-80px'; // Hide the navbar (adjust the value based on navbar height)
  } else {
    // User is scrolling up
    navbar.style.top = '0'; // Show the navbar
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});




