import { handleResponse, requestOptions } from '../_helpers';
import { url } from './config';


export const userService = {
    login,
    logout,
    createUser,
    findAll
};

function login(username, password) {
    return fetch(url + `v1/auth/login`, requestOptions.post({ username, password }))
        .then(handleResponse)
        .then(user => {
            if (user) {
                localStorage.setItem("jwt", user.jwt);
                localStorage.setItem("role", user.message);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function findAll() {
    return fetch(url + `v1/user/users`, requestOptions.get()).then(handleResponse);
}

function createUser(userInformation) {
    return fetch(url + `v1/auth/signup`, requestOptions.post({ userInformation }))
        .then(handleResponse)
        .then(response => {
            return response;
        });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLogged');
}
