const MENU = document.getElementById('menu');
const PORTFOLIO = document.getElementById('portfolio-tags');
const PICTURES = document.getElementById('pic');
const CL_BTN = document.getElementById('close-btn');
const FORM = document.getElementById('form-elem');
const SUBJECT = document.querySelector('.input-subject');
const DESC = document.querySelector('.input-desc');
const MODAL = document.querySelector('.message-block');
const VERTICAL = document.getElementById('vertical-phone');
const HORIZONTAL = document.getElementById('horizontal-phone');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
});

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('span').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active');
});

PICTURES.addEventListener('click', (event) => {
    PICTURES.querySelectorAll('img').forEach(el => el.classList.remove('active'));
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

VERTICAL.addEventListener('click', () => {
    if (!document.getElementById('vertical-black').classList.contains('hidden')) {
      document.getElementById('vertical-black').classList.add('hidden')
    } else 
    document.getElementById('vertical-black').classList.remove('hidden')
});

HORIZONTAL.addEventListener('click', () => {
    if (!document.getElementById('horizontal-black').classList.contains('hidden')) {
      document.getElementById('horizontal-black').classList.add('hidden')
    } else 
    document.getElementById('horizontal-black').classList.remove('hidden')
});


let btn_prev = document.querySelector('#gallery .buttons .left');
let btn_next = document.querySelector('#gallery .buttons .right');
let images = document.querySelectorAll('#gallery .photos .slides');
let i = 0;
i++;
if(i >= images.length){
    i = 0; 
}
btn_prev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
btn_next.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}