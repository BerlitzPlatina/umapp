import Axios, { type AxiosRequestConfig } from 'axios';

import { API_URL } from '../../config';
import { useNotificationStore } from '../../stores/notifications';
import storage from '../../utils/storage';

function authRequestInterceptor (config: AxiosRequestConfig): AxiosRequestConfig {
  const token: string = storage.getToken();
  if (config.headers !== undefined) {
    if (token !== '') {
      config.headers.authorization = `${token}`;
    }
    config.headers.Accept = 'application/json';
  }

  return config;
}

export const axios = Axios.create({
  baseURL: API_URL
});

axios.interceptors.request.use(authRequestInterceptor as any);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const message = ((error.response?.data?.message !== '') ?? '') || error.message;
    useNotificationStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message
    });

    return await Promise.reject(error);
  }
);
