const openMenu = document.querySelector('.open')
const menu = document.querySelector('.side-menu')
const close = document.querySelector('.btn-close')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const howMany = document.querySelector('.howMany')
const btn = document.querySelector('.button')
const cart = document.querySelector('.icon-cart')
const amountNumber = document.querySelector('.amount-number')
const cartMain = document.querySelector('.cart')

const openSideMenu = () => {
	menu.classList.remove('hide')
}
const closeSideMenu = () => {
	menu.classList.add('hide')
}

const add = () => {
	howMany.value++
}
const substract = () => {
	howMany.value--
	if (howMany.value < 0) {
		howMany.value = 0
	}
}
const addToCartNumber = () => {
	if (howMany.value == 0) {
		document.querySelector('.amount').classList.add('hide')
	} else if (howMany.value > 0) {
		amountNumber.innerHTML = howMany.value
		document.querySelector('.amount').classList.remove('hide')
	}
}

const showCart = () => {
	cartMain.classList.toggle('none')
	if (!cartMain.classList.contains('none')) {
		document.querySelector('.next').style.display = 'none'
		document.querySelector('.prev').style.display = 'none'
	}else{
        document.querySelector('.next').style.display = 'block'
		document.querySelector('.prev').style.display = 'block'
    }
}

cart.addEventListener('click', showCart)
btn.addEventListener('click', addToCartNumber)
minus.addEventListener('click', substract)
plus.addEventListener('click', add)
close.addEventListener('click', closeSideMenu)
openMenu.addEventListener('click', openSideMenu)
