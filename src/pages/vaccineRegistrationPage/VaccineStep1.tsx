import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
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
import { useGroupsQuery } from './hooks/useGroupQuery';

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
  & .labelGroup {
    color: grey;
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

export interface Inputs {
  numBHYT: number;
  group_id: number;
  job: string;
  work_unit: string;
  address: string;
  date_injection: Date;
  session_injection: string;
}

export interface Group {
  id: number;
  name: string;
}

const VaccineStep1 = () => {
  const formSchema = Yup.object().shape({
    numBHYT: Yup.number().required('Số thẻ BHYT không được bỏ trống'),
    group_id: Yup.number().required('Nhóm ưu tiên không được bỏ trống'),
    job: Yup.string().required('Nghề nghiệp không được bỏ trống'),
    work_unit: Yup.string().required('Đơn vị công tác không được bỏ trống'),
    address: Yup.string().required('Địa chỉ hiện tại không được bỏ trống'),
    date_injection: Yup.date().required(
      'Ngày tiêm dự kiến không được bỏ trống'
    ),
    session_injection: Yup.string().required('Buổi tiêm không được bỏ trống')
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

  const groups: Group[] = useGroupsQuery().data || [];

  const onSubmit = async (data: Inputs) => {
    navigate('/vaccine-register-step2', {
      state: { data }
    });
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
                1. Thông tin người đăng ký tiêm
              </Typography>
            </InfoPerson>
            <BoxInputLine1>
              <InputComponent>
                <Label htmlFor="group">
                  Nhóm ưu tiên <span> (*)</span>
                </Label>
                <Controller
                  {...register('group_id')}
                  control={control}
                  render={({ field }) => (
                    <FormControl size="small" fullWidth>
                      <InputLabel className="labelGroup">
                        Nhóm ưu tiên
                      </InputLabel>
                      <Select
                        id="group"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {groups.map((group) => (
                          <MenuItem key={group.id} value={group.id}>
                            {group.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="numBHYT">Số thẻ BHYT</Label>
                <TextField
                  {...register('numBHYT')}
                  size="small"
                  helperText={errors.numBHYT?.message && errors.numBHYT.message}
                  type="text"
                  id="numBHYT"
                  placeholder="Số thẻ BHYT"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
            </BoxInputLine1>
            <BoxInputLine2>
              <InputComponent>
                <Label htmlFor="job">Nghề nghiệp</Label>
                <TextField
                  {...register('job')}
                  size="small"
                  helperText={errors.job?.message && errors.job.message}
                  type="text"
                  id="job"
                  placeholder="Nghề nghiệp"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="work_unit">Đơn vị công tác</Label>
                <TextField
                  {...register('work_unit')}
                  size="small"
                  helperText={
                    errors.work_unit?.message && errors.work_unit.message
                  }
                  type="text"
                  id="work_unit"
                  placeholder="Đơn vị công tác"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="address">Địa chỉ hiện tại</Label>
                <TextField
                  {...register('address')}
                  size="small"
                  helperText={errors.address?.message && errors.address.message}
                  type="text"
                  id="address"
                  placeholder="Địa chỉ hiện tại"
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
                2. Thông tin đăng ký tiêm chủng
              </Typography>
            </InfoInjection>
            <BoxInputLine3>
              <InputComponent>
                <Label htmlFor="date_injection">
                  Ngày muốn được tiêm (dự kiến)
                </Label>
                <Controller
                  control={control}
                  {...register('date_injection')}
                  name="date_injection"
                  render={({ field: { value, ...fieldProps } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateInjection>
                        <DatePicker
                          {...fieldProps}
                          label="Ngày/Tháng/Năm"
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
                <Label htmlFor="session_injection">Buổi tiêm mong muốn</Label>
                <TextField
                  {...register('session_injection')}
                  size="small"
                  helperText={
                    errors.session_injection?.message &&
                    errors.session_injection.message
                  }
                  type="text"
                  id="session_injection"
                  placeholder="Buổi tiêm mong muốn"
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
                Lưu ý:
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
                * Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến
                dịch tiêm chủng Vắc xin COVID - 19 <br />
                * Xin vui lòng kiểm tra kỹ các thông tin bắt buộc(VD: Họ và tên,
                Ngày tháng năm sinh, Số điện thoại, Số CMND/CCCD/Mã định danh
                công dân/HC ...) <br />
                * Bằng việc nhấn nút "Xác nhận", bạn hoàn toàn hiểu và đồng ý
                chịu trách nhiệm với các thông tin đã cung cấp.
                <br />* Cá nhân/Tổ chức đăng ký thành công trên hệ thống sẽ được
                đưa vào danh sách đặt tiêm. Cơ sở y tế sẽ thông báo lịch tiêm
                khi có vắc xin và kế hoạch tiêm được phê duyệt. Trân trọng cảm
                ơn!
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
                    Hủy bỏ
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
                  Tiếp tục
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
