export const LOGIN = 'LOGIN';

// main function to dispatch to store login data
export const submitLogin = (email,password) => ({
    type: LOGIN,
    email: email,
    password: password,
});