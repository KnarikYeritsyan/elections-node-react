import axios from "axios";

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (e) => Promise.reject(e));

api.interceptors.response.use((r) => r, (e) => {
  if (e.response.status === 401) {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return Promise.reject(e);
});

class Api {
  static peopleSingIn(passport) {
    return api.post('/people/sign-in', { passport });
  }

  static getCandidates() {
    return api.get('/candidates')
  }

  static addVote(id) {
    return api.post('/candidates/vote', { id })
  }
}

export default Api
