function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

let amount = 0;
let collection = [];

let divEl = document.createElement('div');
  divEl.style.width = '30px';
  divEl.style.height = '30px';
divEl.style.backgroundColor = getRandomHexColor();
console.log(divEl);


function createBoxes(amount) {
  amount = inputEl.value;
  collection.length = amount;
  for (let i = 0; i < collection.length; i += 1) {
    collection[i] = divEl;
    divEl.style.width += '10px';
    divEl.style.height += '10px';
        console.log(collection[i]);

  }
  divBoxesEl.insertAdjacentHTML('afterbegin', collection.join(''));
 
};

createBtnEl.addEventListener('click', createBoxes);

console.log(amount);
console.log(collection);

