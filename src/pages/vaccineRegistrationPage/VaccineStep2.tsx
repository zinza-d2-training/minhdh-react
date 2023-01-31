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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import api from '../../utils/axios/instance';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { useMutation } from '@tanstack/react-query';
import { LoadingButton } from '@mui/lab';
import { Status } from '../../hooks/statusRegistration';

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

const ButtonContinue = styled(LoadingButton)`
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

interface Inputs {
  numBHYT: number | null | undefined;
  group_id: number;
  job: string | null | undefined;
  work_unit: string | null | undefined;
  address: string | null | undefined;
  date_injection: Date | null | undefined;
  session_injection: string | null | undefined;
  user_id: number;
  status: number;
  registration_code: string;
}

export const vaccineRegistration = async (dataInputs: Inputs) => {
  const newData = await api.post('/vaccine-registration', dataInputs);
  return newData.data;
};

const VaccineStep2 = () => {
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();
  const location: any = useLocation();
  const dataInput = location.state.data;
  const [loading, setLoading] = React.useState(false);
  const currentUser = useCurrentUser();

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const newRegistration: Inputs = {
    ...dataInput,
    user_id: currentUser?.id,
    status: Status.SUCCESS,
    registration_code: `${new Date().getTime()}${currentUser?.id}`
  };

  const { mutate, data } = useMutation({
    mutationFn: (dataInputs: Inputs) => {
      return vaccineRegistration(dataInputs);
    }
  });

  const onSubmit = (event: any) => {
    event.preventDefault();
    mutate(newRegistration);
    setLoading(true);
  };

  React.useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigate('/vaccine-register-step3', {
          state: {
            numBHYT: newRegistration.numBHYT,
            registration_code: newRegistration.registration_code
          }
        });
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigate]);

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
          Tra cứu đăng ký tiêm
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
                  Thông tin cá nhân
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
                  Phiếu đồng ý tiêm
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
                  Hoàn thành
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
                  1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả,
                  tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh
                  hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể
                  phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên,
                  sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện
                  pháp phòng chống dịch theo quy định.
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
                  2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu
                  hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức
                  đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng.
                  Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1
                  bằng vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng
                  thông thường sau tiêm chủng.
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
                  3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm
                  chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm
                  khám và điều trị kịp thời.
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
                Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy
                cơ và:
              </Typography>
              <FormGroup>
                <FormControlLabel
                  label="Đồng ý tiêm chủng"
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
                    Quay lại
                  </Typography>
                </ButtonBack>
              </Link>
              <ButtonContinue
                type="submit"
                disabled={!checked}
                loading={loading}
                variant="contained"
                loadingPosition="end">
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
                  Tiếp tục
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
