import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../images/Logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import BoxResearch from '../pages/homePage/componentsHome/BoxResearch';
import * as React from 'react';

const HeaderApp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0px;
  width: 100%;
  height: 50px;
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

const ItemResearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 78px;
  height: 50px;
  cursor: pointer;
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
  & .textLogin {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #303f9f;
  }
  & > a {
    text-decoration: none;
  }
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
`;

const Header = () => {
  const [research, setResearch] = React.useState(false);

  const toggleBoxResearch = () => {
    setResearch(!research);
  };

  return (
    <HeaderApp>
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
            <Link to="/" style={{ textDecoration: 'none' }}>
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
            </Link>
          </ItemHome>
          <ItemInject>
            <Link
              to="/vaccine-register-step1"
              style={{ textDecoration: 'none' }}>
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
            </Link>
          </ItemInject>
          <ItemResearch onClick={toggleBoxResearch}>
            <Typography
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
              Tra cứu
            </Typography>
            <KeyboardArrowDownIcon htmlColor="white" />
          </ItemResearch>
          <ItemDocs>
            <Link to="/admin-place" style={{ textDecoration: 'none' }}>
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
            </Link>
          </ItemDocs>
          <ItemLogin>
            <Link to="/login">
              <ButtonLogin>
                <span className="textLogin">Đăng nhập</span>
              </ButtonLogin>
            </Link>
          </ItemLogin>
        </Menu>
      </ContainerHeader>
      {research && <BoxResearch />}
    </HeaderApp>
  );
};

export default Header;
