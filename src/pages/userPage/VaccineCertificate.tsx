import { Button, Typography, Table } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoCard from '../../images/logoCard.png';
import qrcode from '../../images/QRcode.png';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
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
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.87);
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
  position: absolute;
  width: 1447px;
  height: 668px;
  left: 0px;
  top: 192px;
`;

const ContainerResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 668px;
  background: #ffffff;
`;

const Cert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 8px;
  width: 1012px;
  height: 550px;
`;

const Title = styled.div`
  margin-top: 24px;
`;

const InfoLine1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  width: 996px;
  height: 76px;
`;

const ItemInfoLine1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 249px;
  height: 52px;
`;

const InfoLine2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 4px;
  width: 996px;
  height: 68px;
`;

const Conclusion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 4px;
  width: 996px;
  height: 68px;
`;

const InfoVaccine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0px 0px;
  width: 996px;
  height: 170px;
`;

const BoxRegisterVaccine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 0px;
  width: 996px;
  height: 52px;
`;

const ButtonRegister = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 255px;
  height: 36px;
  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;
  width: 340px;
  height: 668px;
  background: #43a047;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.175);
  border-radius: 8px 8px 8px 0px;
`;

const LogoCard = styled.img`
  width: 100px;
  height: 100px;
`;

const QRcode = styled.img`
  width: 196px;
  height: 196px;
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 292px;
  height: 190px;
  background: #ffffff;
  border-radius: 8px 8px 8px 0px;
`;

const ItemInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 260px;
  height: 52px;
`;

const TextInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 228px;
  height: 52px;
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

const VaccineCertificate = () => {
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
                  color: 'rgba(0, 0, 0, 0.87)'
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
          <Cert>
            <Typography
              sx={{
                width: '996px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.04px',
                color: 'rgba(0, 0, 0, 0.87)'
              }}>
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </Typography>
            <Typography
              sx={{
                width: '996px',
                height: '24px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '150%',
                textAlign: 'center',
                letterSpacing: '-0.04px',
                color: 'rgba(0, 0, 0, 0.87)'
              }}>
              Độc lập - Tự do - Hạnh phúc
            </Typography>
            <Title>
              <Typography
                sx={{
                  width: '996px',
                  height: '32px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '133.4%',
                  textAlign: 'center',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                CHỨNG NHẬN TIÊM CHỦNG COVID-19
              </Typography>
            </Title>
            <InfoLine1>
              <ItemInfoLine1>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Họ và tên
                </Typography>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Nguyễn Văn A
                </Typography>
              </ItemInfoLine1>
              <ItemInfoLine1>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Ngày sinh
                </Typography>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  16/10/1994
                </Typography>
              </ItemInfoLine1>
              <ItemInfoLine1>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Số CMND/CCCD
                </Typography>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  030012345678
                </Typography>
              </ItemInfoLine1>
              <ItemInfoLine1>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Số thẻ BHYT
                </Typography>
                <Typography
                  sx={{
                    width: '249px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  030094005102
                </Typography>
              </ItemInfoLine1>
            </InfoLine1>
            <InfoLine2>
              <Typography
                sx={{
                  width: '996px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Địa chỉ
              </Typography>
              <Typography
                sx={{
                  width: '996px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Phường Giang Biên - Quận Long Biên - Thành phố Hà Nội
              </Typography>
            </InfoLine2>
            <Conclusion>
              <Typography
                sx={{
                  width: '996px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Kết luận
              </Typography>
              <Typography
                sx={{
                  width: '996px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Đã được tiêm phòng vắc xin phòng bệnh Covid-19
              </Typography>
            </Conclusion>
            <InfoVaccine>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Mũi số</StyledTableCell>
                      <StyledTableCell align="center">
                        Thời gian tiêm
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Tên vắc xin
                      </StyledTableCell>
                      <StyledTableCell align="center">Số lô</StyledTableCell>
                      <StyledTableCell align="center">Nơi tiêm</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <StyledTableCell align="center">1</StyledTableCell>
                      <StyledTableCell align="center">
                        08/09/2021 - 16:56
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        AstraZeneca
                      </StyledTableCell>
                      <StyledTableCell align="center">NJ0342</StyledTableCell>
                      <StyledTableCell align="center">
                        Bệnh viện Bạch Mai
                      </StyledTableCell>
                    </TableRow>
                    <TableRow>
                      <StyledTableCell align="center">2</StyledTableCell>
                      <StyledTableCell align="center">
                        11/04/2022 - 17:00
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        AstraZeneca
                      </StyledTableCell>
                      <StyledTableCell align="center">NJ0347</StyledTableCell>
                      <StyledTableCell align="center">
                        Bệnh viện Bạch Mai
                      </StyledTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </InfoVaccine>
            <BoxRegisterVaccine>
              <Link
                style={{ textDecoration: 'none' }}
                to="/vaccine-register-step1">
                <ButtonRegister>
                  <Typography
                    sx={{
                      width: '223px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      textTransform: 'uppercase',
                      color: '#FFFFFF'
                    }}>
                    Đăng ký mũi tiêm tiếp theo
                  </Typography>
                </ButtonRegister>
              </Link>
            </BoxRegisterVaccine>
          </Cert>
          <Card>
            <LogoCard src={logoCard} />
            <Typography
              sx={{
                width: '290px',
                height: '32px',
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '133.4%',
                color: '#FFFFFF'
              }}>
              ĐÃ TIÊM 2 MŨI VẮC XIN
            </Typography>
            <QRcode src={qrcode} />
            <InfoCard>
              <ItemInfoCard>
                <PersonIcon />
                <TextInfoCard>
                  <Typography
                    sx={{
                      width: '68px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Họ và tên
                  </Typography>
                  <Typography
                    sx={{
                      width: '101px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Nguyễn Văn A
                  </Typography>
                </TextInfoCard>
              </ItemInfoCard>
              <ItemInfoCard>
                <DateRangeIcon />
                <TextInfoCard>
                  <Typography
                    sx={{
                      width: '71px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Ngày sinh
                  </Typography>
                  <Typography
                    sx={{
                      width: '85px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    16/10/1994
                  </Typography>
                </TextInfoCard>
              </ItemInfoCard>
              <ItemInfoCard>
                <FeaturedVideoIcon />
                <TextInfoCard>
                  <Typography
                    sx={{
                      width: '117px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    Số CMND/CCCD
                  </Typography>
                  <Typography
                    sx={{
                      width: '109px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: ' -0.04px',
                      color: 'rgba(0, 0, 0, 0.87)'
                    }}>
                    030012345678
                  </Typography>
                </TextInfoCard>
              </ItemInfoCard>
            </InfoCard>
          </Card>
        </ContainerResult>
      </Result>
      <Footer />
    </div>
  );
};

export default VaccineCertificate;
