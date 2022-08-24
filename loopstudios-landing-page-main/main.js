const open = document.querySelector('.open-nav')
const close = document.querySelector('.close')
// const left = document.querySelector('.left')

const openMenu = () => {
	document.querySelector('.nav-menu').classList.add('left')
}
const closeMenu = () => {
	document.querySelector('.nav-menu').classList.remove('left')
}

close.addEventListener('click', closeMenu)
open.addEventListener('click', openMenu)
