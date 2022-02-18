import Auth from './service/auth.js';
import { signUpValidator } from './helpers/validators/signInValidator.js';

const form = document.getElementById("register_form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const validation = document.getElementById("password_validation");

let signInValidator = new signUpValidator(form, name, email, password, validation);

form.addEventListener('submit', async event => {
    event.preventDefault();
    if(signInValidator.validate()){
        alert('all okey');
        await Auth.signUp({ email: email.value, password: password.value });
    }
});
