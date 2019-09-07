import { handleResponse, requestOptions } from '../_helpers';
import { url } from './config';


export const userService = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    findAll
};

function findAll() {
    return fetch(url + `v1/category/categories`, requestOptions.get()).then(handleResponse);
}

function getCategory(id) {
    return fetch(url + `v1/category/categories/${id}`, requestOptions.get())
    .then(handleResponse)
    .then(response => {
        return response;
    })
}