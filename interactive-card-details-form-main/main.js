const number = document.querySelector('.inputNumber')
const dateM = document.querySelector('.dateM')
const dateY = document.querySelector('.dateY')
const cvc = document.querySelector('.inputCvc')
const wrongCvc = document.querySelector('.wrongCvc')
const btn = document.querySelector('.button')
const pNumber = document.querySelector('.wrongNumber')
const wrongDate = document.querySelector('.wrongDate')
const inputNumber = document.querySelector('.inputNumber')
const form = document.querySelector('.form')
const complete = document.querySelector('.complete')
let number2 = "432 32 42dcs"

const checkDate = () => {
	if (dateY.value.length !== 2 && dateM.value.length !== 2) {
		wrongDate.style.display = 'block'
		dateY.style.border = '1px solid red'
		dateM.style.border = '1px solid red'
	} else if (dateY.value.length == 2 && dateY.value.length == 2) {
		wrongDate.style.display = 'none'
		dateY.style.border = '1px solid #dedddf'
		dateM.style.border = '1px solid #dedddf'
	}
}

const checkNumber = () => {
	if (inputNumber.value.length !== 12) {
		pNumber.style.display = 'block'
		inputNumber.style.border = '1px solid red'
	} else if (inputNumber.value.length === 12) {
		pNumber.style.display = 'none'
		inputNumber.style.border = '1px solid #dedddf'
	}
}

const checkCvc = () => {
	if (cvc.value.length !== 3) {
		wrongCvc.style.display = 'block'
		cvc.style.border = '1px solid red'
	} else if (cvc.value.length === 3) {
		wrongCvc.style.display = 'none'
		cvc.style.border = '1px solid #dedddf'
	}
}

const allGood = () => {
    if(dateY.value.length == 2 && dateY.value.length == 2 && inputNumber.value.length === 12 && cvc.value.length === 3){
        form.classList.remove('block')
        form.classList.add('none')
        complete.classList.remove('none')
        complete.classList.add('block')
    }
}

const checkAll = () => {
	checkDate()
	checkNumber()
	checkCvc()
    allGood()
}

btn.addEventListener('click', checkAll)
