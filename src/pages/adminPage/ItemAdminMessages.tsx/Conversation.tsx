import { FC, useMemo } from 'react';
import { styled, Box, Typography, Stack } from '@mui/material';
import './menu.css';
import { User } from '../../../features/auth/authSlice';
import { useChatQuery } from '../../homePage/componentsHome/hooks/useGetChatForUser';
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';

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
  const chatQuery = useChatQuery(user.id);
  const chat = useMemo(() => {
    return chatQuery.data ?? null;
  }, [chatQuery.data]);

  return (
    <div
      className="personItem"
      onClick={() => {
        setChatId(user.chat_id);
      }}>
      <Stack padding={1.5} alignItems="center" justifyContent="center">
        <PersonIcon fontSize="large" />
      </Stack>
      <Box style={{ width: '100%' }}>
        <Container>
          <Typography>{user.name}</Typography>
          {chat?.message_flat && (
            <Timestamp>
              {moment(chat?.update_at).format('DD/MM/YYYY')}
            </Timestamp>
          )}
        </Container>
        <Box>
          <Text>
            {chat?.message_flat?.includes('localhost')
              ? 'media'
              : chat?.message_flat}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Conversation;
