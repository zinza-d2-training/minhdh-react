import { Box, styled, Typography, Divider } from '@mui/material';
import { emptyChatImage } from '../../homePage/componentsHome/img/data';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 685px;
`;

const Image = styled('img')({
  marginTop: 100,
  width: 400
})

const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

const EmptyChat = () => {

  return (
    <Component>
      <Image src={emptyChatImage} alt="empty" />
      <Title>Please Support Our Customer!</Title>
      <StyledDivider />
    </Component>
  )
}

export default EmptyChat;
