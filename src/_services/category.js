import { handleResponse, requestOptions } from '../_helpers';
import { url } from './config';


export const categoryService = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    findAll
};

function findAll() {
    return fetch(url + `v1/category/categories`, requestOptions.get())
    .then(handleResponse)
    .then(response => {
        return response;
    })
}

function deleteCategory(id) {
    return fetch(url + `v1/category/categories/` + id, requestOptions.get()) 
    .then(handleResponse)
    .then(response => {
        return response;
    })
}

function updateCategory(category){
    return fetch(url + `v1/category/categories`, requestOptions.put(category)) 
    .then(handleResponse)
    .then(response => {
        return response;
    })
}

function addCategory(category){
        return fetch(url + `v1/category/categories`, requestOptions.post(category)) 
        .then(handleResponse)
        .then(response => {
            return response;
        })
}

function getCategory(id) {
    return fetch(url + `v1/category/categories/${id}`, requestOptions.get())
    .then(handleResponse)
    .then(response => {
        return response;
    })
}