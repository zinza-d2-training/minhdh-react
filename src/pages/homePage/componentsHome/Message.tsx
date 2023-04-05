import { FC } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { GetApp as GetAppIcon } from '@mui/icons-material';
import moment from 'moment/moment';
import { MessageInterface } from './BoxChat';
import { selectUser } from '../../../features/auth/authSlice';
import { useAppSelector } from '../../../store';
import { iconPDF } from './img/data';
import iconWord from './img/word.png';
import iconExcel from './img/ex.png';
import iconPpt from './img/ppt.png';
import iconZip from './img/zip.png';

const Wrapper = styled(Box)`
    background: #ccc;
    padding: 5px;
    max-width: 50%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 50%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 20px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

interface MyProps {
  message: MessageInterface;
}

export const formatDate = (date: any) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes
    }`;
};

export const downloadMedia = async (e: any, originalImage: any) => {
  e.preventDefault();
  try {
    fetch(originalImage)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;

        const nameSplit = originalImage.split("/");
        const duplicateName = nameSplit.pop();

        a.download = "" + duplicateName + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) =>
        console.log("Error while downloading the image ", error)
      );
  } catch (error) {
    console.log("Error while downloading the image ", error);
  }
};

const Message: FC<MyProps> = ({ message }) => {
  const user = useAppSelector(selectUser);

  return (
    <>
      {
        user?.id === message.sender_id ?
          <Own>
            {
              message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
            }
          </Own>
          :
          <Wrapper>
            {
              message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
            }
          </Wrapper>
      }
    </>
  )
}

const TextMessage: FC<MyProps> = ({ message }) => {

  return (
    <>
      <Text>{message.text}</Text>
      <Time>{moment(message.created_at).format('DD/MM/YYYY') + ' ' + formatDate(message.created_at)}</Time>
    </>
  )
}

const ImageMessage: FC<MyProps> = ({ message }) => {

  return (
    <div style={{ position: 'relative' }}>
      {
        message?.text?.includes('.pdf') ?
          <div style={{ display: 'flex' }}>
            <img src={iconPDF} alt="pdf-icon" style={{ width: 80 }} />
            <Typography style={{ fontSize: 10 }} >{message.text.split("/").pop()}</Typography>
          </div>
          :
          message?.text?.includes('.docx') ?
            <div style={{ display: 'flex' }}>
              <img src={iconWord} alt="docx-icon" style={{ width: 80 }} />
              <Typography style={{ fontSize: 10, marginLeft: 5 }} >{message.text.split("/").pop()}</Typography>
            </div>
            :
            message?.text?.includes('.xlsx') ?
              <div style={{ display: 'flex' }}>
                <img src={iconExcel} alt="xlsx-icon" style={{ width: 80 }} />
                <Typography style={{ fontSize: 10, marginLeft: 5 }} >{message.text.split("/").pop()}</Typography>
              </div>
              :
              message?.text?.includes('.pptx') ?
                <div style={{ display: 'flex' }}>
                  <img src={iconPpt} alt="pptx-icon" style={{ width: 80 }} />
                  <Typography style={{ fontSize: 10, marginLeft: 5 }} >{message.text.split("/").pop()}</Typography>
                </div>
                :
                message?.text?.includes('.zip') ?
                  <div style={{ display: 'flex' }}>
                    <img src={iconZip} alt="zip-icon" style={{ width: 80 }} />
                    <Typography style={{ fontSize: 10, marginLeft: 5 }} >{message.text.split("/").pop()}</Typography>
                  </div>
                  :
                  message?.text?.includes('.mp4') ?
                    <video style={{ width: 400, height: '100%' }} src={message.text} datatype="video/mp4" controls />
                    :
                    message?.text?.includes('.m4a') ?
                      <audio controls>
                        <source src={message.text} type="audio/ogg" />
                        <source src={message.text} type="audio/mpeg" />
                      </audio>
                      :
                      <img style={{ width: 300, height: '100%', objectFit: 'cover', cursor: 'pointer' }} src={message.text} alt={message.text} />
      }
      <Time style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <GetAppIcon
          onClick={(e) => downloadMedia(e, message.text)}
          fontSize='small'
          sx={{ marginRight: '5px', border: '1px solid grey', borderRadius: '7px', cursor: 'pointer', backgroundColor: '#ccc', color: 'black' }}
        />
        {formatDate(message.created_at)}
      </Time>
    </div>
  )
}


export default Message;
