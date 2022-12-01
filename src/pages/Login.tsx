import React from 'react';
import './login.css';
import img1 from '../images/image1.png';
import { useForm } from 'react-hook-form';

const Login = () => {
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
            <div className="form">
              <div className="boxInpEmail">
                <label className="labelEmail">Email</label>
                <div className="fieldInpEmail">
                  <input
                    placeholder="Email: Nguyễn Văn A"
                    className="inpEmail"
                    type="text"></input>
                  <p className="helpTextEmail">Email không được bỏ trống</p>
                </div>
              </div>
              <div className="boxInpPassword">
                <label className="labelPassword">Mật khẩu</label>
                <div className="fieldInpPassword">
                  <input className="inpPassword" type="password"></input>
                  <p className="helpTextPassword">
                    Password không được bỏ trống
                  </p>
                </div>
              </div>
            </div>
            <div className="links">
              <a className="forgotPasswordText">Quên mật khẩu?</a>
            </div>
            <button className="btnLogin">
              <span>Đăng nhập</span>
            </button>
            <div className="textRegister">
              <span>Hoặc đăng ký tài khoản, nếu bạn chưa đăng ký!</span>
            </div>
            <button className="btnSignUp">
              <span>Đăng ký</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
