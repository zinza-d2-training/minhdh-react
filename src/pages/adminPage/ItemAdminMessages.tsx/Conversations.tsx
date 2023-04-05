import { useState, useEffect, useContext, useMemo, FC } from 'react';
import { Box, styled, Divider } from '@mui/material';
import { useAllCustomersQuery } from '../hooks/useAllCustomerQuery';
import Conversation from './Conversation';

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;
interface Props {
  setChatId: any;
}

const Conversations: FC<Props> = ({ setChatId }) => {
  const customersQuery = useAllCustomersQuery();
  const users = useMemo(() => {
    return customersQuery.data ?? [];
  }, [customersQuery.data]);

  return (
    <Component>
      {users &&
        users.map((user: any, index: any) => (
          <>
            <Conversation setChatId={setChatId} user={user} key={user.id} />
            {users.length !== index + 1 && <StyledDivider />}
          </>
        ))}
    </Component>
  );
};

export default Conversations;
