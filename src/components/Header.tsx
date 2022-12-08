import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../images/Logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;
  background: linear-gradient(90deg, #ed1b23 0%, #2e3091 52.08%, #253494 100%);
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 90px;
  width: 100%;
  height: 50px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 460px;
  height: 50px;
`;

const Logo = styled.img`
  width: 42px;
  height: 50px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 524px;
  height: 50px;
`;

const ItemHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 71px;
  height: 50px;
`;

const ItemInject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 93px;
  height: 50px;
`;

const ItemResearch = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 78px;
  height: 50px;
`;

const ItemDocs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 51px;
  height: 50px;
`;

const ItemLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 135px;
  height: 50px;
`;

const ButtonLogin = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  gap: 4px;
  width: 135px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
  & > a {
    text-decoration: none;
    width: 91px;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #303f9f;
  }
`;

const HeaderHomePage = () => {
  return (
    <Header>
      <ContainerHeader>
        <Brand>
          <Logo src={logo} alt="" />
          <Typography
            variant="h6"
            sx={{
              width: '420px',
              height: '32px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '19px',
              lineHeight: '160%',
              color: '#FFFFFF'
            }}>
            CỔNG THÔNG TIN TIÊM CHỦNG COVID-19
          </Typography>
        </Brand>
        <Menu>
          <ItemHome>
            <Typography
              variant="body1"
              sx={{
                width: '71px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '-0.04px',
                color: '#FFFFFF'
              }}>
              Trang chủ
            </Typography>
          </ItemHome>
          <ItemInject>
            <Typography
              variant="body1"
              sx={{
                width: '93px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '-0.04px',
                color: '#FFFFFF'
              }}>
              Đăng ký tiêm
            </Typography>
          </ItemInject>
          <ItemResearch>
            <Typography
              variant="body1"
              sx={{
                width: '71px',
                height: '20px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '12px',
                letterSpacing: '-0.04px',
                color: '#FFFFFF'
              }}>
              Tra cứu
            </Typography>
            <KeyboardArrowDownIcon htmlColor="white" />
          </ItemResearch>
          <ItemDocs>
            <Typography
              variant="body1"
              sx={{
                width: '71px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '150%',
                letterSpacing: '-0.04px',
                color: '#FFFFFF'
              }}>
              Tài liệu
            </Typography>
          </ItemDocs>
          <ItemLogin>
            <ButtonLogin>
              <Link to="/login">Đăng nhập</Link>
            </ButtonLogin>
          </ItemLogin>
        </Menu>
      </ContainerHeader>
    </Header>
  );
};

export default HeaderHomePage;
