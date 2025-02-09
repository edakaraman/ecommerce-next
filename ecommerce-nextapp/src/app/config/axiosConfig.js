import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        console.log('İstek başlıkları:', config.headers);
        config.headers['Products'] = 'product'; 
        console.log('İstek intercept edildi:', config);
        return config;
    },
    (error) => {
      console.error('İstek hatası:', error);
      return Promise.reject(error);
    }
  );

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Yanıt intercept edildi:', response);
    return response;
  },
  (error) => {
    if (error.response) {
        window.location.href = '/users';
      }
      return Promise.reject(error);
  }
);

export default axiosInstance;