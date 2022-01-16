// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous".


let nameInputEl = document.querySelector('#name-input');
nameInputEl.addEventListener('input', onInputChange);

let nameOutputEl = document.querySelector('#name-output');

function onInputChange(event) {
  nameInputEl = event.currentTarget.value;
  console.log(nameInputEl);

  nameInputEl !== ' ' ? (nameOutputEl.innerText = nameInputEl.trim()) : 'Anonymous';
}