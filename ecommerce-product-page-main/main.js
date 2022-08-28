const openMenu = document.querySelector('.open')
const menu = document.querySelector('.side-menu')
const close = document.querySelector('.btn-close')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const howMany = document.querySelector('.howMany')

const openSideMenu = () => {
	menu.classList.remove('hide')
}
const closeSideMenu = () => {
	menu.classList.add('hide')
}

const add = () => {
    howMany.value ++
}
const substract = () => { 
    howMany.value --
    if(howMany.value < 0 ){
        howMany.value = 0
    }
 }
 minus.addEventListener('click',substract)
plus.addEventListener('click',add)
close.addEventListener('click', closeSideMenu)
openMenu.addEventListener('click', openSideMenu)
