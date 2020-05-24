import axios from 'axios'
import authHeader from './auth-header';

const AUTH_API_URL = "https://conduit.productionready.io/api"

const headers = {
    'Content-Type': 'application/json'
}

class AuthService {
    login(user) {
        let { email, password } = user;
        let data = { "user": { email, password } }

        return axios.post(AUTH_API_URL + '/users/login', JSON.stringify(data), { headers }).then(response => {

            if (response.data.user && response.data.user.token) {
                window.localStorage.setItem('user', JSON.stringify(response.data.user))
                //window.localStorage.setItem('access_token', JSON.stringify(response.data.user.token))
            }

            return response.data
        })
    }

    logout() {
        window.localStorage.removeItem('user')
        //window.localStorage.removeItem('access_token')
    }

    register(user) {
        let data = { user }

        return axios.post(AUTH_API_URL + '/users', JSON.stringify(data), { headers }).then(response => {
            if (response.data.user && response.data.user.token) {
                window.localStorage.setItem('user', JSON.stringify(response.data.user))
                //window.localStorage.setItem('access_token', JSON.stringify(response.data.user.token))
            }

            return response.data
        })

    }
}

export default new AuthService();

export const UserService = {
    get() {
        return new axios().get(`user/`, { headers: authHeader() })
    },

    update(user) {
        return new axios().put(`user/`, user, { headers: authHeader() })
    }
}
