// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и
// выведет в консоль текст заголовка элемента(тега < h2 >)
//  и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((number) => {
console.log(`Category: ${number.firstElementChild.textContent}
Elements: ${number.lastElementChild.children.length}`);
});

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesEl = [...totalCategories];
// // console.log(categories);

// categoriesEl.forEach(number => {
// console.log(`Category: ${number.children[0].textContent}
// Elements: ${number.children[1].children.length}`);
// });












