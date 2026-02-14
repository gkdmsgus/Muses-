import axios from 'axios';

const axiosInstance = axios.create();

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
