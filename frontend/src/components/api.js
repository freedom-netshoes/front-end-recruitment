const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081/'
});

module.exports = axiosInstance;
