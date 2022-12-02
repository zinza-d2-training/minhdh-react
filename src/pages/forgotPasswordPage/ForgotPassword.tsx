import React, { useState, useEffect } from 'react';
import './forgotPassword.css';
import img1 from '../../images/image1.png';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div>
      <h1>Forgot Password</h1>
    </div>
  );
};

export default ForgotPassword;
