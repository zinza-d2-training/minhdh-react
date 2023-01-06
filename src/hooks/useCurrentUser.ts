import { selectUser } from './../features/auth/authSlice';
import { useAppSelector } from '../store';

export const useCurrentUser = () => {
  return useAppSelector(selectUser);
};
