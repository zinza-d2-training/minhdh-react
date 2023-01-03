import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUserLogin, selectIsLogin } from '../features/auth/authSlice';
import { useAccessToken } from './useAccessToken';
export function useLogin() {
  const token = useAccessToken();
  const isLogin = useAppSelector(selectIsLogin);
  const [refreshToken, setRefreshToken] = useState<string>('');
  useEffect(() => {
    setRefreshToken(token);
  }, [setRefreshToken, token]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (refreshToken) {
      dispatch(fetchUserLogin(refreshToken));
    }
  }, [refreshToken, dispatch]);
  return isLogin;
}
