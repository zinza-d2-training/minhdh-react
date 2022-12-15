import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import EditInfo from './componentsUser/EditInfo';
import EditPassword from './componentsUser/EditPassword';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
  gap: 16px;
  position: absolute;
  width: 1447px;
  height: 64px;
  left: 0px;
  top: 80px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 64px;
`;

const ItemCert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 185px;
  height: 64px;
  background: #ffffff;
`;

const ItemResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 130px;
  height: 64px;
  background: #ffffff;
`;

const ItemAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  width: 85px;
  height: 64px;
  background: #ffffff;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
`;

const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0px;
  top: 144px;
  background: #eeeeee;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  gap: 24px;
  position: absolute;
  width: 1447px;
  height: 609px;
  left: 0px;
  top: 192px;
`;

const HeaderFormInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 1352px;
  height: 24px;
`;

const ButtonEditInfo = styled.div`
  color: rgba(0, 0, 0, 0.54);
  padding: 0px;
  cursor: pointer;
  margin-top: 5px;
`;

const ButtonEditPassword = styled.div`
  color: rgba(0, 0, 0, 0.54);
  padding: 0px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: -50px;
`;

const HeaderFormPassword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 1352px;
  height: 24px;
`;

const Account = () => {
  const [editInfo, setEditInfo] = React.useState<boolean>(false);
  const [editPassword, setEditPassword] = React.useState<boolean>(false);

  return (
    <div>
      <Header />
      <Menu>
        <ContainerMenu>
          <Link to="/vaccine-certificate" style={{ textDecoration: 'none' }}>
            <ItemCert>
              <Typography
                sx={{
                  width: '169px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#6E6D7A'
                }}>
                Chứng nhận tiêm chủng
              </Typography>
            </ItemCert>
          </Link>
          <Link to="/registration-result" style={{ textDecoration: 'none' }}>
            <ItemResult>
              <Typography
                sx={{
                  width: '114px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#6E6D7A'
                }}>
                Kết quả đăng ký
              </Typography>
            </ItemResult>
          </Link>
          <Link to="/account" style={{ textDecoration: 'none' }}>
            <ItemAccount>
              <Typography
                sx={{
                  width: '69px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Tài khoản
              </Typography>
            </ItemAccount>
          </Link>
        </ContainerMenu>
      </Menu>
      <Divider />
      <Result>
        <HeaderFormInfo>
          <Typography
            sx={{
              width: '128px',
              height: '24px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '-0.04px',
              color: 'rgba(0, 0, 0, 0.87)'
            }}>
            Thông tin cá nhân
          </Typography>
          <ButtonEditInfo
            onClick={() => {
              setEditInfo(!editInfo);
            }}>
            <EditIcon fontSize="small" />
          </ButtonEditInfo>
        </HeaderFormInfo>
        <EditInfo editInfo={editInfo}></EditInfo>
        <HeaderFormPassword>
          <Typography
            sx={{
              width: '128px',
              height: '24px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '-0.04px',
              color: 'rgba(0, 0, 0, 0.87)'
            }}>
            Mật khẩu
          </Typography>
          <ButtonEditPassword
            onClick={() => {
              setEditPassword(!editPassword);
            }}>
            <EditIcon fontSize="small" />
          </ButtonEditPassword>
        </HeaderFormPassword>
        <EditPassword editPassword={editPassword} />
      </Result>
      <Footer />
    </div>
  );
};

export default Account;
