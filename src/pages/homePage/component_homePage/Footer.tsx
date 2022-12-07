import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import logo2in1 from '../../../images/logo2in1.png';
import handle_cert1 from '../../../images/handle_cert1.png';

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 16px;
  position: absolute;
  width: 1487px;
  height: 190px;
  left: 0px;
  top: 1900px;
  background: #2d2188;
`;

const Frame18 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 560px;
  height: 137px;
  & .span1 {
    font-weight: 700;
  }
  & .span2 {
    color: red;
  }
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 16px;
  width: 524px;
`;

const ContainerLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 195px;
  height: 89px;
`;

const Logo2in1 = styled.img`
  width: 195px;
  height: 89px;
`;

const ContainerButtonApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 524px;
  height: 40px;
`;

const ButtonAppForHCM = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 249px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const ButtonAppStore = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 4px;
  width: 115px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const ButtonGGPlay = styled(Button)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  gap: 4px;
  width: 128px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > span {
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #ffffff;
  }
`;

const Cert = styled.img`
  width: 220px;
  height: 100px;
`;
const FooterHomePage = () => {
  return (
    <Footer>
      <Frame18>
        <Typography
          variant="body2"
          sx={{
            width: '590px',
            height: '20px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '143%',
            letterSpacing: '-0.04px',
            color: '#FFFFFF'
          }}>
          © Bản quyền thuộc
          <span className="span1">
            {' '}
            TRUNG TÂM CÔNG NGHỆ PHÒNG, CHỐNG DỊCH COVID-19 QUỐC GIA
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            width: '129px',
            height: '20px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '143%',
            letterSpacing: '-0.04px',
            color: '#FFFFFF'
          }}>
          Phát triển bởi <span className="span2">Viettel</span>
        </Typography>
        <ContainerLogos>
          <Logo2in1 src={logo2in1} alt="" />
        </ContainerLogos>
      </Frame18>
      <Frame19>
        <Typography
          variant="body2"
          sx={{
            height: '20px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '143%',
            letterSpacing: '-0.04px',
            color: '#FFFFFF'
          }}>
          Tải sổ sức khỏe điện tử để đăng ký tiêm và nhận giấy chứng nhận tiêm
        </Typography>
        <ContainerButtonApp>
          <ButtonAppForHCM>
            <span>App tiêm di động (Cho HCM)</span>
          </ButtonAppForHCM>
          <ButtonAppStore>
            <span>App Store</span>
          </ButtonAppStore>
          <ButtonGGPlay>
            <span>Google play</span>
          </ButtonGGPlay>
        </ContainerButtonApp>
        <Cert src={handle_cert1} alt="" />
      </Frame19>
    </Footer>
  );
};

export default FooterHomePage;
