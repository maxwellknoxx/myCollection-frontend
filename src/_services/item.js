import { http } from './config.js'

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