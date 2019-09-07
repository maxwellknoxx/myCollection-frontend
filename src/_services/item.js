import { handleResponse, requestOptions } from '../_helpers';
import { url } from './config';

export const userService = {
    login,
    logout,
    createUser,
    findAll
};

export default {
    findAll: () => {
        return http.get('item/allItems')
    },

    findAllItemsByCategory: (id) => {
        return http.get('item/allItemsByCategory/' + id)
    },

    findItemById: (id) => {
        return http.get('item/items/' + id)
    }

}