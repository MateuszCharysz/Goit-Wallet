// eslint-disable-next-line no-unused-vars
import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../images/logo.svg';
import css from '../components/LoginForm/LoginForm.module.css';

const Login = () => {
  return (
    <>
      <div>
        <img
          className={css.logo}
          src={logo}
          alt='wallet-logo'></img>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
