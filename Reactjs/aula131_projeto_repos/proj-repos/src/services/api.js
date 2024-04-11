import axios from 'axios';

const apt = axios.create({
    baseURL: 'https://api.github.com/'
});

export default apt;