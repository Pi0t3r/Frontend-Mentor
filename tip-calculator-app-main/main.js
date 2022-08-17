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
	const newTip = parseFloat(t5.value)

	if (t5.classList.contains('change')) {
        const countTip = newPrice * newTip
        const countAll = (newPrice + countTip) / newPeople
        const splitTip = newPrice * newTip / newPeople
        price.innerHTML = countAll.toFixed(2)
        tipResult.innerHTML = splitTip.toFixed(2)
	} else {
		const result = newPrice / newPeople
		price.innerHTML = result.toFixed(2)
        tipResult.innerHTML = ' '
	}
}

reset.addEventListener('click', countBill)
t5.addEventListener('click', changeColor1)
t10.addEventListener('click', changeColor2)
t15.addEventListener('click', changeColor3)
t25.addEventListener('click', changeColor4)
t50.addEventListener('click', changeColor5)
