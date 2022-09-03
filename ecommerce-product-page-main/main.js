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
const deleteAll = document.querySelector('.delete-icon')
const image1 = document.querySelector('.image1')
const imagesEnlarged = document.querySelectorAll('.enlarged')
const array = [
	document.querySelector('.enlargedFirst'),
	document.querySelector('.enlargedSecond'),
	document.querySelector('.enlargedThird'),
]
const pixels = [-463, -926, -1389]

const showFirstImage = () => {
	image1.classList.toggle('clicked')
}
const showSecondImage = () => {
	document.querySelector('.image2').classList.toggle('clicked')
}
const showThirdImage = () => {
	document.querySelector('.image3').classList.toggle('clicked')
}
const showFourthImage = () => {
	document.querySelector('.image4').classList.toggle('clicked')
}

const showItem = () => {
	if (amountNumber.innerHTML > 0) {
		empty.classList.add('none')
		hasItem.classList.remove('none')
	} else {
		empty.classList.remove('none')
		hasItem.classList.add('none')
	}

	count.innerHTML = howMany.value
	total.innerHTML = mainPrice.innerHTML * count.innerHTML + '.00'
}

const deleteCart = () => {
	document.querySelector('.amount').classList.add('hide')
	hasItem.classList.add('none')
	empty.classList.remove('none')
	howMany.value = 0
	amountNumber.innerHTML = 0
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
		amountNumber.innerHTML = howMany.value
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

let curSlide = 0;
document.querySelector('.right').addEventListener("click", function () {
     curSlide++;

  document.querySelectorAll('.enlarged').forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	// document.querySelector('.two').style.transform ='translateX(-100%)'
	// document.querySelector('.three').style.transform ='translateX(-200%)'
  });
});
document.querySelector('.left').addEventListener("click", function () {
     curSlide--;

  document.querySelectorAll('.enlarged').forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
const closeEnlargedImages = () => { 
	document.querySelector('.enlarged-photo').style.display = 'none'
 }

 document.querySelector('.close-photos').addEventListener('click',closeEnlargedImages)



document.querySelector('.image2').addEventListener('click', showSecondImage)
document.querySelector('.image3').addEventListener('click', showThirdImage)
document.querySelector('.image4').addEventListener('click', showFourthImage)
image1.addEventListener('click', showFirstImage)
deleteAll.addEventListener('click', deleteCart)
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
