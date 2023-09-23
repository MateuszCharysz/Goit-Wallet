import React from 'react';
import css from '../components/RegistrationForm/RegistrationForm.module.css';
import logo from '../images/logo.svg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  return (
    <>
      <div className={css.logoContainer}>
        <img
          className={css.logo}
          src={logo}
          alt='wallet-logo'></img>
      </div>
      <RegistrationForm />
    </>
  );
};

export default Registration;
