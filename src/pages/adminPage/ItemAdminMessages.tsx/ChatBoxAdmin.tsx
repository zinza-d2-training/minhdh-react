import { useContext, useState, useEffect, FC, useMemo } from 'react';
import { Box } from '@mui/material';
import { UserContext } from '../../../context/UserProvider';
import { AccountContext } from '../../../context/AccountProvider';
import { getConversation } from '../../../service/api';
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useChatQuery } from '../../homePage/componentsHome/hooks/useGetChatForUser';
import { useAppSelector } from '../../../store';
import { useCurrentUser } from '../../../hooks/useCurrentUser';

interface Props {
  chatId: number;
}
const ChatBoxAdmin: FC<Props> = ({ chatId }) => {

  const user = useCurrentUser()
  const chatQuery = useChatQuery(chatId)
  const chat = useMemo(() => {
    return chatQuery.data ?? null;
  }, [chatQuery.data])


  return (
    <Box>
      <ChatHeader person={person} />
      <Messages person={person} chat={chat} />
    </Box>
  )
}

export default ChatBoxAdmin;
