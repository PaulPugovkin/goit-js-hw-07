// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий 
// в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов
// в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categEl = document.querySelector('#categories')
const categoriesElItemCount = categEl.childElementCount
console.log(`Количество категорий в ul#categories: ${categoriesElItemCount}`);



const categoriesList = document.querySelectorAll('.item')

const categoriesListItem = categoriesList.forEach(li => console.log(`Категория: ${li.firstElementChild.textContent}
Количество элементов: ${li.querySelector('ul').childElementCount}`))

categoriesListItem
