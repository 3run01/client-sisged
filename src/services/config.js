import axios from 'axios'
import store from '@/store'

export const http = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    headers: {
        Authorization: `Bearer ${ store.getters.getToken }`
    }
    
});