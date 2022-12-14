import { Button, Typography } from '@mui/material';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const VaccineRegistrationStep2 = styled.div``;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 64px;
  background: #f5f5f5;
  margin-top: 30px;
`;

const ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1447px;
  height: 40px;
  margin-top: 60px;
`;

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 24px;
  width: 1368px;
  height: 40px;
  background: #ffffff;
`;

const VaccineStep = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 1368px;
  height: 40px;
`;

const HeaderStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 604px;
  height: 24px;
`;

const TextStep = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 8px;
  width: 680px;
  height: 24px;
  margin-right: 25px;
`;

const IconStep = styled.div`
  width: 24px;
  height: 24px;
`;

const BoxDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 250px;
  height: 24px;
`;

const Divider = styled.div`
  width: 250px;
  height: 1px;
  background: #bdbdbd;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.38);
  border-radius: 20px;
`;

const Typo1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 111px;
  height: 20px;
  margin-left: 10px;
`;

const Typo2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 112px;
  height: 20px;
`;

const Typo3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 72px;
  height: 20px;
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  width: 1440px;
  height: 288px;
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
  height: 288px;
  background: #ffffff;
`;

const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 288px;
`;

const NoteLine1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 1368px;
  height: 48px;
`;

const TextNote1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1334px;
  height: 48px;
`;

const NoteLine2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 1368px;
  height: 48px;
`;

const TextNote2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1334px;
  height: 48px;
`;

const NoteLine3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 1368px;
  height: 24px;
`;

const TextNote3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 1334px;
  height: 24px;
`;

const IconNote = styled.div`
  width: 24px;
  height: 24px;
`;

const DividerEndForm = styled.div`
  width: 1368px;
  height: 2px;
  background: #eeeeee;
`;

const BoxAccept = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 1368px;
  height: 42px;
`;

const Submit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 16px;
  width: 1368px;
  height: 60px;
`;

const ButtonBack = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 129px;
  height: 36px;
  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const ButtonContinue = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 32px;
  gap: 4px;
  width: 160px;
  height: 36px;
  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
`;

