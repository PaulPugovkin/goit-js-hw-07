// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для
// увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление интерфейса



const counterEl = document.querySelector('#value');
const btn = document.querySelectorAll('button')
const incrementBtn = btn[1];
const decrementBtn = btn[0];

function calcClick(el) {
    let counterValue = 0;
    incrementBtn.addEventListener('click', () => {
        counterValue += 1
        el.textContent = counterValue;
    });
    decrementBtn.addEventListener('click', () => {
        counterValue -= 1
        el.textContent = counterValue;
    })
}

calcClick(counterEl);

