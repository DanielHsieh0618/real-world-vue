//import axios from 'axios'
import {ApiService} from './api.service'
import authHeader from './auth-header';

const API_URL = "https://conduit.productionready.io/api"

const headers = {
    'Content-Type': 'application/json'
}

class AuthService {
    login(user) {
        let { email, password  } = user;
        let data = { "user": { email, password  }  }

        return ApiService.post(API_URL + '/users/login', JSON.stringify(data), { headers }).then(response => {

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

        return ApiService.post(API_URL + '/users', JSON.stringify(data), { headers }).then(response => {
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
        return new ApiService().get(`user/`, {headers: authHeader()})
    },
  
    update(user) {
      return new ApiService().put(`user/`, user ,  {headers: authHeader()})
  }
}
  