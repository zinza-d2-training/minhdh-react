import './login.css';
import img1 from '../../images/image1.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email không được bỏ trống')
      .email('Email không hợp lệ'),
    password: Yup.string()
      .required('Mật khẩu không được bỏ trống')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .trim()
      .matches(/^\S*$/, 'Mật khẩu không được có khoảng trắng')
  });

  const validationOpt = {
    resolver: yupResolver(formSchema)
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>(validationOpt);

  const onSubmit = (data: Inputs) => {
    console.log(data);
    // localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(data));
    navigate('/user');
  };

  const forgotPasswordPage = () => {
    navigate('/forgot-password');
  };

  const registerPage = () => {
    navigate('/register');
  };

  return (
    <div className="loginPage">
      <div className="loginPageInside">
        <div className="sideLeft">
          <img className="img1" src={img1} alt="" />
        </div>
        <div className="sideRight">
          <div className="containerRight">
            <div className="header">
              <h4>Đăng nhập vào tài khoản</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="boxInpEmail">
                <label className="labelEmail">Email</label>
                <div className="fieldInpEmail">
                  <input
                    {...register('email')}
                    placeholder="Email: Nguyễn Văn A"
                    className="inpEmail"
                    required
                    type="text"
                  />
                  {errors.email?.message ? (
                    <p className="helpTextEmail">{errors.email.message}</p>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div className="boxInpPassword">
                <label className="labelPassword">Mật khẩu</label>
                <div className="fieldInpPassword">
                  <input
                    {...register('password')}
                    className="inpPassword"
                    type="password"
                    placeholder="Mật khẩu"
                    required
                  />
                  {errors.password?.message ? (
                    <p className="helpTextPassword">
                      {errors.password.message}
                    </p>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <button onClick={forgotPasswordPage} className="links">
                <span className="forgotPasswordText">Quên mật khẩu?</span>
              </button>
              {errors.password?.message || errors.email?.message ? (
                <button
                  type="submit"
                  className="btnLoginDisable"
                  disabled={true}>
                  <span>Đăng nhập</span>
                </button>
              ) : (
                <button type="submit" className="btnLogin">
                  <span>Đăng nhập</span>
                </button>
              )}
            </form>
            <div className="textRegister">
              <span>Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký!</span>
            </div>
            <button onClick={registerPage} className="btnSignUp">
              <span>Đăng ký</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
