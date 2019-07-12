import { http } from './config'

export default {

    signup: (userInformation) => {
        return http.post('auth/signup', userInformation);
    },

    login: (user) => {
        return http.post('auth/signin', user)
    }

}