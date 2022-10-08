let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action=decrement]');
const incrementEl = document.querySelector('[data-action=increment]');
const handleDecrement = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;

};
const handleIncrement = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
decrementEl.addEventListener('click', handleDecrement);
incrementEl.addEventListener('click', handleIncrement);

