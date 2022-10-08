function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');

const handleClick = (event) => {
  bodyEl.style.background = getRandomHexColor();
  textEl.textContent = bodyEl.style.background;
};
btnEl.addEventListener('click', handleClick);