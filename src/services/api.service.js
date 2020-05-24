import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://conduit.productionready.io/api";


class ApiService {
    constructor(){
        this.$axios = axios.create({
            baseURL:API_URL,
            timeout: 1000
        })
    }
    
  get(resource, config) {
    return this.$axios.get(`${resource}`, config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }

  post(resource, data , config) {
    return this.$axios.post(`${resource}`, data ,config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  }

  query(resource, params, config) {
    return this.$axios.get(resource, {params , ...config }).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
}

  put(resource, data, config) {
    return this.$axios.put(`${resource}`, data, config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  }


  delete(resource, config) {
    return this.$axios.delete(resource, config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  }

}
export default new ApiService();


export const TagsService = {
    get() {
      return new ApiService().get("tags");
    }
  };

export const ArticlesService = {
    get(slug) {
        return new ApiService().get('articles',slug)
    }
}

export const ProfileService = {
    get(username) {
        return new ApiService().get(`profiles/${username}`, {headers: authHeader()})
    }
}