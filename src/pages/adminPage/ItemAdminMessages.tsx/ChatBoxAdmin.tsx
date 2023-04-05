import { FC, useMemo } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import { useChatByIdQuery } from '../../homePage/componentsHome/hooks/useGetChatByIdQuery';
import { useUserByChatIdQuery } from '../hooks/useGetUserByChatIdQuery';
import MessagesAdmin from './MessagesAdmin';

interface Props {
  chatId: number;
}
const ChatBoxAdmin: FC<Props> = ({ chatId }) => {
  const chatQuery = useChatByIdQuery(chatId);
  const chat = useMemo(() => {
    return chatQuery.data ?? null;
  }, [chatQuery.data]);

  const userQuery = useUserByChatIdQuery(chatId);
  const userCurrent = useMemo(() => {
    return userQuery.data ?? null;
  }, [userQuery.data]);

  return (
    <Box>
      <ChatHeader userCurrent={userCurrent} />
      <MessagesAdmin userCurrent={userCurrent} chat={chat} />
    </Box>
  );
};

export default ChatBoxAdmin;
