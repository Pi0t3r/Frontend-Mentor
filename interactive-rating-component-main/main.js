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
	card.classList.remove('block')
	thanks.classList.add('block')
	thanks.classList.remove('none')
}

one.addEventListener('click', () => {
	one.classList.toggle('active')
})
two.addEventListener('click', () => {
	two.classList.toggle('active')
})
three.addEventListener('click', () => {
	three.classList.toggle('active')
})
four.addEventListener('click', () => {
	four.classList.toggle('active')
})
five.addEventListener('click', () => {
	five.classList.toggle('active')
})

const addGrade1 = () => {
    if(one.classList.contains('active')){
        span.textContent = "1"
    }
}
const addGrade2 = () => {
    if(two.classList.contains('active')){
        span.textContent = "2"
    }
}
const addGrade3 = () => {
    if(three.classList.contains('active')){
        span.textContent = "3"
    }
}
const addGrade4 = () => {
    if(four.classList.contains('active')){
        span.textContent = "4"
    }
}
const addGrade5 = () => {
    if(five.classList.contains('active')){
        span.textContent = "5"
    }
}
submit.addEventListener('click',addGrade1)
submit.addEventListener('click',addGrade2)
submit.addEventListener('click',addGrade3)
submit.addEventListener('click',addGrade4)
submit.addEventListener('click',addGrade5)
submit.addEventListener('click', hideAndShow)
