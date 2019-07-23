import { http } from './config'

export default {

    findAll: () => {
        return http.get('category/allCategories')
    },

    findCategoryById: (id) => {
        return http.get('category/categories/' + id)
    }


}