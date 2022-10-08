const formEl = document.querySelector('.login-form');

const handleSubmit = (event) => {
    event.preventDefault();
    const {
        elements: { email, password } } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        return console.log('All fields must be filled!');
    };
    const userData = {
        email: email.value,
        password: password.value,
    };
    console.log(userData);
    event.currentTarget.reset;
    }
formEl.addEventListener('submit', handleSubmit);
