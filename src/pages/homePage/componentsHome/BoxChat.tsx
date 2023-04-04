import { Box, Button, InputBase, Stack, Typography } from '@mui/material';
import { useEffect, useMemo, useRef, useState } from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useAppSelector } from '../../../store';
import { selectUser } from '../../../features/auth/authSlice';
import { useChatQuery } from './hooks/useGetChatForUser';
import styled from '@emotion/styled';
import { BsEmojiSmileFill } from 'react-icons/bs'
import Picker from "emoji-picker-react";
import { AttachFile, Mic } from '@mui/icons-material';
import animationData from './animation/typing.json';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid'
import Lottie from "react-lottie";
import { useMessagesQuery } from './hooks/useGetMessageQuery';
import Message from './Message';

export interface Chat {
  id: number;
  user_id: number;
  message_flat?: string | null;
}

export interface MessageInterface {
  id: number;
  sender_id: number;
  receiver_id: number;
  text: string;
  type: string;
  chat_id: number;
  created_at: Date;
}


const Header = styled(Stack)``;

const Footer = styled(Stack)`
    height: 55px;
    background: #ededed;
    padding: 0 10px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Emo = styled(Box)`
      position: relative;
      svg {
        font-size: 1rem;
        color: #ccc;
        cursor: pointer;
          }
`;

const PickEmo = styled(Box)`
position: absolute;
bottom: 120%;
left: 0;
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
    cursor: pointer
`;

const InputField = styled(InputBase)`
    padding: 10px;
    padding-left: 15px;
    font-size: 10px;
    height: 20px;
`;

const BoxLoading = styled(Box)`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Component = styled(Box)`
    height: 100%;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 10px;
`;

const ContainerType = styled(Box)`
`;

const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 5px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 5px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 10px;
    padding: 0 15px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 5px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;


const BoxChat = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event: any, emojiObject: any) => {
    let message = value;
    message += emojiObject.emoji;
    setValue(message);
  };

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState('');
  const [file, setFile] = useState();
  const [image, setImage] = useState('');
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const user = useAppSelector(selectUser);
  const chatQuery = useChatQuery(user?.id);
  const chat = useMemo(() => {
    return chatQuery.data ?? null;
  }, [chatQuery])

  const messagesQuery = useMessagesQuery(chatQuery.data?.id)
  const messages = useMemo(() => {
    return messagesQuery.data ?? [];
  }, [messagesQuery])

  const onFileChange = (e: any) => {
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  }

  const typingHandler = (e: any) => {
    setValue(e.target.value);
    if (!typing) {
      setTyping(true);
      socket.current.emit("typing", receiverId);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 6000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.current.emit("stop typing", receiverId);
        setTyping(false);
      }
    }, timerLength);
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        setLoading(true);
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await uploadFile(data);
        setImage(response.data);
        setLoading(false)
      }
    }
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file])

  const sendText = async (e: any) => {
    let code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message = {};
      socket.current.emit("stop typing", receiverId)
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: receiverId,
          conversationId: conversation._id,
          type: 'text',
          text: value
        };
      } else {
        message = {
          senderId: account.sub,
          conversationId: conversation._id,
          receiverId: receiverId,
          type: 'file',
          text: image
        };
      }

      socket.current.emit('sendMessage', message);

      await newMessages(message);

      setValue('');
      setFile('');
      setImage('');
      setShowEmojiPicker(false)
      setNewMessageFlag(prev => !prev);
    }
  }

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
              <Header
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
              </Header>
              {loading ? (
                <BoxLoading>
                  <CircularProgress />
                </BoxLoading>
              ) : (
                <Component>
                  {
                    messages && messages.map((message) => (
                      <Container ref={scrollRef} key={uuidv4()}>
                        <Message message={message} />
                      </Container>
                    ))
                  }
                  {isTyping ? (
                    <ContainerType ref={scrollRef}>
                      <Lottie
                        options={defaultOptions}
                        width={70}
                        style={{ marginBottom: '10px', marginLeft: '80px', marginTop: "10px" }}
                      />
                    </ContainerType>
                  ) : (
                    <></>
                  )
                  }
                </Component>
              )}
              <Footer direction="row" alignItems="center" spacing={1}>
                <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                <PickEmo>
                  {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </PickEmo>
                <label htmlFor="fileInput">
                  <ClipIcon />
                </label>
                <input
                  type='file'
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={(e) => onFileChange(e)}
                />
                <div className='inp'>
                  <InputField
                    placeholder="Type a message"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={typingHandler}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                  />
                </div>
                <Mic />
              </Footer>
            </Stack>
          </Fade>
        )}
      </Popper>
    </Stack >
  );
};

export default BoxChat;
