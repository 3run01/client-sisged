import { http } from './config'

export default {
    iniciar: (data) => {
        return http.post('/sessao/admin', data)
    },

}