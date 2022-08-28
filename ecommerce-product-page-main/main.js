const openMenu = document.querySelector('.open')
const menu = document.querySelector('.side-menu')
const close = document.querySelector('.btn-close')

const openSideMenu = () => {
	menu.classList.remove('hide')
}
const closeSideMenu = () => {
	menu.classList.add('hide')
}
close.addEventListener('click',closeSideMenu)
openMenu.addEventListener('click', openSideMenu)
