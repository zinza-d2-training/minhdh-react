import { Typography, Button, Menu } from '@mui/material';
import styled from '@emotion/styled';
import logo from '../images/Logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, useNavigate } from 'react-router-dom';
import BoxResearch from './BoxResearch';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { logout, selectIsAdmin } from '../features/auth/authSlice';
import { Logout } from '@mui/icons-material';
import { removeTokenUser } from '../features/user/userSlice';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { LoadingButton } from '@mui/lab';

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
  padding: 0px 0px 0px 90px;
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

const MenuItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 180px;
  gap: 24px;
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
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  height: 50px;
  cursor: pointer;
  text-transform: none;
  margin-right: 10px;
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

const ItemUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 145px;
  height: 50px;
  & .text-user {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #303f9f;
  }
  & > a {
    text-decoration: none;
  }
`;

const ItemLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 145px;
  height: 50px;
  & .text-logout {
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: white;
  }
  & > a {
    text-decoration: none;
  }
`;

const ButtonUser = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 4px;
  width: 145px;
  height: 40px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
`;

const ButtonLogout = styled(LoadingButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px;
  gap: 4px;
  width: 130px;
  height: 40px;
  background: red;
  border-radius: 8px 8px 8px 0px;
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useCurrentUser();
  const isAdmin = useAppSelector(selectIsAdmin);
  const handleLogout = async () => {
    dispatch(logout());
    dispatch(removeTokenUser());
    navigate('/');
  };

  return (
    <HeaderApp>
      <ContainerHeader>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          </Link>
        </div>
        <MenuItemHeader>
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
          <ItemResearch onClick={handleClick}>
            <Typography
              sx={{
                minWidth: '50px',
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
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ disablePadding: true }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: -150
            }}>
            <BoxResearch />
          </Menu>
          <ItemDocs>
            <Link
              to={isAdmin === 1 ? '/admin-place' : '/admin-document'}
              style={{ textDecoration: 'none' }}>
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
          {isAdmin === 1 && (
            <ItemDocs>
              <Link to="/messages" style={{ textDecoration: 'none' }}>
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
                  Tin nhắn
                </Typography>
              </Link>
            </ItemDocs>
          )}
          {currentUser !== null ? (
            <ItemUser>
              <Link to="/account">
                <ButtonUser variant="contained">
                  <span className="text-user">{currentUser?.name}</span>
                </ButtonUser>
              </Link>
            </ItemUser>
          ) : (
            <ItemLogin>
              <Link to="/login">
                <ButtonLogin variant="contained">
                  <span className="textLogin">Đăng nhập</span>
                </ButtonLogin>
              </Link>
            </ItemLogin>
          )}
          {currentUser !== null && (
            <ItemLogout>
              <ButtonLogout
                color="error"
                onClick={handleLogout}
                variant="contained"
                endIcon={<Logout />}>
                <span className="text-logout">Đăng xuất</span>
              </ButtonLogout>
            </ItemLogout>
          )}
        </MenuItemHeader>
      </ContainerHeader>
    </HeaderApp>
  );
};

export default Header;
