import { http } from './config'

export default {

    findAll: () => {
        return http.get('category/allCategories')
    }


}