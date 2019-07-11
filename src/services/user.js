import { http } from './config'

export default {

    checkInformation: (user) => {
        return http.post('user/information', user)
    },

    update: (user) => {
        return http.put('user/users', user)
    }


}