const VaccineStep2 = () => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onSubmit = () => {
    navigate('/vaccine-register-step3');
  };

  return (
    <VaccineRegistrationStep2>
      <Header />
      <Heading>
        <Typography
          sx={{
            width: '262px',
            height: '37px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '28px',
            lineHeight: '133.4%',
            color: 'rgba(0, 0, 0, 0.87)'
          }}>
          Tra c???u ????ng k?? ti??m
        </Typography>
      </Heading>
      <ProgressBar>
        <ContainerBar>
          <VaccineStep>
            <HeaderStep>
              <IconStep>
                <CheckCircleIcon color="primary" />
              </IconStep>
              <BoxDivider>
                <Divider />
              </BoxDivider>
              <IconStep>
                <CheckCircleIcon color="primary" />
              </IconStep>
              <BoxDivider>
                <Divider />
              </BoxDivider>
              <IconStep>
                <Circle>
                  <Typography
                    sx={{
                      width: '7px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      color: ' #FFFFFF'
                    }}>
                    3
                  </Typography>
                </Circle>
              </IconStep>
            </HeaderStep>
            <TextStep>
              <Typo1>
                <Typography
                  sx={{
                    width: '111px',
                    height: '20px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Th??ng tin c?? nh??n
                </Typography>
              </Typo1>
              <Typo2>
                <Typography
                  sx={{
                    width: '111px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Phi???u ?????ng ?? ti??m
                </Typography>
              </Typo2>
              <Typo3>
                <Typography
                  sx={{
                    width: '111px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '143%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  Ho??n th??nh
                </Typography>
              </Typo3>
            </TextStep>
          </VaccineStep>
        </ContainerBar>
      </ProgressBar>
      <Result>
        <ContainerResult>
          <FormSubmit onSubmit={onSubmit}>
            <NoteLine1>
              <IconNote>
                <GppGoodIcon color="primary" />
              </IconNote>
              <TextNote1>
                <Typography
                  sx={{
                    width: '1334px',
                    height: '48px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  1. Ti??m ch???ng v???c xin l?? bi???n ph??p ph??ng ch???ng d???ch hi???u qu???,
                  tuy nhi??n v???c xin ph??ng COVID-19 c?? th??? kh??ng ph??ng ???????c b???nh
                  ho??n to??n. Ng?????i ???????c ti??m ch???ng v???c xin ph??ng COVID-19 c?? th???
                  ph??ng ???????c b???nh ho???c gi???m m???c ????? n???ng n???u m???c b???nh. Tuy nhi??n,
                  sau khi ti??m ch???ng v???n ph???i ti???p t???c th???c hi???n nghi??m c??c bi???n
                  ph??p ph??ng ch???ng d???ch theo quy ?????nh.
                </Typography>
              </TextNote1>
            </NoteLine1>
            <NoteLine2>
              <IconNote>
                <VaccinesIcon color="primary" />
              </IconNote>
              <TextNote2>
                <Typography
                  sx={{
                    width: '1334px',
                    height: '48px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  2. Ti??m ch???ng v???c xin ph??ng COVID-19 c?? th??? g??y ra m???t s??? bi???u
                  hi???n t???i ch??? ti??m ho???c to??n th??n nh?? s??ng, ??au ch??? ti??m, nh???c
                  ?????u, bu???n n??n, s???t, ??au c?????ho???c tai bi???n n???ng sau ti??m ch???ng.
                  Ti??m v???c xin m??i 2 do Pfizer s???n xu???t ??? ng?????i ???? ti??m m??i 1
                  b???ng v???c xin AstraZeneca c?? th??? t??ng kh??? n??ng x???y ra ph???n ???ng
                  th??ng th?????ng sau ti??m ch???ng.
                </Typography>
              </TextNote2>
            </NoteLine2>
            <NoteLine3>
              <LocalHospitalIcon color="primary" />
              <TextNote3>
                <Typography
                  sx={{
                    width: '1334px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    color: 'rgba(0, 0, 0, 0.87)'
                  }}>
                  3. Khi c?? tri???u ch???ng b???t th?????ng v??? s???c kh???e, ng?????i ???????c ti??m
                  ch???ng c???n ?????n ngay c?? s??? y t??? g???n nh???t ????? ???????c t?? v???n, th??m
                  kh??m v?? ??i???u tr??? k???p th???i.
                </Typography>
              </TextNote3>
            </NoteLine3>
            <DividerEndForm />
            <BoxAccept>
              <Typography
                sx={{
                  width: '476px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Sau khi ???? ?????c c??c th??ng tin n??u tr??n, t??i ???? hi???u v??? c??c nguy
                c?? v??:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  label="?????ng ?? ti??m ch???ng"
                  control={
                    <Checkbox
                      size="small"
                      onChange={handleChangeCheckBox}
                      checked={checked}
                    />
                  }
                />
              </FormGroup>
            </BoxAccept>
            <Submit>
              <Link
                to="/vaccine-register-step1"
                style={{ textDecoration: 'none' }}>
                <ButtonBack>
                  <Typography
                    sx={{
                      width: '90px',
                      height: '24px',
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: '16px',
                      lineHeight: '150%',
                      letterSpacing: '-0.04px',
                      textTransform: 'uppercase',
                      color: '#303F9F'
                    }}>
                    Quay l???i
                  </Typography>
                </ButtonBack>
              </Link>
              <ButtonContinue type="submit" disabled={!checked}>
                <Typography
                  sx={{
                    width: '90px',
                    height: '24px',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '16px',
                    lineHeight: '150%',
                    letterSpacing: '-0.04px',
                    textTransform: 'uppercase',
                    color: 'white'
                  }}>
                  Ti???p t???c
                </Typography>
              </ButtonContinue>
            </Submit>
          </FormSubmit>
        </ContainerResult>
      </Result>
      <Footer />
    </VaccineRegistrationStep2>
  );
};

export default VaccineStep2;
