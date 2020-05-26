import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://conduit.productionready.io/api";


class ApiService {
  constructor() {
    this.$axios = axios.create({
      baseURL: API_URL
      // timeout: 1000
    })
  }

  get(resource, config) {
    return this.$axios.get(`${resource}`, config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }

  post(resource, data, config) {
    return this.$axios.post(`${resource}`, data, config).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    })
  }

  query(resource, params, config) {
    return this.$axios.get(resource, { params, ...config }).catch(error => {
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
  query() {
    return new ApiService().get("tags");
  }
};

export const ArticlesService = {
  getList({ tag, author, favorited, limit, offset }) {
    return new ApiService().query('articles', { tag, author, favorited, limit, offset }, { headers: authHeader() })
  },

  getFeed({ limit, offset }) {
    return new ApiService().query('articles/feed', { limit, offset }, { headers: authHeader() })
  },

  get(slug) {
    return new ApiService().get(`articles/${slug}`, { headers: authHeader() })
  },

  create(data) {
    return new ApiService().post(`articles`, data, { headers: authHeader() })
  },

  // {
  //   "article": {
  //     "title": "How to train your dragon", Required 
  //     "description": "Ever wonder how?", Required 
  //     "body": "You have to believe", Required 
  //     "tagList": ["reactjs", "angularjs", "dragons"]
  //   }
  // }

  update(slug, data) {
    return new ApiService().put(`articles/${slug}`, data, { headers: authHeader() })
  },

  // Optional fields: title, description, body
  // {
  //   "article": {
  //     "title": "Did you train your dragon?" Optional 
  //   }
  // }

  delete(slug) {
    return new ApiService().delete(`articles/${slug}`, { headers: authHeader() })
  },

  addComment(slug, data) {
    return new ApiService().post(`articles/${slug}/comments`, data, { headers: authHeader() })
  },

  // {
  //   "comment": {
  //     "body": "His name was my name too."
  //   }
  // }

  deleteComment(slug, id) {
    return new ApiService().delete(`articles/${slug}/comments/${id}`, { headers: authHeader() })
  },

  favorite(slug) {
    return new ApiService().post(`articles/${slug}/favorite`, { headers: authHeader() })
  },

  unfavorite(slug) {
    return new ApiService().delete(`articles/${slug}/favorite`, { headers: authHeader() })
  }

}

export const ProfileService = {
  get(username) {
    return new ApiService().get(`profiles/${username}`, { headers: authHeader() })
  },

  follow(username) {
    return new ApiService().post(`profiles/${username}/follow`, { headers: authHeader() })
  },

  unfollow(username) {
    return new ApiService().delete(`profiles/${username}/follow`, { headers: authHeader() })
  }
}