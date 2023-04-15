const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('header');

hamburgerMenu.addEventListener('click', () => {
    header.classList.toggle('active');
});
