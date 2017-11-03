import axios from 'axios';

// Global axios defaults
axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers['X-Access-Token'] = localStorage.getItem(process.env.TOKEN);

export default axios;
