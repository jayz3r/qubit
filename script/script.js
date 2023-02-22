const mobileMenu = document.querySelector('#mobile-menu');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle("mobile-menu-active");
})