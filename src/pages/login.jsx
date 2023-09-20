// eslint-disable-next-line no-unused-vars
import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../images/logo.svg';

const Login = () => {
  return (
    <>
      <div>
        <img src={logo} alt='wallet-logo'></img>
      </div>

      <LoginForm />
    </>
  );
};

export default Login;
