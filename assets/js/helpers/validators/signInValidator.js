"use strict";

export const emailValidator = (email) => {
    if (!email){
        return 'Email is required';
    }
        
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }

    return '';
}

export const passwordValidator = (password, passwordConfirmation = "", minlength = 4,isForSignUp = false) => {
    if (!password) return 'Password is required';

    if(isForSignUp){
        // if (password.length < minlength) {
        //     return `Please enter a password that's at least ${minlength} characters long`;
        // }
          
        if(passwordConfirmation != password){
            return 'Passwords do not match';
        }
        
        
        //   const hasCapitalLetter = /[A-Z]/g;
        //   if (!hasCapitalLetter.test(password)) {
        //     return 'Please use at least one capital letter.';
        //   }
        
        //   const hasNumber = /\d/g;
        //   if (!hasNumber.test(password)) {
        //     return 'Please use at least one number.';
        //   }
    }
  
    return '';
}

export function signInValidator(form, email, password){
    this._form      = form;
    this._email     = email;
    this._password  = password;

    this.validate = () => {
        let isValid = true;
        this.cleanErrors(this._email);
        this.cleanErrors(this._password);
        const isValidEmail = emailValidator(this._email.value);
        const isValidPassword = passwordValidator(this._password.value);

        if(isValidEmail){
            this.setError(this._email, isValidEmail);
            isValid = false;
        }

        if(isValidPassword){
            this.setError(this._password, isValidPassword);
            isValid = false;
        }
        return isValid;
    };

    this.setError = (field, message) => {
        field.classList.add("auth-form__input--error");
        field.parentElement.querySelector('.auth-form__error-message').innerText = message
    };

    this.cleanErrors = (field) => {
        field.classList.remove('auth-form__input--error');
        field.parentElement.querySelector('.auth-form__error-message').innerText = "";
    };
}

export function signUpValidator(form, name, email, password, validation){
    this._form      = form;
    this._name      = name;
    this._email     = email;
    this._password  = password;
    this._validation     = validation;

    this.validate = () => {
        let isValid = true;
        this.cleanErrors(this._email);
        this.cleanErrors(this._password);
        this.cleanErrors(this._validation);
        this.cleanErrors(this._name);
        const isValidEmail = emailValidator(this._email.value);
        const isValidPassword = passwordValidator(this._password.value, this._validation.value, 8, true );
        if(this._name.value.trim() === ""){
            this.setError(this._name, "Name is required");
            isValid = false
        }
        if(isValidEmail){
            this.setError(this._email, isValidEmail);
            isValid = false;
        }

        if(isValidPassword){
            this.setError(this._password, isValidPassword);
            this.setError(this._validation, isValidPassword);
            isValid = false;
        }
        return isValid;
    };

    this.setError = (field, message) => {
        field.classList.add("auth-form__input--error");
        field.parentElement.querySelector('.auth-form__error-message').innerText = message
    };

    this.cleanErrors = (field) => {
        field.classList.remove('auth-form__input--error');
        field.parentElement.querySelector('.auth-form__error-message').innerText = "";
    };
}