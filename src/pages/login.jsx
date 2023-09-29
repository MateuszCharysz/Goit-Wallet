import React from 'react';
import LoginForm from '../components/LoginRegisterForms/LoginForm';
import logo from '../utils/Svg/logo.svg';
import css from '../components/LoginRegisterForms/LoginRegister.module.css';
import frameTablet from '../utils/frame-login/frame-tablet.png';
import frameDesk from '../utils/frame-login/frame-desktop.png';
import Loader from '../components/Loader/Loader';
import useAuth from '../hook/useAuth';
import topElipse from '../utils/elipse-orange.png';
import bottomElipse from '../utils/elipse-purple.png';

const Login = () => {
  const { isAuthLoading } = useAuth();

  return (
    <>
      <div className={css.loginContainer}>
        {/* <div className={css.ellipseTablet}>
          <img src={ellipseTablet}></img>
        </div> */}
        <div className={css.desktopContainer}>
          <img src={frameDesk}></img>
          <span className={css.finance}>Finance App</span>
        </div>
        <div className={css.tabletContainer}>
          <img src={frameTablet}></img>
          <span className={css.finance}>Finance App</span>
        </div>
        <div className={css.loginWrapper}>
            <img className={css.logo} src={logo} alt="wallet-logo"></img>
          <LoginForm />
        </div>
        {/* <div className={css.ellipseDownT}>
          <img src={ellipseDownT}></img>
        </div> */}
        {/* <div className={css.ellipseDownD}>
          <img src={ellipseDownD}></img>
        </div> */}
      </div>
      <Loader isVisible={isAuthLoading} />
    </>
  );
};

export default Login;
