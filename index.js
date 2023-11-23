const inputText = document.querySelector('.input_text');
const inputNumber = document.querySelector('.input_number');
const form = document.querySelector('.inputs');

const buttonConsole = document.querySelector('.input__button_console');
const buttonClear = document.querySelector('.input__button_clear');
const buttonHide = document.querySelector('.input__button_hide');
const buttonBlock = document.querySelector('.input__button_block');
const buttonColor = document.querySelector('.input__button_color');
const buttonCreate = document.querySelector('.input__button_create');
const buttonRemoveLast = document.querySelector('.input__button_remove-last');
const buttonRemoveN = document.querySelector('.input__button_remove-n');

const main = document.querySelector('.main');

console.log(inputText);

buttonConsole.addEventListener('click', () => {
  console.log('вывожу в консоль');
  console.log(inputText.value);
});

buttonClear.addEventListener('click', () => {
  clearInput();
});

function clearInput() {
  console.log('удаляю поле ввода');
  inputText.value = '';
}

buttonBlock.addEventListener('click', () => {
  if (inputText.disabled == true) {
    console.log('разблокирую');
    inputText.disabled = false;
    buttonBlock.textContent = 'Заблокировать';
    inputText.placeholder = 'Введите текст';
  } else {
    console.log('блокирую');
    inputText.disabled = true;
    buttonBlock.textContent = 'Разблокировать';
    inputText.placeholder = '';
  }
});

buttonHide.addEventListener('click', () => {
  inputText.classList.contains('input_hide')
    ? inputText.classList.remove('input_hide')
    : inputText.classList.add('input_hide');
});

buttonColor.addEventListener('click', () => {
  getRandomIndex();
  if (randIndex == 0) {
    inputText.style.backgroundColor = 'black';
  } else if (randIndex == 1) {
    inputText.style.backgroundColor = 'red';
  } else if (randIndex == 2) {
    inputText.style.backgroundColor = 'green';
  } else if (randIndex == 3) {
    inputText.style.backgroundColor = 'blue';
  }
});

let randIndex;

function getRandomIndex() {
  randIndex = Math.floor(Math.random() * 4);
  console.log(randIndex);
}

buttonCreate.addEventListener('click', () => {
  console.log('создаю');
  if (inputText.value !== '') {
    const div = document.createElement('div');
    div.classList.add('new-div');
    div.textContent = `${inputText.value}`;
    main.appendChild(div);
    clearInput();
  } else {
    alert('ВВЕДИ ЗНАЧЕНИЕ');
  }
});

buttonRemoveLast.addEventListener('click', () => {
  const blocks = document.querySelectorAll('.new-div');
  if (blocks.length >= 1) {
    blocks[blocks.length - 1].remove();
  } else {
    alert('НЕЧЕГО УДАЛЯТЬ');
  }
});

buttonRemoveN.addEventListener('click', () => {
  const blocks = document.querySelectorAll('.new-div');
  if (blocks.length >= 1) {
    blocks[inputNumber.value - 1].remove();
  } else {
    alert('НЕЧЕГО УДАЛЯТЬ');
  }
});
