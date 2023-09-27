import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import Loader from '../components/Loader/Loader';
import useAuth from '../hook/useAuth';
import logo from '../utils/Svg/logo.svg';
import css from '../components/LoginForm/LoginForm.module.css';
import frameTablet from '../utils/frame-login/frame-tablet.png';
import frameDesk from '../utils/frame-login/frame-desktop.png';
import ellipseTablet from '../utils/bg-tablet-login/ellipse-up.png';
import ellipseDownT from '../utils/bg-tablet-login/ellipse-down.png';
import ellipseDownD from '../utils/bg-desktop-login/ellipse.png';
import ellipseDesktop from '../utils/bg-desktop-login/ellipse-up-desktop.png';

const Login = () => {
  const { isAuthLoading } = useAuth();

  return (
    <>
      <div className={css.loginContainer}>
        <div className={css.ellipseTablet}>
          <img src={ellipseTablet}></img>
        </div>
        <div className={css.ellipseDesktop}>
          <img src={ellipseDesktop}></img>
        </div>
        <div className={css.desktopContainer}>
          <img src={frameDesk}></img>
          <span className={css.finance}>Finance App</span>
        </div>
        <div className={css.tabletContainer}>
          <img src={frameTablet}></img>
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
        <div className={css.ellipseDownT}>
          <img src={ellipseDownT}></img>
        </div>
        <div className={css.ellipseDownD}>
          <img src={ellipseDownD}></img>
        </div>
      </div>
      <Loader isVisible={isAuthLoading} />
    </>
  );
};

export default Login;
