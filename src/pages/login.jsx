import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../images/logo.svg';
import css from '../components/LoginForm/LoginForm.module.css';
import frame from '../utils/Svg/frame-tablet.png';

const Login = () => {
  return (
    <div className={css.loginContainer}>
      <div className={css.tabletContainer}>
        <img src={frame}></img>
        <span className={css.finance}>Finance App</span>
      </div>
      <div className={css.loginWrapper}>
        <div className={css.logoContainer}>
          <img
            className={css.logo}
            src={logo}
            alt='wallet-logo'></img>
        </div>
        <LoginForm />
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
