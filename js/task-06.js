// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.


// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество,
// то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const validateValueEl = document.querySelector('#validation-input')

validateValueEl.addEventListener('input', () => {
    if (validateValueEl.value.length >= 6) {
        validateValueEl.classList.add('valid')
        validateValueEl.classList.remove('invalid')
    } else {
        validateValueEl.classList.remove('valid')
        validateValueEl.classList.add('invalid')
    }
})