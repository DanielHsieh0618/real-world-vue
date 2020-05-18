import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://conduit.productionready.io/api";


class ApiService {
    constructor(){
        this.$axios = axios.create({
            baseURL:API_URL,
            timeout: 1000,
            headers: authHeader()
        })
    }

    query(resource, params) {
        return this.$axios.get(resource, params).catch(error => {
          throw new Error(`[RWV] ApiService ${error}`);
        });
    }
    
  get(resource, slug = "") {
    return this.$axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }

  post(resource, params) {
    return this.$axios.post(`${resource}`, params);
  }

  update(resource, slug, params) {
    return this.$axios.put(`${resource}/${slug}`, params);
  }

  put(resource, params) {
    return this.$axios.put(`${resource}`, params);
  }

  delete(resource) {
    return this.$axios.delete(resource).catch(error => {
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
