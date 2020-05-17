import axios from 'axios'

const API_URL = "https://https://conduit.productionready.io/api"

class AuthService {
    login(user) {
        return axios.post(API_URL + 'signin', {
            username: user.username,
            password: user.password
        }).then(response => {
            if (response.data.accessToken) {
                window.localStorage.setItem('user', JSON.stringify(response.data))

            }

            return response.data
        })
    }

    logout() {
        window.localStorage.removeItem('user')
    }

    register(user) {
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();