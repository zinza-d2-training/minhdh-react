import img1 from '../../images/image1.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Typography, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { login, selectError } from '../../features/user/userSlice';
import { useMutation } from '@tanstack/react-query';
import api from '../../utils/axios/instance';
import { useEffect } from 'react';

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 1400px;
  height: 753px;
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
  height: 753px;
`;

const SideLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 700px;
  height: 753px;
`;

const ImgLeft = styled.img`
  width: 700px;
  height: 753px;
`;

const SideRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 700px;
  height: 753px;
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 376px;
  height: 526px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 376px;
  height: 42px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 376px;
  height: 330px;
`;

const BoxEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 376px;
  height: 102px;
  background: #ffffff;
`;

const BoxPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 376px;
  height: 102px;
  background: #ffffff;
`;

const ButtonForgotPassword = styled(Button)`
  border: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  width: 140px;
  height: 20px;
  background: #ffffff;
  margin-left: 236px;
`;

const ButtonLogin = styled(Button)`
  width: 376px;
  height: 50px;
  background: #66bb6a;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  & > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;

const ButtonSignUp = styled(Button)`
  width: 376px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #9ccc65;
  cursor: pointer;
  border-radius: 5px;
`;

const ItemForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;

  & > a {
    width: 180px;
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    text-align: right;
    letter-spacing: -0.04px;
    color: #3949ab;
    cursor: pointer;
    text-decoration: none;
  }
`;

const ItemRegister = styled.div`
  & > a {
    width: 376px;
    text-decoration: none;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.04px;
    color: #9ccc65;
  }
`;

const Label = styled.label`
  width: 376px;
  height: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

interface ReturnToken {
  token: string;
}

export const loginForm = async (data: Inputs): Promise<ReturnToken> => {
  const response = await api.post<ReturnToken>('/auth/login', data);
  return response.data;
};

const Login = () => {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email kh??ng ???????c b??? tr???ng')
      .email('Email kh??ng h???p l???'),
    password: Yup.string()
      .required('M???t kh???u kh??ng ???????c b??? tr???ng')
      .min(8, 'M???t kh???u ph???i c?? ??t nh???t 8 k?? t???')
      .trim()
      .matches(/^\S*$/, 'M???t kh???u kh??ng ???????c c?? kho???ng tr???ng')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm<Inputs>(validationOpt);

  const email = watch('email');
  const password = watch('password');

  const loginFailed = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const dataForm: Inputs = {
    email: email,
    password: password
  };

  const { mutate, data } = useMutation({
    mutationFn: (data: Inputs) => {
      return loginForm(data);
    }
  });

  const onSubmit = () => {
    mutate(dataForm);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      dispatch(login(data));
      navigate('/');
    }
  }, [data, dispatch, navigate]);

  return (
    <LoginPage>
      <LoginPageInside>
        <SideLeft>
          <ImgLeft src={img1} alt="" />
        </SideLeft>
        <SideRight>
          <ContainerRight>
            <Header>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  width: '376px',
                  height: '42px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '33px',
                  lineHeight: '123.5%',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                ????ng nh???p v??o t??i kho???n
              </Typography>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <BoxEmail>
                <Label htmlFor="email">Email</Label>
                <TextField
                  {...register('email')}
                  helperText={errors.email?.message && errors.email.message}
                  type="text"
                  id="email"
                  placeholder="Email: Nguy???n V??n A"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </BoxEmail>
              <BoxPassword>
                <Label htmlFor="password">M???t kh???u</Label>
                <TextField
                  {...register('password')}
                  helperText={
                    errors.password?.message && errors.password.message
                  }
                  type="password"
                  id="password"
                  placeholder="M???t Kh???u"
                  sx={{
                    width: '100%'
                  }}
                  required
                />
              </BoxPassword>
              <ItemForgotPassword>
                <Link to="/forgot-password">
                  <ButtonForgotPassword>Qu??n m???t kh???u ?</ButtonForgotPassword>
                </Link>
              </ItemForgotPassword>
              {loginFailed && (
                <Typography sx={{ color: 'red', padding: '5px 0' }}>
                  T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c
                </Typography>
              )}
              <ButtonLogin type="submit" disabled={!isValid}>
                <span>????ng nh???p</span>
              </ButtonLogin>
            </Form>
            <Typography
              sx={{
                width: '100%',
                textAlign: 'center'
              }}>
              Ho???c ????ng k?? t??i kho???n, n???u b???n ch??a ????ng k??!
            </Typography>
            <ItemRegister>
              <Link to="/register">
                <ButtonSignUp>????ng k??</ButtonSignUp>
              </Link>
            </ItemRegister>
          </ContainerRight>
        </SideRight>
      </LoginPageInside>
    </LoginPage>
  );
};

export default Login;
