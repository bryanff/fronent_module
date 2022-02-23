import Auth from './service/auth.js';
import { signInValidator } from './helpers/validators/signInValidator.js';

const form = document.getElementById("login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");

let signUpValidator = new signInValidator(form, email, password);

form.addEventListener('submit', async event => {
    event.preventDefault();
    if(signUpValidator.validate()){
        await Auth.signIn({ email: email.value, password: password.value });
    }
});
