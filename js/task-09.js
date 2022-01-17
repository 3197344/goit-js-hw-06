const spanEl = document.querySelector('.color');
const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changesBackgroundColorOfBody(event) {
  //  event.preventDefault();
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.innerHTML = `${getRandomHexColor()}`;
}
changesBackgroundColorOfBody();
button.addEventListener('click', changesBackgroundColorOfBody);
// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color и 
// выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.
// 