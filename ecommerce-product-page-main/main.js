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
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const images = document.querySelector('.slider')
const hasItem = document.querySelector('.has-item')
const empty = document.querySelector('.empty')
const count = document.querySelector('.count')
const total = document.querySelector('.total-price')
const mainPrice = document.querySelector('.price-main')

const showItem = () => {
	if (amountNumber.innerHTML > 0) {
		empty.classList.add('none')
		hasItem.classList.remove('none')
	}
	count.innerHTML = howMany.value
	total.innerHTML = mainPrice.innerHTML * count.innerHTML + '.00'
	
}

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
		amountNumber.innerHTML === 0
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
	} else {
		document.querySelector('.next').style.display = 'block'
		document.querySelector('.prev').style.display = 'block'
	}
}
const nextImage = () => {
	images.classList.add('move')
}
const lastImage = () => {
	if (images.classList.contains('move')) {
		images.classList.add('move2')
	}
}
const secondImage = () => {
	images.classList.remove('move2')
}
const firstImage = () => {
	if (images.classList.contains('move') && !images.classList.contains('move2')) {
		images.classList.remove('move')
	}
}
cart.addEventListener('click', showItem)
prev.addEventListener('click', firstImage)
prev.addEventListener('click', secondImage)
next.addEventListener('click', lastImage)
next.addEventListener('click', nextImage)
cart.addEventListener('click', showCart)
btn.addEventListener('click', addToCartNumber)
minus.addEventListener('click', substract)
plus.addEventListener('click', add)
close.addEventListener('click', closeSideMenu)
openMenu.addEventListener('click', openSideMenu)
