import axios from 'axios'

const API_URL = "https://conduit.productionready.io/api"

const headers = {
    'Content-Type': 'application/json'
  }

class AuthService {
    login(user) {

        let data ={
            "user":{
                "email": user.email,
                "password": user.password
            }}

        return axios.post(API_URL + '/users/login', JSON.stringify(data),{ headers}).then(response => {
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