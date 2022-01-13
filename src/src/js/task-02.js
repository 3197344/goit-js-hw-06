const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul');
const ingredientsTotalListEl = [];

const ingredientsListEl = ingredients.forEach((element) => {
const ingredientsTitleEl = document.createElement('li');

  ingredientsTitleEl.classList.add('item');
  ingredientsTitleEl.textContent = element;
  ingredientsTotalListEl.push(ingredientsTitleEl);
  console.log(ingredientsTitleEl);
  });

ingredientsEl.append(...ingredientsTotalListEl);


// Напиши скрипт, который для каждого элемента массива ingredients:
// console.log(ingredientsEl);
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.