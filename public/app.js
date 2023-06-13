// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//navbar transparant
window.onscroll = function() {
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if(window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-transparant');
    } else {
        nav.classList.remove('navbar-transparant');
    }
}