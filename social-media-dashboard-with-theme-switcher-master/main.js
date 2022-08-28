const btn = document.querySelector('.slider')

const elements = [document.querySelector('.one'),document.querySelector('.two'),document.querySelector('.three'),document.querySelector('.four')]
const numbers = [document.querySelector('.number1'),document.querySelector('.number2'),document.querySelector('.number3'),document.querySelector('.number4')]
const overviewCard = [document.querySelector('.first'),document.querySelector('.second'),document.querySelector('.third'),document.querySelector('.fourth'),document.querySelector('.fifth'),document.querySelector('.sixth'),document.querySelector('.seventh'),document.querySelector('.eighth')]
const numbersOverviewCard = [document.querySelector('.dark1'),document.querySelector('.dark2'),document.querySelector('.dark3'),document.querySelector('.dark4'),document.querySelector('.dark5'),document.querySelector('.dark6'),document.querySelector('.dark7'),document.querySelector('.dark8')]


const tryIt = () => {
    document.querySelector('.dark').classList.toggle('darkColor')
    document.querySelector('body').classList.toggle('body-color')
    document.querySelector('.h1').classList.toggle('gray')
    document.querySelector('.p').classList.toggle('green')

    function toggleCardColor(element){
        element.classList.toggle('bg-card')
    }
    function toggleNumberColor(element){
        element.classList.toggle('light-theme-text')
    }
    numbers.forEach(toggleNumberColor)
    numbersOverviewCard.forEach(toggleNumberColor)
    elements.forEach(toggleCardColor)
    overviewCard.forEach(toggleCardColor)
 }
btn.addEventListener('click',tryIt)

