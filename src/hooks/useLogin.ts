import { useAppDispatch } from './../store/hooks';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { updateUser } from '../features/auth/authSlice';
import { useAccessToken } from './useAccessToken';
import api from '../utils/axios/instance';
import { QueryKey } from './QueryKey';

const fetchUserLogin = async (token: string) => {
  const response = await api.get(`auth/token`, {
    params: {
      token: token
    }
  });
  return response.data;
};

export function useLogin() {
  const dispatch = useAppDispatch();
  const token = useAccessToken();
  const { data } = useQuery({
    queryKey: [QueryKey.fetchUserLogin],
    queryFn: () => fetchUserLogin(token)
  });
  useEffect(() => {
    if (data) {
      dispatch(updateUser(data));
    }
  }, [data, dispatch]);
}
