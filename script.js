const MENU = document.getElementById('menu');
const PORTFOLIO = document.getElementById('portfolio');
const PICTURES = document.getElementById('pic');
const CL_BTN = document.getElementById('close-btn');
const FORM = document.getElementById('form-elem');
const SUBJECT = document.querySelector('.input-subject');
const DESC = document.querySelector('.input-desc');
const MODAL = document.querySelector('.message-block');



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

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    MODAL.hidden = false;

    if (!SUBJECT.value) MODAL.querySelector('.message p:nth-child(2)').insertAdjacentHTML('beforeend', '<span id = "theme-in-modal">Без темы</span>');
    else {
        MODAL.querySelector('.message p:nth-child(2)').insertAdjacentHTML('beforeend', `<span id = "theme-in-modal"><strong>Тема: </strong>${SUBJECT.value}</span>`);
    }

    if (!DESC.value) MODAL.querySelector('.message p:nth-child(3)').insertAdjacentHTML('beforeend', '<span id = "desc-in-modal">Без описания</span>');
    else {
        MODAL.querySelector('.message p:nth-child(3)').insertAdjacentHTML('beforeend', `<span id = "desc-in-modal"><strong>Описание: </strong>${DESC.value}</span>`);
    }
});

CL_BTN.addEventListener('click', function(event) {
    MODAL.hidden = true;
});

