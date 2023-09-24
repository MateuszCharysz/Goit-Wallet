import React from 'react';
import { Link } from 'react-router-dom';
import Svg from '../../utils/Svg/Svg';
import css from './Header.module.css'

const Header = () => {
  const openModal = () => {
    console.log('Logout modal opened');
  }
  return (
    <header className={css.headerContainer}>
      <div className={css.headerWrapper}>
        <div className={css.headerSide}>
          <Link to='Goit-Wallet/dashboard' className={css.headerLogo}>
            <Svg icon='wallet' size='40' />
            <h2 className={css.appName}>Wallet</h2>
          </Link>
        </div>
        <div className={css.headerSide}>
          <p className={css.headerSideText}>Name</p>
          <button className={css.headerLogout} onClick={openModal} data-logout-open>
            <Svg icon='logout' size='18' />
            <p className={css.headerSideText}>Exit</p>
          </button>
        </div>
      </div>
    </header>
  )
};

export default Header