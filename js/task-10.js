// Напиши скрипт создания и очистки коллекции элементов. Пользователь
//  вводит количество элементов в input и нажимает кнопку Создать,
//   после чего рендерится коллекция.При нажатии на кнопку Очистить,
//     коллекция элементов очищается.

//  Создай функцию createBoxes(amount), которая принимает один параметр
//   - число.Функция создает столько < div >, сколько указано в amount
//    и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего
//  на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//  Используй готовую функцию getRandomHexColor для получения цвета.


const controlsEl = document.getElementById('boxes');
console.log(controlsEl);
const create = document.querySelector('[data-create]');
console.log(create);
const destroy = document.querySelector('[data-destroy]');
console.log(destroy);
create.addEventListener("click", getAmount);
destroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
getRandomHexColor();
console.log(getRandomHexColor());

function createBoxes(amount) {
  const basicSize = 30;
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i+=1) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    // div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function getAmount() {
  const amount = +document.querySelector('#controls input').value;
  createBoxes(amount);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
// function random() {
//   return Math.floor(Math.random() * 256);
// }
// console.log( random())