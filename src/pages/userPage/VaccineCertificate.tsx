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
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
  height: 668px;
  margin-top: 50px;
  margin-bottom: 200px;
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
  padding-bottom: 20px;
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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 249px;
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
                Ch???ng nh???n ti??m ch???ng
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
                K???t qu??? ????ng k??
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
                T??i kho???n
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
              C???NG H??A X?? H???I CH??? NGH??A VI???T NAM
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
              ?????c l???p - T??? do - H???nh ph??c
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
                CH???NG NH???N TI??M CH???NG COVID-19
              </Typography>
            </Title>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Item>
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
                      H??? v?? t??n
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
                      Nguy???n V??n A
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
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
                      Ng??y sinh
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
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
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
                      S??? CMND/CCCD
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
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
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
                      S??? th??? BHYT
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
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
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
                      ?????a ch???
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
                      Ph?????ng Giang Bi??n - Qu???n Long Bi??n - Th??nh ph??? H?? N???i
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Box>
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
                K???t lu???n
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
                ???? ???????c ti??m ph??ng v???c xin ph??ng b???nh Covid-19
              </Typography>
            </Conclusion>
            <InfoVaccine>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">M??i s???</StyledTableCell>
                      <StyledTableCell align="center">
                        Th???i gian ti??m
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        T??n v???c xin
                      </StyledTableCell>
                      <StyledTableCell align="center">S??? l??</StyledTableCell>
                      <StyledTableCell align="center">N??i ti??m</StyledTableCell>
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
                        B???nh vi???n B???ch Mai
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
                        B???nh vi???n B???ch Mai
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
                    ????ng k?? m??i ti??m ti???p theo
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
              ???? TI??M 2 M??I V???C XIN
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
                    H??? v?? t??n
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
                    Nguy???n V??n A
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
                    Ng??y sinh
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
                    S??? CMND/CCCD
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
