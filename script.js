const menuBtn = document.querySelector('#nav-icon2')
const menuList = document.querySelector('.header__menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('active')
})

const itemDropdown = document.querySelectorAll('.menu__item.menu-item_dropdown')

itemDropdown.addEventListener('click', () => {
    itemDropdown.classList.toggle('active')

})



