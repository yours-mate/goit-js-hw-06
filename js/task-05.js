const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const handleInput = (event) => {
    event.currentTarget.value === '' ? outputEl.textContent = 'Anonymous' : outputEl.textContent = event.currentTarget.value;
    
}

inputEl.addEventListener('input', handleInput);