import * as React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import { Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const FormPassword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 8px;
  gap: 16px;
  width: 1368px;
  height: 246px;
  background: #ffffff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 16px;
  gap: 16px;
  width: 1352px;
  height: 206px;
`;

const RowInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  width: 1320px;
  height: 69px;
`;

const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 318px;
  height: 69px;
  background: #ffffff;
  & .inputBirthday {
    width: 100%;
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

const Label = styled.label`
  width: 318px;
  height: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
`;

const ButtonCancel = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 8px;
  width: 90px;
  height: 36px;
  border: 1px solid #3f51b5;
`;

const ButtonSave = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6px 16px;
  gap: 8px;
  width: 60px;
  height: 36px;
  background: #3f51b5;
`;

interface InputPassword {
  password: string;
  verifyPassword: string;
}

interface MyProps {
  editPassword?: boolean;
}

const EditPassword: React.FC<MyProps> = (props) => {
  const schemaPassword = Yup.object().shape({
    password: Yup.string()
      .required('Mật khẩu không được bỏ trống')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .trim()
      .matches(/^\S*$/, 'Mật khẩu không được có khoảng trắng'),
    verifyPassword: Yup.string()
      .required('Mật khẩu không được bỏ trống')
      .trim()
      .oneOf([Yup.ref('password'), null], 'Mật khẩu sai')
  });

  const validationOpt = {
    resolver: yupResolver(schemaPassword)
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<InputPassword>(validationOpt);

  const onSubmit = () => {};

  return (
    <FormPassword onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <RowInputs>
          <InputComponent>
            <Label htmlFor="password">Mật khẩu mới</Label>
            <TextField
              {...register('password')}
              inputProps={{
                readOnly: !props.editPassword
              }}
              size="small"
              helperText={errors.password?.message && errors.password.message}
              type="password"
              id="password"
              sx={{
                width: '100%'
              }}
              required
            />
          </InputComponent>
        </RowInputs>
        <RowInputs>
          <InputComponent>
            <Label htmlFor="verifyPassword">Xác nhận lại mật khẩu</Label>
            <TextField
              {...register('verifyPassword')}
              inputProps={{
                readOnly: !props.editPassword
              }}
              size="small"
              helperText={
                errors.verifyPassword?.message && errors.verifyPassword.message
              }
              type="password"
              id="verifyPassword"
              sx={{
                width: '100%'
              }}
              required
            />
          </InputComponent>
        </RowInputs>
        <RowInputs>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ButtonCancel>
              <Typography
                sx={{
                  width: '60px',
                  height: '24px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '14px',
                  lineHeight: '24px',
                  letterSpacing: '0.46px',
                  textTransform: 'uppercase',
                  color: '#3F51B5'
                }}>
                Hủy Bỏ
              </Typography>
            </ButtonCancel>
          </Link>
          <ButtonSave
            disabled={!isValid}
            type="submit"
            sx={{
              width: '30px',
              height: '24px',
              fontFamily: 'Roboto',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '24px',
              letterSpacing: '0.46px',
              textTransform: 'uppercase',
              color: 'white'
            }}>
            Lưu
          </ButtonSave>
        </RowInputs>
      </Content>
    </FormPassword>
  );
};

export default EditPassword;
