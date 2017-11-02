import axios from 'axios';

// Global axios defaults
axios.defaults.baseURL = process.env.API_URL;

export default axios;
