import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://https://conduit.productionready.io/api";

class UserService {
    getAllArticles() {
        return axios.get(API_URL + 'articles', { headers: authHeader() })
    }
}

export default new UserService();