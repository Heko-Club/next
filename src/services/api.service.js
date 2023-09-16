import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5079/api', //replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Function to set token
instance.setToken = function (token) {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log('Token set:', token);
  } else {
    delete instance.defaults.headers.common['Authorization'];
    console.log('Token removed');
  }
}


export default instance;