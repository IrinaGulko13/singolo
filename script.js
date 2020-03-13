const MENU = document.getElementById('menu');
const PORTFOLIO = document.getElementById('portfolio');
const PICTURES = document.getElementById('pic');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
});

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('span').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
});

PICTURES.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});