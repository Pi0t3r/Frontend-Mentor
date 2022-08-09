const number = document.querySelector('.inputNumber')
const dateM = document.querySelector('.dateM')
const dateY = document.querySelector('.dateY')
const cvc = document.querySelector('.inputCvc')
const btn = document.querySelector('.button')
const pNumber = document.querySelector('.wrongNumber')
const wrongDate = document.querySelector('.wrongDate')

const checknumber = () => {
	if (number.textContent.contains('a-zA-Z')) {
		pNumber.classList.remove('none')
		pNumber.classList.add('block')
	}
}

const checkDateM = () => {
    if(dateM.value.length == 0 || dateM.value.length >=3){
        wrongDate.style.display ='block'
        dateM.style.border = '1px solid red'
    }
}
const checkDateY = () => {
    if(dateY.value.length == 0 || dateY.value.length >=3){
        wrongDate.style.display ='block'
        dateY.style.border = '1px solid red'
    }
}
btn.addEventListener('click',checkDateM)
btn.addEventListener('click',checkDateY)
btn.addEventListener('click', checknumber)
