const menuBtn = document.querySelector('#nav-icon2');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
   //  menuList.classList.toggle('active');
});

