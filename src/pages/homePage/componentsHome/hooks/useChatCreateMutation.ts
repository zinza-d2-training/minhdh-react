import { useMutation } from '@tanstack/react-query';
import api from '../../../../utils/axios/instance';
import { ChatCreate } from '../BoxChat';

const createChat = async (chat: ChatCreate) => {
  const res = await api.post('/chats', chat);
  return res.data;
};

export const useChatCreateMutation = () => {
  return useMutation({
    mutationFn: createChat
  });
};
