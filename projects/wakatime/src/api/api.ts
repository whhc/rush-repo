import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosParams = {
  baseURL: process.env.NODE_ENV === 'development' ? '/dev' : ''
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config);
    }
  };
};

export default api(axiosInstance);
