import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const BoxChat = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <Stack position="fixed" bottom="5%" right="5%">
      <Button
        aria-describedby={id}
        onClick={handleClick}
        variant="contained"
        sx={{
          borderRadius: '50%',
          paddingTop: '15px',
          paddingBottom: '15px'
        }}>
        <ChatIcon fontSize="large" />
      </Button>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="top-end"
        transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Stack direction="column" alignItems="center">
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  backgroundColor: 'rgb(30, 144, 255)',
                  borderRadius: '10px',
                  padding: '10px 0 10px 10px'
                }}>
                <Stack>
                  <SupportAgentIcon htmlColor="white" fontSize="large" />
                </Stack>
                <Stack direction="column">
                  <Stack>
                    <Typography fontWeight="700" variant="h5" color="white">
                      Support
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography color="white">
                      Tôi có thể giúp gì cho bạn
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Button caria-describedby={id} onClick={handleClick}>
                    <CloseIcon htmlColor="white" />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Fade>
        )}
      </Popper>
    </Stack>
  );
};

export default BoxChat;
