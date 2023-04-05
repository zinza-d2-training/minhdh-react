import { useMutation } from '@tanstack/react-query';
import api from '../../../../utils/axios/instance';
import { MessageCreate } from '../BoxChat';

const createMessage = async (message: MessageCreate) => {
  const res = await api.post('/messages', message);
  return res.data;
};

export const useMessageCreateMutation = () => {
  return useMutation({
    mutationFn: createMessage
  });
};
