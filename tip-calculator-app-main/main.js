const bill = document.querySelector('.inputBill')
const t5 = document.querySelector('.tip5')
const t10 = document.querySelector('.tip10')
const t15 = document.querySelector('.tip15')
const t25 = document.querySelector('.tip25')
const t50 = document.querySelector('.tip50')
const tcustom = document.querySelector('.tcustom')
const people = document.querySelector('.inputPeople')
const tip = document.querySelector('.tipResult')
const price = document.querySelector('.personPriceResult')
const reset = document.querySelector('.reset')
const change = document.querySelector('.change')

const changeColor1 = () => {
	t5.classList.toggle('change')
}
const changeColor2 = () => {
	t10.classList.toggle('change')
}
const changeColor3 = () => {
	t15.classList.toggle('change')
}
const changeColor4 = () => {
	t25.classList.toggle('change')
}
const changeColor5 = () => {
	t50.classList.toggle('change')
}

const countBill = () => {
	const newPrice = parseFloat(bill.value)
	const newPeople = parseInt(people.value)
	const newTip1 = parseFloat(t5.value)
	const newTip2 = parseFloat(t10.value)
	const newTip3 = parseFloat(t15.value)
	const newTip4 = parseFloat(t25.value)
	const newTip5 = parseFloat(t50.value)
    const customTip = tcustom.value * 0.01
	if (t5.classList.contains('change')) {
		const countTip = newPrice * newTip1
		const countAll = (newPrice + countTip) / newPeople
		const splitTip = countTip / newPeople
		price.innerHTML = countAll.toFixed(2)
		tip.innerHTML = splitTip.toFixed(2)
	} else if (t10.classList.contains('change')) {
		const countTip2 = newPrice * newTip2
		const countAll2 = (newPrice + countTip2) / newPeople
		const splitTip2 = countTip2 / newPeople
		price.innerHTML = countAll2.toFixed(2)
		tip.innerHTML = splitTip2.toFixed(2)
	}  else if (t15.classList.contains('change')) {
		const countTip3 = newPrice * newTip3
		const countAll3 = (newPrice + countTip3) / newPeople
		const splitTip3 = countTip3 / newPeople
		price.innerHTML = countAll3.toFixed(2)
		tip.innerHTML = splitTip3.toFixed(2)
	} else if (t25.classList.contains('change')) {
		const countTip4 = newPrice * newTip4
		const countAll4 = (newPrice + countTip4) / newPeople
		const splitTip4 = countTip4 / newPeople
		price.innerHTML = countAll4.toFixed(2)
		tip.innerHTML = splitTip4.toFixed(2)
	} else if (t50.classList.contains('change')) {
		const countTip5 = newPrice * newTip5
		const countAll5 = (newPrice + countTip5) / newPeople
		const splitTip5 = countTip5 / newPeople
		price.innerHTML = countAll5.toFixed(2)
		tip.innerHTML = splitTip5.toFixed(2)
	} else if(tcustom.value > 0){
        const countTip6 = newPrice * customTip
		const countAll6 = (newPrice + countTip6) / newPeople
		const splitTip6 = countTip6 / newPeople
		price.innerHTML = countAll6.toFixed(2)
		tip.innerHTML = splitTip6.toFixed(2)
    } else {
		const result = newPrice / newPeople
		price.innerHTML = result.toFixed(2)
		tip.innerHTML = '0.00 '
	}
}

reset.addEventListener('click', countBill)
t5.addEventListener('click', changeColor1)
t10.addEventListener('click', changeColor2)
t15.addEventListener('click', changeColor3)
t25.addEventListener('click', changeColor4)
t50.addEventListener('click', changeColor5)
