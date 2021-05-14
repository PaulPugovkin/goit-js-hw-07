// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит
// все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов
// ! используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = (arr, list) => {
  arr.forEach(el => {
    const listEl = document.createElement('li')
    listEl.innerText = el;
    console.log(listEl);
    list.appendChild(listEl);
  })
}

const ingredientsList = document.querySelector('#ingredients')

createList(ingredients, ingredientsList)
