import Auth from './service/auth.js';
import { signUpValidator } from './helpers/validators/signInValidator.js';

const register_form = document.getElementById("register_form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const validation = document.getElementById("password_validation");

let signUpValid = new signUpValidator(register_form, name, email, password, validation);

if(register_form){
    register_form.addEventListener('submit', async event => {
        event.preventDefault();
        if(signUpValid.validate()){
            alert('all okey');
            await Auth.signUp({ email: email.value, password: password.value });
        }
    });
    
}