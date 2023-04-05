import { useQuery } from '@tanstack/react-query';
import { User } from '../../../features/auth/authSlice';
import { QueryKey } from '../../../hooks/QueryKey';
import api from '../../../utils/axios/instance';

export const getUser = async (id?: number) => {
  const res = await api.get<User>(`/users/${id}/chat`);
  return res.data;
};

export const useUserByChatIdQuery = (id?: number) => {
  return useQuery({
    queryKey: [QueryKey.getUserByChatId, id],
    queryFn: async () => getUser(id)
  });
};
