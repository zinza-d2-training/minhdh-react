import { useQuery } from '@tanstack/react-query';
import { QueryKey } from '../../../../hooks/QueryKey';
import api from '../../../../utils/axios/instance';
import { Chat } from '../BoxChat';

export const getChat = async (id?: number) => {
  const res = await api.get<Chat>(`/chats/${id}/chat`);
  return res.data;
};

export const useChatByIdQuery = (id?: number) => {
  return useQuery({
    queryKey: [QueryKey.getChatById, id],
    queryFn: async () => getChat(id)
  });
};
