const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '57px';
const handleInput = (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(event.currentTarget.value);
}

inputEl.addEventListener('input', handleInput);