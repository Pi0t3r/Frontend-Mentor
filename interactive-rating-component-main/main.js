const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const submit = document.querySelector('.submit')
const card = document.querySelector('.card')
const thanks = document.querySelector('.thank-you-state')
const span = document.querySelector('.span')
const grade = document.querySelectorAll('.grade')

const hideAndShow = () => {
	card.classList.add('none')
	thanks.classList.add('block')
}

const addColor = () => {
    grade.classList.toggle('selected')
}

grade.addEventListener('click',addColor)


submit.addEventListener('click', hideAndShow)
