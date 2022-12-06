import img1 from '../../images/image1.png';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl
} from '@mui/material';
import styled from '@emotion/styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputLabel from '@mui/material/InputLabel';
import { useMemo } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const LoginPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 1400px;
  height: 100%;
  background: #ffffff;
`;

const LoginPageInside = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  width: 1400px;
  height: 100%;
`;

const SideLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 700px;
  height: 100%;
`;

const ImgLeft = styled.img`
  width: 700px;
  height: 1200px;
`;

const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 700px;
  height: 100%;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 24px 0px;
  gap: 16px;
  width: 600px;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 280px;
  height: 42px;
  margin-top: -110px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px 0px 0px;
  gap: 16px;
  width: 400px;
  height: 934px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 400px;
  height: 102px;
  background: #ffffff;
  & .inputBirthday {
    width: 96%;
    padding: 12.5px 8px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    line-height: 23px;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
  }
  & .helpText {
    margin: 0 0 0 13px;
    font-size: 12px;
    position: relative;
    color: grey;
    top: 3px;
    line-height: 20px;
  }
`;

const DateBirthday = styled.div`
width: 100%;
}
`;

const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 0px;
  gap: 16px;
  width: 420px;
  height: 60px;
  & .MuiButton-endIcon {
    margin-right: 0;
    margin-left: 0;
    & .MuiSvgIcon-root {
      width: 16px;
    }
  }
`;

const ButtonContinue = styled(Button)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 110px;
  height: 30px;
  background: white;
  box-shadow: unset;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: #3f51b5;
`;

