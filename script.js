const i = document.querySelector('.fa-mug-hot');
const nav = document.querySelector('nav');

i.addEventListener('click', function () {
    nav.classList.toggle('on');
    i.classList.toggle('show');

});