import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import { Typography, Table } from '@mui/material';
import { Link } from 'react-router-dom';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 36px;
  gap: 16px;
  width: 1447px;
  height: 64px;
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
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
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
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 122px;
  margin-top: 50px;
  margin-bottom: 200px;
`;

const ContainerResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 8px;
  gap: 16px;
  width: 1368px;
  height: 122px;
  background: #ffffff;
`;

const TextSuccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
  height: 24px;
  background: #e8eaf6;
  border: 1px solid #3f51b5;
  border-radius: 30px;
`;

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '-0.04px',
    color: 'rgba(0, 0, 0, 0.87)',
    background: 'rgba(238, 238, 238, 0.4)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '143%',
    letterSpacing: '-0.04px',
    color: 'rgba(0, 0, 0, 0.87)'
  }
}));

const RegistrationResult = () => {
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
                  color: 'rgba(0, 0, 0, 0.87)'
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
                  color: '#6E6D7A'
                }}>
                Tài khoản
              </Typography>
            </ItemAccount>
          </Link>
        </ContainerMenu>
      </Menu>
      <Divider />
      <Result>
        <ContainerResult>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">STT</StyledTableCell>
                  <StyledTableCell align="center">Họ và tên</StyledTableCell>
                  <StyledTableCell align="center">Ngày sinh</StyledTableCell>
                  <StyledTableCell align="center">Giới tính</StyledTableCell>
                  <StyledTableCell align="center">
                    Số CMND/CCCD/Mã định danh công dân
                  </StyledTableCell>
                  <StyledTableCell align="center">Trạng thái</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell align="center">1</StyledTableCell>
                  <StyledTableCell align="center">Nguyễn Văn A</StyledTableCell>
                  <StyledTableCell align="center">01/01/2011</StyledTableCell>
                  <StyledTableCell align="center">Nam</StyledTableCell>
                  <StyledTableCell align="center">909032932132</StyledTableCell>
                  <StyledTableCell align="center">
                    <TextSuccess>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontFamily: 'Roboto',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '143%',
                          letterSpacing: '-0.04px',
                          color: 'rgba(0, 0, 0, 0.87)'
                        }}>
                        Đăng ký thành công
                      </Typography>
                    </TextSuccess>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ContainerResult>
      </Result>
      <Footer />
    </div>
  );
};

export default RegistrationResult;
