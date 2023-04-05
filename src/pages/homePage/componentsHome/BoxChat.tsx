import { Box, Button, InputBase, Stack, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import styled from '@emotion/styled';
import { BsEmojiSmileFill } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import { AttachFile, Mic } from '@mui/icons-material';
import animationData from './animation/typing.json';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
import Lottie from 'react-lottie';
import Message from './Message';
import io from 'socket.io-client';
import { useMessageCreateMutation } from './hooks/useMessageCreateMutation';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import api from '../../../utils/axios/instance';

export interface Chat {
  id: number;
  user_id: number;
  message_flat?: string | null;
  update_at: Date;
}

export interface ChatCreate {
  user_id: number | undefined;
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

export interface MessageCreate {
  sender_id: number | undefined;
  receiver_id: number;
  text: string;
  type: string;
  chat_id: number | undefined;
}

const Header = styled(Stack)``;

const Footer = styled(Stack)`
  width: 310px;
  height: 55px;
  background: #ededed;
  padding: 0 10px;
  & > * {
    margin: 5px;
    color: #919191;
  }
  border-radius: 0 0 10px 10px;
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
  cursor: pointer;
`;

const InputField = styled(InputBase)`
  padding: 10px;
  font-size: 14px;
  height: 20px;
`;

const BoxLoading = styled(Box)`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const Component = styled(Box)`
  height: 300px;
  overflow-y: scroll;
  border-left: 1px solid #ccc;
  background-color: white;
`;

const Container = styled(Box)`
  padding: 1px 10px;
`;

const ContainerType = styled(Box)``;

let socket: any;
const BoxChat = () => {
  const user = useCurrentUser();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState('');
  const [file, setFile] = useState();
  const [image, setImage] = useState('');
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<null | HTMLDivElement>(null);
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getMess = async (id: number | undefined) => {
      const res = await api.get(`/messages/${id}`);
      setMessages(res.data);
    };
    getMess(user?.chat_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load, incomingMessage]);

  const messageCreateMutation = useMessageCreateMutation();

  useEffect(() => {
    socket = io('http://localhost:8001');
    // socket.on("typing", () => setIsTyping(true));
    // socket.on("stop typing", () => setIsTyping(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, image]);

  useEffect(() => {
    socket.on('message received from admin', (data: any) => {
      setIncomingMessage({
        ...data
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event: any, emojiObject: any) => {
    let message = value;
    message += emojiObject.emoji;
    setValue(message);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const onFileChange = (e: any) => {
    setValue(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const typingHandler = (e: any) => {
    setValue(e.target.value);
    if (!typing) {
      setTyping(true);
      socket.emit('typing', 1);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 6000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit('stop typing', 1);
        setTyping(false);
      }
    }, timerLength);
  };

  // useEffect(() => {
  //   const getImage = async () => {
  //     if (file) {
  //       setLoading(true);
  //       const data = new FormData();
  //       data.append("name", file.name);
  //       data.append("file", file);
  //       const response = await uploadFile(data);
  //       setImage(response.data);
  //       setLoading(false)
  //     }
  //   }
  //   getImage();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [file])

  const sendText = async (e: any) => {
    let code = e.keyCode || e.which;
    if (!value) return;
    if (code === 13) {
      let message: MessageCreate = {
        sender_id: user?.id,
        receiver_id: 1,
        text: '',
        type: '',
        chat_id: user?.chat_id
      };
      // socket.current.emit("stop typing", 1)
      if (!file) {
        message.type = 'text';
        message.text = value;
      } else {
        message.type = 'file';
        message.text = image;
      }
      await messageCreateMutation.mutateAsync(message);
      socket.emit('send message to admin', message);
      setLoad(!load);
      setValue('');
      setFile(undefined);
      setImage('');
      setShowEmojiPicker(false);
    }
  };

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
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
              }}>
              <Header
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  backgroundColor: 'rgb(30, 144, 255)',
                  padding: '10px 0 10px 10px',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px'
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
              <Stack>
                {loading ? (
                  <BoxLoading>
                    <CircularProgress />
                  </BoxLoading>
                ) : (
                  <Component>
                    {messages &&
                      messages.map((message) => (
                        <Container ref={scrollRef} key={uuidv4()}>
                          <Message message={message} />
                        </Container>
                      ))}
                    {isTyping ? (
                      <ContainerType ref={scrollRef}>
                        <Lottie
                          options={defaultOptions}
                          width={30}
                          style={{
                            marginBottom: '10px',
                            marginLeft: '20px',
                            marginTop: '10px'
                          }}
                        />
                      </ContainerType>
                    ) : (
                      <></>
                    )}
                  </Component>
                )}
                <Footer direction="row" alignItems="center" spacing={1}>
                  <Emo>
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    <PickEmo>
                      {showEmojiPicker && (
                        <Picker onEmojiClick={handleEmojiClick} />
                      )}
                    </PickEmo>
                  </Emo>
                  <label htmlFor="fileInput">
                    <ClipIcon />
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => onFileChange(e)}
                  />
                  <div className="inp">
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
            </Stack>
          </Fade>
        )}
      </Popper>
    </Stack>
  );
};

export default BoxChat;
