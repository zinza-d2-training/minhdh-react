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
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useRegistrationQuery } from './hooks/useRegistrationQuery';
import moment from 'moment';
import { useMemo } from 'react';
import React from 'react';
import {
  Ward,
  District,
  Province
} from '../homePage/componentsHome/InjectionSite';
import { useAllDistrictsQuery } from '../vaccineRegistrationPage/hooks/useAllDistrictsQuery';
import { useAllProvincesQuery } from '../vaccineRegistrationPage/hooks/useAllProvincesQuery';
import { useAllWardsQuery } from '../vaccineRegistrationPage/hooks/useAllWardsQuery';
import { useAllVaccineQuery } from './hooks/useAllVaccineQuery';
import { useAllVaccinationSitesQuery } from '../homePage/componentsHome/hooks/useAllVaccinationSitesQuery';
import { Status } from '../../hooks/statusRegistration';

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

const Card = styled.div<{ numRegis: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;
  width: 340px;
  height: 668px;
  background: ${(props) => (props.numRegis ? '#43A047' : '#e6e600')};
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

export interface Vaccine {
  id: number;
  name: string;
}

export interface VaccineRegistration {
  id: number;
  numBHYT?: string;
  job?: string;
  work_unit?: string;
  address?: string;
  date_injection?: Date;
  session_injection?: string;
  vaccine_code?: string | null | undefined;
  status: number;
  registration_code?: string;
  user_id: number;
  group_id: number;
  vaccine_id?: number | null | undefined;
  vaccination_site_id?: number | null | undefined;
}

const VaccineCertificate = () => {
  const currentUser = useCurrentUser();
  const registrationQuery = useRegistrationQuery(currentUser?.id);
  const registrations = useMemo(() => {
    return registrationQuery.data ?? [];
  }, [registrationQuery.data]);
  const [filterRegistration, setFilterRegistration] = React.useState<
    VaccineRegistration[]
  >([]);

  const allProvincesQuery = useAllProvincesQuery();
  const allDistrictsQuery = useAllDistrictsQuery();
  const allWardsQuery = useAllWardsQuery();
  const allVaccineQuery = useAllVaccineQuery();
  const allVaccinationSitesQuery = useAllVaccinationSitesQuery();

  const allVaccinationSites = React.useMemo(() => {
    return allVaccinationSitesQuery.data ?? [];
  }, [allVaccinationSitesQuery.data]);

  const allVaccine = React.useMemo(() => {
    return allVaccineQuery.data ?? [];
  }, [allVaccineQuery.data]);

  const allProvinces = React.useMemo(() => {
    return allProvincesQuery.data ?? [];
  }, [allProvincesQuery.data]);

  const allDistricts = React.useMemo(() => {
    return allDistrictsQuery.data ?? [];
  }, [allDistrictsQuery.data]);

  const allWards = React.useMemo(() => {
    return allWardsQuery.data ?? [];
  }, [allWardsQuery.data]);

  const findNameWard = (id: any) => {
    return allWards.find((element: Ward) => element.id === id)?.name;
  };

  const findNameDistrict = (id: any) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    return allDistricts.find(
      (element: District) => element.id === ward?.district_id
    )?.name;
  };

  const findNameProvince = (id: any) => {
    const ward = allWards.find((element: Ward) => element.id === id);
    const district = allDistricts.find(
      (element: District) => element.id === ward?.district_id
    );
    return allProvinces.find(
      (element: Province) => element.id === district?.province_id
    )?.name;
  };

  const findNameVaccine = (id: any) => {
    return id !== null
      ? allVaccine.find((element: Vaccine) => element.id === id)?.name
      : 'Chưa có';
  };

  const findNameSite = (id: any) => {
    return id !== null
      ? allVaccinationSites.find((site) => site.id === id)?.name
      : 'Chưa có';
  };

  React.useEffect(() => {
    const result = registrations.filter(
      (item) => item.status === Status.ACCEPT
    );
    setFilterRegistration(result);
  }, [registrations]);

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
                      {currentUser?.name}
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
                      {moment(currentUser?.birthday).format('DD/MM/YYYY')}
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
                      {currentUser?.identity_card_number}
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
                      {filterRegistration[0]?.numBHYT}
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
                      {findNameWard(currentUser?.ward_id)} -{' '}
                      {findNameDistrict(currentUser?.ward_id)} -{' '}
                      {findNameProvince(currentUser?.ward_id)}
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
                {filterRegistration.length > 0
                  ? 'Đã được tiêm phòng vắc xin phòng bệnh Covid-19'
                  : 'Chưa được tiêm phòng vắc xin phòng bệnh Covid-19'}
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
                  {filterRegistration.length > 0 && (
                    <TableBody>
                      {filterRegistration.map((element, index) => (
                        <TableRow key={index + 1}>
                          <StyledTableCell
                            align="center"
                            component="th"
                            scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {element.date_injection
                              ? moment(element.date_injection).format(
                                  'DD/MM/YYYY'
                                )
                              : 'Chưa có'}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {findNameVaccine(element.vaccine_id)}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {element.vaccine_code}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {findNameSite(element.vaccination_site_id)}
                          </StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  )}
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
          {filterRegistration.length > 0 && (
            <Card numRegis={filterRegistration.length > 1}>
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
                ĐÃ TIÊM {filterRegistration.length} MŨI VẮC XIN
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
                      {currentUser?.name}
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
                      {moment(currentUser?.birthday).format('DD/MM/YYYY')}
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
                      {currentUser?.identity_card_number}
                    </Typography>
                  </TextInfoCard>
                </ItemInfoCard>
              </InfoCard>
            </Card>
          )}
        </ContainerResult>
      </Result>
      <Footer />
    </div>
  );
};

export default VaccineCertificate;
