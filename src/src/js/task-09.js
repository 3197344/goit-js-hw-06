function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// function changesBackgroundColorOfBody(event) {
//   document.body.style.backgroundColor = `${getRandomHexColor()}`;
//   spanRef.textContent = `${getRandomHexColor()}`;
// }