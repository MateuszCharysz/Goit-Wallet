import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';
import Header from '../components/Header/Header';
import Navigation from './Navigation/Navigation';
import css from './SharedLayout.module.css'

const SharedLayoutPrivate = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Link to="/Goit-Wallet/">
            <ButtonSecondary text="DEV BUTTON skip and go to LOGIN" />
          </Link>
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayoutPrivate;
