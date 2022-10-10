const inputEl = document.querySelector('#validation-input');
const handleInput = event => {
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.replace('invalid', 'valid') || inputEl.classList.add('valid')
    : inputEl.classList.replace('valid', 'invalid') || inputEl.classList.add('invalid');
  console.log(event.currentTarget.value.length);
};

inputEl.addEventListener('blur', handleInput);
