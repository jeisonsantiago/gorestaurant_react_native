import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  params: {
    id: undefined,
    category_like: undefined,
    name_like: undefined,
  },
});

export default api;
