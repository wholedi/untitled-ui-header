const menuBtn = document.querySelector('#nav-icon2')
const menuList = document.querySelector('.header__menu')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    menuList.classList.toggle('active')
})

// const buttonsArray = document.querySelectorAll('.menu__link_dropdown')
// for (let i = 0; i < buttonsArray.length; i++) {
//     buttonsArray[i].addEventListener('click', () => {
//         buttonsArray[i].classList.toggle('active')
//     })
// }

const menuItem = document.querySelectorAll('.menu__item')
for (let i = 0; i < menuItem.length; i++) {
   //console.log(menuItem[i])
    const button = menuItem[i].querySelector('.menu__link_dropdown')
    const dropdown = menuItem[i].querySelector('.menu-item_dropdown')
    if (button) {
        button.addEventListener( "click", () => {
            button.classList.toggle('active')
            dropdown.classList.toggle('active')
        })
    }
}



