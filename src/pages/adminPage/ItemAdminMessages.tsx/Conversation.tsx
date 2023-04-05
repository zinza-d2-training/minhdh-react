import { FC, useContext, useEffect, useMemo, useState } from 'react';
import { styled, Box, Typography } from "@mui/material";
import { UserContext } from '../../../context/UserProvider';
import './menu.css'
import { formatDate } from '../../homePage/componentsHome/Message';
import { User } from '../../../features/auth/authSlice';
import { useChatQuery } from '../../homePage/componentsHome/hooks/useGetChatForUser';
import moment from 'moment';

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;

interface Props {
  user: User;
  setChatId: any;
}

const Conversation: FC<Props> = ({ user, setChatId }) => {

  // const { setPerson, setSelectedChat } = useContext(UserContext);
  // const { account, newMessageFlag }  = useContext(AccountContext);

  const chatQuery = useChatQuery(user.id);
  const chat = useMemo(() => {
    return chatQuery.data ?? null
  }, [chatQuery.data])

  // useEffect(() => {
  //     const getConversationMessage = async() => {
  //         const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
  //         setMessage({ text: data?.message, timestamp: data?.updatedAt });
  //     }
  //     getConversationMessage();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newMessageFlag]);

  // const getUser = async () => {
  //   setChatId(user?.chat_id)
  // }

  return (
    <div className='personItem' onClick={() => setChatId(user.chat_id)}>
      <Box style={{ width: '100%' }}>
        <Container>
          <Typography>{user.name}</Typography>
          {
            chat?.message_flat &&
            <Timestamp>{moment(chat?.update_at).format('DD/MM/YYYY')}</Timestamp>
          }
        </Container>
        <Box>
          <Text>{chat?.message_flat?.includes('localhost') ? 'media' : chat?.message_flat}</Text>
        </Box>
      </Box>
    </div>
  )
}

export default Conversation;
