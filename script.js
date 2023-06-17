const menuBtn = document.querySelector('#nav-icon2')
const menuList = document.querySelector('.header__menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('active')
})

const button = document.querySelector('.menu__link');

button.addEventListener('click', () => {
    button.classList.toggle('active');
});




