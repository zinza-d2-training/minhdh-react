import { useEffect } from 'react';
import { useAppSelector } from '../store';
import { selectToken } from '../features/user/userSlice';
import { useLocalStorage } from './useLocalStorage';
export function useAccessToken() {
  const tokenUser = useAppSelector(selectToken);
  const [token, setToken] = useLocalStorage('token', '');
  useEffect(() => {
    if (tokenUser) {
      setToken(tokenUser);
    }
  }, [tokenUser, setToken]);
  return token;
}