const Label = styled.label`
  width: 400px;
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

type Inputs = {
  cmnd: number;
  email: string;
  password: string;
  name: string;
  birthday: Date;
  gender: string;
  provinceId: number;
  districtId: number;
  wardId: number;
};

interface Province {
  id: number;
  name: string;
}

interface District {
  id: number;
  name: string;
  provinceId: number;
}

interface Ward {
  id: number;
  name: string;
  districtId: number;
}

const provinces: Province[] = [
  { id: 1, name: 'Hà Nội' },
  { id: 2, name: 'TP Hồ Chí Minh' }
];

const districts: District[] = [
  { id: 1, name: 'Quận 1 Hà Nội', provinceId: 1 },
  { id: 2, name: 'Quận 2 Hà Nội', provinceId: 1 },
  { id: 3, name: 'Quận 1 TP Hồ Chí Minh', provinceId: 2 },
  { id: 4, name: 'Quận 2 TP Hồ Chí Minh', provinceId: 2 }
];

const wards: Ward[] = [
  { id: 1, name: 'Phường 1 Quận 1 Hà Nội', districtId: 1 },
  { id: 2, name: 'Phường 2 Quận 1 Hà Nội', districtId: 1 },
  { id: 3, name: 'Phường 1 Quận 2 Hà Nội', districtId: 2 },
  { id: 4, name: 'Phường 2 Quận 2 Hà Nội', districtId: 2 },
  {
    id: 5,
    name: 'Phường 1 Quận 1 TP Hồ Chí Minh',
    districtId: 3
  },
  {
    id: 6,
    name: 'Phường 1 Quận 2 TP Hồ Chí Minh',
    districtId: 4
  },
  {
    id: 7,
    name: 'Phường 2 Quận 1 TP Hồ Chí Minh',
    districtId: 3
  },
  {
    id: 8,
    name: 'Phường 2 Quận 2 TP Hồ Chí Minh',
    districtId: 4
  }
];

const Register = () => {
  const formSchema = Yup.object().shape({
    cmnd: Yup.number()
      .required('Số CMND/CCCD không được bỏ trống')
      .min(12, 'Số CMND/CCCD không hợp lệ'),
    email: Yup.string()
      .required('Email không được bỏ trống')
      .email('Email không hợp lệ'),
    password: Yup.string()
      .required('Mật khẩu không được bỏ trống')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .trim()
      .matches(/^\S*$/, 'Mật khẩu không được có khoảng trắng'),
    name: Yup.string().required('Họ và tên không được bỏ trống'),
    birthday: Yup.date().required('Ngày sinh không được bỏ trống'),
    gender: Yup.string().required('Giới tính không được bỏ trống'),
    provinceId: Yup.number().required('Tỉnh/Thành phố không được bỏ trống'),
    districtId: Yup.number().required('Quận/Huyện không được bỏ trống'),
    wardId: Yup.number().required('Phường/Xã không được bỏ trống')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid }
  } = useForm<Inputs>(validationOpt);

  const onSubmit = () => {};

  const provinceId = watch('provinceId');
  const districtId = watch('districtId');

  const filterDistricts: District[] = useMemo(() => {
    return districts.filter((district) => district.provinceId === provinceId);
  }, [provinceId]);

  const filterWards: Ward[] = useMemo(() => {
    return wards.filter((ward) => ward.districtId === districtId);
  }, [districtId]);

  return (
    <LoginPage>
      <LoginPageInside>
        <SideLeft>
          <ImgLeft src={img1} alt="" />
        </SideLeft>
        <SideRight>
          <ContainerRight>
            <Header>
              <Typography variant="h4" align="center">
                Đăng ký tài khoản
              </Typography>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputComponent>
                <Label htmlFor="cmnd">
                  Số CMND/CCCD <span> (*)</span>
                </Label>
                <TextField
                  {...register('cmnd')}
                  helperText={errors.cmnd?.message && errors.cmnd.message}
                  type="text"
                  id="cmnd"
                  placeholder="Số CMND/CCCD"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="email">
                  Email <span> (*)</span>
                </Label>
                <TextField
                  {...register('email')}
                  helperText={errors.email?.message && errors.email.message}
                  type="text"
                  id="email"
                  placeholder="Email"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="password">
                  Mật khẩu <span> (*)</span>
                </Label>
                <TextField
                  {...register('password')}
                  helperText={
                    errors.password?.message && errors.password.message
                  }
                  type="password"
                  id="password"
                  placeholder="********"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="name">
                  Họ và tên <span> (*)</span>
                </Label>
                <TextField
                  {...register('name')}
                  helperText={errors.name?.message && errors.name.message}
                  type="text"
                  id="name"
                  placeholder="Họ và tên"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="birthday">
                  Ngày sinh <span> (*)</span>
                </Label>
                <Controller
                  control={control}
                  {...register('birthday')}
                  name="birthday"
                  render={({ field: { value, ...fieldProps } }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateBirthday>
                        <DatePicker
                          {...fieldProps}
                          label="Ngày sinh"
                          value={value}
                          className="inputBirthday"
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </DateBirthday>
                    </LocalizationProvider>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="gender">
                  Giới tính <span> (*)</span>
                </Label>
                <TextField
                  {...register('gender')}
                  helperText={errors.gender?.message && errors.gender.message}
                  type="text"
                  id="gender"
                  placeholder="Giới tính"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="province">
                  Tỉnh/Thành phố <span> (*)</span>
                </Label>
                <Controller
                  {...register('provinceId')}
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl fullWidth>
                      <InputLabel>Tỉnh/Thành phố</InputLabel>
                      <Select
                        id="province"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {provinces.map((province, index) => (
                          <MenuItem key={index} value={province.id}>
                            {province.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="helpText">
                        {fieldState.error?.message && fieldState.error.message}
                      </p>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="district">
                  Quận/Huyện <span> (*)</span>
                </Label>
                <Controller
                  {...register('districtId')}
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl fullWidth>
                      <InputLabel>Quận/Huyện</InputLabel>
                      <Select
                        id="district"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {filterDistricts.map((district, index) => (
                          <MenuItem key={index} value={district.id}>
                            {district.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="helpText">
                        {fieldState.error?.message && fieldState.error.message}
                      </p>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <InputComponent>
                <Label htmlFor="ward">
                  Xã/Phường <span> (*)</span>
                </Label>
                <Controller
                  {...register('wardId')}
                  control={control}
                  render={({ field, fieldState }) => (
                    <FormControl fullWidth>
                      <InputLabel>Xã/Phường</InputLabel>
                      <Select
                        id="ward"
                        {...field}
                        onChange={(event) => {
                          field.onChange(event.target.value);
                        }}>
                        {filterWards.map((ward, index) => (
                          <MenuItem key={index} value={ward.id}>
                            {ward.name}
                          </MenuItem>
                        ))}
                      </Select>
                      <p className="helpText">
                        {fieldState.error?.message && fieldState.error.message}
                      </p>
                    </FormControl>
                  )}
                />
              </InputComponent>
              <DialogActions>
                <ButtonContinue
                  type="submit"
                  disabled={!isValid}
                  endIcon={<ArrowForwardIcon />}>
                  Tiếp tục
                </ButtonContinue>
              </DialogActions>
            </Form>
          </ContainerRight>
        </SideRight>
      </LoginPageInside>
    </LoginPage>
  );
};

export default Register;
