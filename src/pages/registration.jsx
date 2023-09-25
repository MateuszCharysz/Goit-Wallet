import React from 'react';
import css from '../components/RegistrationForm/RegistrationForm.module.css';
import logo from '../utils/Svg/logo.svg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import frameTablet from '../utils/frame-registration/frame-tablet.png';
import frameDesk from '../utils/frame-registration/frame-desktop.png';

const Registration = () => {
  return (
    <div className={css.registerContainer}>
      <div className={css.desktopContainer}>
        <img src={frameDesk}></img>
        <span className={css.finance}>Finance App</span>
      </div>
      <div className={css.tabletContainer}>
        <img src={frameTablet}></img>
        <span className={css.finance}>Finance App</span>
      </div>
      <div className={css.registerWrapper}>
        <div className={css.logoContainer}>
          <img className={css.logo} src={logo} alt="wallet-logo"></img>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
