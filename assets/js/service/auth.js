import { 
    BASE_URL,
    AUTH_STORAGE,
    HttpStatus
 } from "../constants.js";

import { Storage } from  "./storage.js"

export default {

    signIn : async (credentials) => {
        const url = BASE_URL + 'login';
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await result.json();
        if(result.status === HttpStatus.OK){
            alert('Login successfully');
            Storage.set(AUTH_STORAGE, {
                jwt: data.token ,
            });
        }
    },

    signUp : async ({ email, password }) => {
        const url = BASE_URL + 'register';
        const result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await result.json();
        if(result.status === HttpStatus.OK){
            alert('Register successfully');
            Storage.set(AUTH_STORAGE, {
                id: data.id,
                jwt: data.token,
            });
        }
    },

    forgotPassword : (password) => {
        
    },
}

