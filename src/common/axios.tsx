import axios from 'axios';

const services = axios.create({
    baseURL: 'https://ben-trinh-api.herokuapp.com'
})

services.interceptors.request.use(config => {
    config.headers = { "Access-Control-Allow-Origin": "*" }
    return config;
}, error => {
    return Promise.reject(error);
})

export default services;