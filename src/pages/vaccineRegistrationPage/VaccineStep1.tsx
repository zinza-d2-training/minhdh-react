import { Button, TextField, Typography } from '@mui/material';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Footer from '../../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const VaccineRegistrationStep1 = styled.div``;

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
  height: 531px;
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
  height: 531px;
  background: #ffffff;
`;

const FormSubmit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 531px;
`;

const InfoPerson = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1368px;
  height: 24px;
`;

const BoxInputLine1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 69px;
`;

const BoxInputLine2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 69px;
  margin-top: 15px;
`;

const InfoInjection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1368px;
  margin-top: 20px;
  height: 24px;
`;

const BoxInputLine3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: 1368px;
  height: 69px;
`;

const NoteHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1368px;
  height: 24px;
  margin-top: 15px;
`;

const TextNote = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 1368px;
  height: 96px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 330px;
  height: 69px;
  background: #ffffff;
  & .inputDate {
    width: 96%;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    border-radius: 4px;
  }
`;

const Label = styled.label`
  width: 330px;
  height: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  & > span {
    color: red;
  }
`;

const DateInjection = styled.div`
  width: 100%;
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

const ButtonCancel = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  gap: 4px;
  width: 130px;
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

interface Inputs {
  numBHYT: number;
  group: string;
  job: string;
  workUnit: string;
  address: string;
  dateOfInjection: Date;
  sessionInjection: string;
}

const VaccineStep1 = () => {
  const formSchema = Yup.object().shape({
    numBHYT: Yup.number().required('S??? th??? BHYT kh??ng ???????c b??? tr???ng'),
    group: Yup.string().required('Nh??m ??u ti??n kh??ng ???????c b??? tr???ng'),
    job: Yup.string().required('Ngh??? nghi???p kh??ng ???????c b??? tr???ng'),
    workUnit: Yup.string().required('????n v??? c??ng t??c kh??ng ???????c b??? tr???ng'),
    address: Yup.string().required('?????a ch??? hi???n t???i kh??ng ???????c b??? tr???ng'),
    dateOfInjection: Yup.date().required(
      'Ng??y ti??m d??? ki???n kh??ng ???????c b??? tr???ng'
    ),
    sessionInjection: Yup.string().required('Bu???i ti??m kh??ng ???????c b??? tr???ng')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid }
  } = useForm<Inputs>(validationOpt);

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/vaccine-register-step2');
  };

  return (
    <VaccineRegistrationStep1>
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
                    2
                  </Typography>
                </Circle>
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
          <FormSubmit onSubmit={handleSubmit(onSubmit)}>
            <InfoPerson>
              <Typography
                sx={{
                  width: '226px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                1. Th??ng tin ng?????i ????ng k?? ti??m
              </Typography>
            </InfoPerson>
            <BoxInputLine1>
              <InputComponent>
                <Label htmlFor="group">
                  Nh??m ??u ti??n <span> (*)</span>
                </Label>
                <TextField
                  {...register('group')}
                  size="small"
                  helperText={errors.group?.message && errors.group.message}
                  type="text"
                  id="group"
                  placeholder="Nh??m ??u ti??n"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="numBHYT">S??? th??? BHYT</Label>
                <TextField
                  {...register('numBHYT')}
                  size="small"
                  helperText={errors.numBHYT?.message && errors.numBHYT.message}
                  type="text"
                  id="numBHYT"
                  placeholder="S??? th??? BHYT"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
            </BoxInputLine1>
            <BoxInputLine2>
              <InputComponent>
                <Label htmlFor="job">Ngh??? nghi???p</Label>
                <TextField
                  {...register('job')}
                  size="small"
                  helperText={errors.job?.message && errors.job.message}
                  type="text"
                  id="job"
                  placeholder="Ngh??? nghi???p"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="workUnit">????n v??? c??ng t??c</Label>
                <TextField
                  {...register('workUnit')}
                  size="small"
                  helperText={
                    errors.workUnit?.message && errors.workUnit.message
                  }
                  type="text"
                  id="workUnit"
                  placeholder="????n v??? c??ng t??c"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="address">?????a ch??? hi???n t???i</Label>
                <TextField
                  {...register('address')}
                  size="small"
                  helperText={errors.address?.message && errors.address.message}
                  type="text"
                  id="address"
                  placeholder="?????a ch??? hi???n t???i"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
            </BoxInputLine2>
            <InfoInjection>
              <Typography
                sx={{
                  width: '229px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                2. Th??ng tin ????ng k?? ti??m ch???ng
              </Typography>
            </InfoInjection>
            <BoxInputLine3>
              <InputComponent>
                <Label htmlFor="dateOfInjection">
                  Ng??y mu???n ???????c ti??m (d??? ki???n)
                </Label>
                <Controller
                  control={control}
                  {...register('dateOfInjection')}
                  name="dateOfInjection"
                  render={({ field: { value, ...fieldProps } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateInjection>
                        <DatePicker
                          {...fieldProps}
                          label="Ng??y/Th??ng/N??m"
                          value={value}
                          className="inputDate"
                          renderInput={(params: any) => (
                            <TextField size="small" {...params} />
                          )}
                        />
                      </DateInjection>
                    </LocalizationProvider>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="sessionInjection">Bu???i ti??m mong mu???n</Label>
                <TextField
                  {...register('sessionInjection')}
                  size="small"
                  helperText={
                    errors.sessionInjection?.message &&
                    errors.sessionInjection.message
                  }
                  type="text"
                  id="sessionInjection"
                  placeholder="Bu???i ti??m mong mu???n"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
            </BoxInputLine3>
            <NoteHeader>
              <Typography
                sx={{
                  width: '60px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#D32F2F'
                }}>
                L??u ??:
              </Typography>
            </NoteHeader>
            <TextNote>
              <Typography
                sx={{
                  width: '1364px',
                  height: '96px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  letterSpacing: '-0.04px',
                  color: '#D32F2F'
                }}>
                * Vi???c ????ng k?? th??ng tin ho??n to??n b???o m???t v?? ph???c v??? cho chi???n
                d???ch ti??m ch???ng V???c xin COVID - 19 <br />
                * Xin vui l??ng ki???m tra k??? c??c th??ng tin b???t bu???c(VD: H??? v?? t??n,
                Ng??y th??ng n??m sinh, S??? ??i???n tho???i, S??? CMND/CCCD/M?? ?????nh danh
                c??ng d??n/HC ...) <br />
                * B???ng vi???c nh???n n??t "X??c nh???n", b???n ho??n to??n hi???u v?? ?????ng ??
                ch???u tr??ch nhi???m v???i c??c th??ng tin ???? cung c???p.
                <br />* C?? nh??n/T??? ch???c ????ng k?? th??nh c??ng tr??n h??? th???ng s??? ???????c
                ????a v??o danh s??ch ?????t ti??m. C?? s??? y t??? s??? th??ng b??o l???ch ti??m
                khi c?? v???c xin v?? k??? ho???ch ti??m ???????c ph?? duy???t. Tr??n tr???ng c???m
                ??n!
              </Typography>
            </TextNote>
            <Submit>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ButtonCancel>
                  <Typography
                    sx={{
                      width: '70px',
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
                    H???y b???
                  </Typography>
                </ButtonCancel>
              </Link>
              <ButtonContinue type="submit" disabled={!isValid}>
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
                    color: '#FFFFFF'
                  }}>
                  Ti???p t???c
                </Typography>
              </ButtonContinue>
            </Submit>
          </FormSubmit>
        </ContainerResult>
      </Result>
      <Footer />
    </VaccineRegistrationStep1>
  );
};

export default VaccineStep1;
