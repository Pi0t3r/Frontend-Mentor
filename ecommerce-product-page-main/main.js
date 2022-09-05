const showFirstImage = () => {
	image5.classList.toggle('clicked')
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

document.querySelector('.prev').addEventListener('click', () => {
	if (document.querySelector('.slider').classList.contains('move') && !document.querySelector('.slider').classList.contains('move2') && !document.querySelector('.slider').classList.contains('move#')) {
		document.querySelector('.slider').classList.remove('move')
	}
})
document.querySelector('.prev').addEventListener('click', () => {
	if (document.querySelector('.slider').classList.contains('move') && document.querySelector('.slider').classList.contains('move2') && !document.querySelector('.slider').classList.contains('move3')) {
		document.querySelector('.slider').classList.remove('move2')
	}
})
document.querySelector('.prev').addEventListener('click', () => {
	if (document.querySelector('.slider').classList.contains('move') && document.querySelector('.slider').classList.contains('move2') && document.querySelector('.slider').classList.contains('move3')) {
		document.querySelector('.slider').classList.remove('move3')
	}
})
document.querySelector('.next').addEventListener('click', () => {
	if (document.querySelector('.slider').classList.contains('move2')) {
		document.querySelector('.slider').classList.add('move3')
	}
})
document.querySelector('.next').addEventListener('click', () => {
	if (document.querySelector('.slider').classList.contains('move')) {
		document.querySelector('.slider').classList.add('move2')
	}
})
document.querySelector('.next').addEventListener('click', () => {
	document.querySelector('.slider').classList.add('move')
})
document.querySelector('.delete-icon').addEventListener('click', () => {
	document.querySelector('.amount').classList.add('hide')
	document.querySelector('.has-item').classList.add('none')
	document.querySelector('.empty').classList.remove('none')
	document.querySelector('.howMany').value = 0
	document.querySelector('.amount-number').innerHTML = 0
})
document.querySelector('.icon-cart').addEventListener('click', () => {
	if (document.querySelector('.amount-number').innerHTML > 0) {
		document.querySelector('.empty').classList.add('none')
		document.querySelector('.has-item').classList.remove('none')
	} else {
		document.querySelector('.empty').classList.remove('none')
		document.querySelector('.has-item').classList.add('none')
	}

	document.querySelector('.count').innerHTML = document.querySelector('.howMany').value
	document.querySelector('.total-price').innerHTML = document.querySelector('.price-main').innerHTML * document.querySelector('.count').innerHTML + '.00'
})
document.querySelector('.icon-cart').addEventListener('click', () => {
	document.querySelector('.cart').classList.toggle('none')
	if (!document.querySelector('.cart').classList.contains('none')) {
		document.querySelector('.next').style.display = 'none'
		document.querySelector('.prev').style.display = 'none'
	} else {
		document.querySelector('.next').style.display = 'block'
		document.querySelector('.prev').style.display = 'block'
	}
})
document.querySelector('.button').addEventListener('click', () => {
	if (document.querySelector('.howMany').value == 0) {
		document.querySelector('.amount').classList.add('hide')
		document.querySelector('.amount-number').innerHTML = document.querySelector('.howMany').value
	} else if (document.querySelector('.howMany').value > 0) {
		document.querySelector('.amount-number').innerHTML = document.querySelector('.howMany').value
		document.querySelector('.amount').classList.remove('hide')
	}
})
document.querySelector('.minus').addEventListener('click', () => {
	document.querySelector('.howMany').value--
	if (document.querySelector('.howMany').value < 0) {
		document.querySelector('.howMany').value = 0
	}
})

document.querySelector('.plus').addEventListener('click', () => {
	document.querySelector('.howMany').value++
})
document.querySelector('.btn-close').addEventListener('click', () => {
	document.querySelector('.side-menu').classList.remove('move-sideMenu')
})
document.querySelector('.open').addEventListener('click', () => {
	document.querySelector('.side-menu').classList.add('move-sideMenu')
})
