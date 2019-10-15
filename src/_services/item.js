import { handleResponse, requestOptions } from '../_helpers';
import { url } from './config';

export const itemService = {
    findAllItemsByCategory,
    findItemById,
    findAll
};

function findAllItemsByCategory(id) {
    return fetch(url + `v1/item/allItemsByCategory/` + id, requestOptions.get())
        .then(handleResponse)
        .then(response => {
            return response;
        })
}

function findItemById() {
    return fetch(url + `v1/item/items/` + id, requestOptions.get())
        .then(handleResponse)
        .then(response => {
            return response;
        })
}

function findAll() {
        return fetch(url + `v1/item/items`, requestOptions.get())
        .then(handleResponse)
        .then(response => {
            return response;
        })
}