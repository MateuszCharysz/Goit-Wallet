import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../utils/Svg/logo.svg';
import css from '../components/LoginForm/LoginForm.module.css';

const Login = () => {
  return (
    <div className={css.loginContainer}>
      <div className={css.loginWrapper}>
        <div className={css.logoContainer}>
          <img
            className={css.logo}
            src={logo}
            alt='wallet-logo'></img>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
