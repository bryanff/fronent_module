export const Storage = {
    _storage: window.localStorage,
    get : (key) => {
        return JSON.parse(window.localStorage.getItem(key)); 
    },

    set : (key, value) => {
        if(typeof value !== 'object')
            throw new Error('value argument expects an object');
        return window.localStorage.setItem(key, JSON.stringify(value));
    },

    remove : (key) => {
        window.localStorage.removeItem(key);
    },
}

