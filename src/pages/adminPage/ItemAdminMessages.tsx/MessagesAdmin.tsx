import { FC, useEffect, useRef, useState } from 'react';
import { User } from '../../../features/auth/authSlice';
import { Chat, MessageCreate } from '../../homePage/componentsHome/BoxChat';
import { AttachFile, Message, Mic } from '@mui/icons-material';
import {
  Stack,
  Button,
  Popper,
  Fade,
  Typography,
  Box,
  InputBase,
  styled
} from '@mui/material';
import { BsEmojiSmileFill } from 'react-icons/bs';
import Lottie from 'react-lottie';
import { io } from 'socket.io-client';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import api from '../../../utils/axios/instance';
import { useMessageCreateMutation } from '../../homePage/componentsHome/hooks/useMessageCreateMutation';
import animationData from '../../homePage/componentsHome/animation/typing.json';
import CircularProgress from '@mui/material/CircularProgress';
import MessageAdmin from './MessageAdmin';
import Picker from 'emoji-picker-react';
import { v4 as uuidv4 } from 'uuid';

const Footer = styled(Stack)`
  height: 55px;
  background: #ededed;
  width: 100%;
`;

const InputField = styled(InputBase)`
  background-color: white;
  border-radius: 20px;
  width: 700px;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
`;

const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
  cursor: pointer;
`;

const PickEmo = styled(Box)`
  position: absolute;
  bottom: 120%;
  left: 0;
`;

const Emo = styled(Box)`
  position: relative;
  svg {
    font-size: 1.5rem;
    color: #ccc;
    cursor: pointer;
  }
`;

const BoxLoading = styled(Box)`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

const Component = styled(Box)`
  height: 470px;
  overflow-y: scroll;
  border-left: 1px solid #ccc;
  background-color: white;
`;

const Container = styled(Box)`
  padding: 1px 10px;
`;
const ContainerType = styled(Box)``;

interface Props {
  userCurrent: User | null;
  chat: Chat | null;
}

let socket: any;
const MessagesAdmin: FC<Props> = ({ userCurrent, chat }) => {
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
    getMess(userCurrent?.chat_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load, incomingMessage, userCurrent]);

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
    socket.on('message received from user', (data: any) => {
      setIncomingMessage({
        ...data
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        sender_id: 1,
        receiver_id: userCurrent?.id || 1,
        text: '',
        type: '',
        chat_id: userCurrent?.chat_id
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
      socket.emit('send message to user', message);
      setLoad(!load);
      setValue('');
      setFile(undefined);
      setImage('');
      setShowEmojiPicker(false);
    }
  };

  return (
    <div>
      {loading ? (
        <BoxLoading>
          <CircularProgress />
        </BoxLoading>
      ) : (
        <Component>
          {messages &&
            messages.map((message) => (
              <Container ref={scrollRef} key={uuidv4()}>
                <MessageAdmin message={message} />
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
      <Footer
        direction="row"
        alignItems="center"
        spacing={20}
        justifyContent="center">
        <Stack direction="row" spacing={2}>
          <Emo>
            <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
            <PickEmo>
              {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
            </PickEmo>
          </Emo>
          <label htmlFor="fileInput">
            <ClipIcon />
          </label>
        </Stack>
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
    </div>
  );
};

export default MessagesAdmin;
