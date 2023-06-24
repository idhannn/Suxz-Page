const barMenu = document.querySelector('.bar-menu');
const xIcon = document.querySelector('.x-icon');
const sideBar = document.querySelector('.menu-mobile');
const navA = document.querySelectorAll('ul li');

const Navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    windowPosition = window.scrollY > 100
    Navbar.classList.toggle('sticky-nav', windowPosition)
})

barMenu.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})

xIcon.addEventListener('click', () => {
    sideBar.classList.remove('active')
})

navA.forEach(a => {
    a.addEventListener('click', () => {
        sideBar.classList.remove('active')
    })
});


// TESTIMONIALS

const arrow = document.querySelector('.arrow');
const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')
const card3 = document.getElementById('card-3')
const card4 = document.getElementById('card-4')

arrow.addEventListener('click', () => {
    card1.style.display = 'none'
    card2.style.display = 'flex'
})