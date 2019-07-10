import { http } from './config'

export default {

    checkInformation: (id, user) => {
        return http.get('user/information/' + id, user)
    }


}