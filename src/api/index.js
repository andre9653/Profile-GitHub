import axios from 'axios';

const baseUrl = 'https://api.github.com/';
const api = axios.create(baseUrl);

export default api;
