import translate from '/js/translate.js';

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


//change languages
let enButton = document.querySelector('.switch__en');
let ruButton = document.querySelector('.switch__ru');
let datattrs = document.querySelectorAll('[data-translater]');


enButton.addEventListener('click', function () {
    enButton.classList.remove('switch-off');
    enButton.classList.add('switch-on');

    ruButton.classList.remove('switch-on');
    ruButton.classList.add('switch-off');

    for (let key in translate['en']) {
        datattrs.forEach(function (attr) {
            if (attr.dataset.translater === key) {
                attr.textContent = translate['en'][key];
            }
        });
    }

});


ruButton.addEventListener('click', function () {
    ruButton.classList.remove('switch-off');
    ruButton.classList.add('switch-on');

    enButton.classList.remove('switch-on');
    enButton.classList.add('switch-off');

    for (let key in translate['ru']) {
        datattrs.forEach(function (attr) {
            if (attr.dataset.translater === key) {
                attr.textContent = translate['ru'][key];
            }
        });
    }
});