import React from 'react';
import css from '../components/RegistrationForm/RegistrationForm.module.css';
import logo from '../utils/Svg/logo.svg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  return (
    <div className={css.registerContainer}>
      <div className={css.registerWrapper}>
        <div className={css.logoContainer}>
          <img
            className={css.logo}
            src={logo}
            alt='wallet-logo'></img>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
