import img1 from '../../images/image1.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Typography, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  forgotPasswordAsync,
  resetDefault,
  selectState
} from '../../features/user/forgotPasswordSlice';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

type Input = {
  email: string;
};

const ForgotPasswordPage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  position: relative;
  width: 1400px;
  height: 753px;
  background: #ffffff;
`;

const ForgotPasswordPageInside = styled.div`
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

  width: 479px;
  height: 206px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 40px;
  width: 479px;
  height: 48px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 479px;
  height: 50px;
`;

const BoxEmail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 479px;
  height: 50px;
  background: #ffffff;
`;

const DialogActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 16px;
  width: 479px;
  height: 60px;
  margin-top: 20px;
`;

const ButtonBack = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 6px 16px;
  gap: 4px;
  width: 110px;
  height: 36px;
  border: 1px solid #303f9f;
  border-radius: 8px 8px 8px 0px;
  & > a {
    text-decoration: none;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.04px;
    color: #303f9f;
  }
`;

const ButtonSend = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 32px;
  gap: 4px;
  width: 91px;
  height: 36px;
  background: #303f9f;
  border-radius: 8px 8px 8px 0px;
  & > a {
    width: 27px;
    text-decoration: none;
    height: 24px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.04px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const stateForgot = useAppSelector(selectState);
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email không được bỏ trống')
      .email('Email không hợp lệ')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid }
  } = useForm<Input>(validationOpt);

  useEffect(() => {
    dispatch(resetDefault());
  }, [dispatch]);
  useEffect(() => {
    if (stateForgot.status === 'succeeded') {
      setValue('email', '');
    }
  }, [stateForgot.status, setValue]);

  useQuery({
    queryKey: ['forgotPassword'],
    queryFn: async () => onSubmit
  });

  const onSubmit = async (dataInput: Input) => {
    dispatch(forgotPasswordAsync(dataInput));
  };

  return (
    <ForgotPasswordPage>
      <ForgotPasswordPageInside>
        <SideLeft>
          <ImgLeft src={img1} alt="" />
        </SideLeft>
        <SideRight>
          <ContainerRight>
            <Header>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  width: '399px',
                  height: '48px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '150%',
                  textAlign: 'center',
                  letterSpacing: '-0.04px',
                  color: 'rgba(0, 0, 0, 0.87)'
                }}>
                Để khôi phục mật khẩu, vui lòng nhập đúng email bạn đã dùng để
                đăng ký
              </Typography>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <BoxEmail>
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
              </BoxEmail>
              <DialogActions>
                <ButtonBack>
                  <Link to="/login">Quay lại</Link>
                </ButtonBack>
                <ButtonSend type="submit" disabled={!isValid}>
                  <Link to="/login">Gửi</Link>
                </ButtonSend>
              </DialogActions>
            </Form>
          </ContainerRight>
        </SideRight>
      </ForgotPasswordPageInside>
    </ForgotPasswordPage>
  );
};

export default ForgotPassword;
