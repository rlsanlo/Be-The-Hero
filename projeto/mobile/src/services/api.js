import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://192.168.0.18:3333'
});

export default api;