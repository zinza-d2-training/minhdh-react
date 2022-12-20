import { Typography, Divider } from '@mui/material';
import styled from '@emotion/styled';
import PersonIcon from '@mui/icons-material/Person';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const AggregateParameters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 36px;
  width: 1447px;
  height: 76px;
  background: #f7fbfe;
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  width: 455.33px;
  height: 75px;
  background: #ffffff;
`;

const BoxCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  width: 455.33px;
  height: 75px;
  background: #ffffff;
`;

const BoxRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 16px;
  width: 455.33px;
  height: 75px;
  background: #ffffff;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 184px;
  height: 75px;
  & .i {
    margin-top: 5px;
    margin-left: 3px;
    font-size: 15px;
    font-weight: 700;
  }
`;

const AggregateParameter = () => {
  return (
    <AggregateParameters>
      <BoxLeft>
        <PersonIcon fontSize="large" htmlColor="#281BA4" />
        <Data>
          <Typography
            variant="body1"
            sx={{
              width: '168px',
              height: '19px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              color: '#000000'
            }}>
            Đối tượng đăng ký tiêm
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '240px',
              height: '33px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '28px',
              lineHeight: '33px',
              display: 'flex',
              alignItems: 'center',
              color: '#000000'
            }}>
            11.203.873 <i className="i">(lượt)</i>
          </Typography>
        </Data>
      </BoxLeft>
      <Divider orientation="vertical" />
      <BoxCenter>
        <VaccinesIcon fontSize="large" htmlColor="#281BA4" />
        <Data>
          <Typography
            variant="body1"
            sx={{
              width: '153px',
              height: '19px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              color: 'black'
            }}>
            Số mũi tiêm hôm qua
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '210px',
              height: '33px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '28px',
              lineHeight: '33px',
              display: 'flex',
              alignItems: 'center',
              color: 'black'
            }}>
            1,762,119 <i className="i">(mũi)</i>
          </Typography>
        </Data>
      </BoxCenter>
      <Divider orientation="vertical" />
      <BoxRight>
        <VerifiedUserIcon fontSize="large" htmlColor="#281BA4" />
        <Data>
          <Typography
            variant="body1"
            sx={{
              width: '184px',
              height: '19px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '19px',
              display: 'flex',
              alignItems: 'center',
              color: 'black'
            }}>
            Số mũi đã tiêm toàn quốc
          </Typography>
          <Typography
            variant="body1"
            sx={{
              width: '210px',
              height: '33px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '28px',
              lineHeight: '33px',
              display: 'flex',
              alignItems: 'center',
              color: '#000000'
            }}>
            69,523,654 <i className="i">(mũi)</i>
          </Typography>
        </Data>
      </BoxRight>
    </AggregateParameters>
  );
};

export default AggregateParameter;
