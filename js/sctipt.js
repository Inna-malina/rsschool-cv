let scr = document.querySelector('.scroll-block');
let content = document.querySelector('.wrapper');

window.onscroll = function () {
    if (window.pageYOffset > 500) {
        scr.classList.remove('hidden');
    } else {
        scr.classList.add('hidden');
    }
};

scr.onclick = function () {
    content.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

};