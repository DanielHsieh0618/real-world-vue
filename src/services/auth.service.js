import axios from 'axios'

const API_URL = "https://conduit.productionready.io/api"

const headers = {
    'Content-Type': 'application/json'
}

class AuthService {
    login(user) {
        
        let data = {
            "user": {
                "email": user.email,
                "password": user.password
            }
        }

        return axios.post(API_URL + '/users/login', JSON.stringify(data), { headers }).then(response => {
            
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
        return axios.post(API_URL + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();