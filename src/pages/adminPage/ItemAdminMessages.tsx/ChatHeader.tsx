import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { User } from '../../../features/auth/authSlice';

const Header = styled(Box)`
  height: 44px;
  background: #1e90ff;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Name = styled(Typography)`
  margin-left: 12px !important;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const RightContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 22px;
    color: #000;
  }
`;

const Status = styled(Typography)`
  font-size: 15px !important;
  color: rgb(0, 0, 0, 0.6);
  margin-left: 12px !important;
  display: inline-block;
`;

const Onl = styled(Box)`
  display: inline-block;
  padding: 5px;
  border-radius: 50%;
  margin-left: 5px;
  background-color: chartreuse;
`;

const Off = styled(Box)`
  display: inline-block;
  padding: 5px;
  border-radius: 50%;
  background-color: red;
  margin-left: 5px;
`;

interface Props {
  userCurrent: User | null;
}

const ChatHeader: FC<Props> = ({ userCurrent }) => {
  return (
    <Header>
      <Box>
        <Name>{userCurrent?.name}</Name>
        {/* <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? 'Online'
            : 'Offline'}
        </Status> */}
        {/* {activeUsers?.find((user) => user.sub === person.sub) ? (
          <Onl />
        ) : (
          <Off />
        )} */}
      </Box>
      <RightContainer>
        {/* <Search /> */}
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
