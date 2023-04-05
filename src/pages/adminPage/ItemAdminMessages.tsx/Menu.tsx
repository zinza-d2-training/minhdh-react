import { Box } from '@mui/material'; import Conversations from './Conversations';
import { FC } from 'react';

interface Props {
  setChatId: any;
}
const Menu: FC<Props> = ({ setChatId }) => {
  return (
    <Box>
      <Conversations setChatId={setChatId} />
    </Box>
  )
}

export default Menu;
