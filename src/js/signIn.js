import Auth from './service/auth.js';
import { signInValidator } from './helpers/validators/signInValidator.js';

const login_form = document.getElementById("login_form");
const email = document.getElementById("email");
const password = document.getElementById("password");

let signInValid = new signInValidator(login_form, email, password);

if(login_form){
    login_form.addEventListener('submit', async event => {
        event.preventDefault();
        if(signInValid.validate()){
            await Auth.signIn({ email: email.value, password: password.value });
        }
    });
}

