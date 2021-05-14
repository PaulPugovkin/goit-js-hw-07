// Напиши скрипт который, при наборе текста в инпуте input#name
// input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input')
const greetName = document.querySelector('#name-output')

inputEl.addEventListener('input', () => {
    if (inputEl.value === '') {
        greetName.textContent = 'незнакомец'
    } else {
        greetName.textContent = inputEl.value;
    }
})   