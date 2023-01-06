import { AxiosRequestConfig } from 'axios';
import { useEffect } from 'react';
import api from '../utils/axios/instance';
import { useAccessToken } from './useAccessToken';

const useAxios = () => {
  const token: string = useAccessToken();
  useEffect(() => {
    const requestIntercept = api.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        if (token) {
          config.headers = {
            Authorization: `Bearer ${token}`
          };
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          prevRequest.headers['Authorization'] = `Bearer ${token}`;
          return api(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [token]);
  return api;
};

export default useAxios;
