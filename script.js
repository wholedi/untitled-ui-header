const menuBtn = document.querySelector('#nav-icon2')
const menuList = document.querySelector('.header__menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('active')
})

const buttonsArray = document.querySelectorAll('.menu__link_dropdown')
for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('click', () => {
        buttonsArray[i].classList.toggle('active')
    })
}




