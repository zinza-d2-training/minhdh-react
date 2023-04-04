import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { Message } from '../BoxChat';

export const getMessages = async (id?: number) => {
  const res = await api.get<Message[]>(`/messages/${id}`);
  return res.data;
};

export const useMessagesQuery = (id?: number) => {
  return useQuery({
    queryKey: [QueryKey.getMessages, id],
    queryFn: async () => getMessages(id)
  });
};
