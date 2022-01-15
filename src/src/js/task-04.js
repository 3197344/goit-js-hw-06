// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
//  уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = document.querySelector('#value');
let valueEl = Number(document.querySelector('#value').textContent);

const minusBtn = document.querySelector('#counter').firstElementChild;
const addBtn = document.querySelector('#counter').lastElementChild;

addBtn.addEventListener('click', element => {
console.log("Вешаю слушателя события на целевую кнопку");
valueEl += 1;
counterValue.innerText = valueEl;
console.log("значение", counterValue);
});

minusBtn.addEventListener('click', element => {
console.log("Снимаю слушателя события с целевой кнопки");
valueEl -= 1;

counterValue.innerText = valueEl;
console.log("значение", counterValue);
});