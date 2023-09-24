import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';
import Header from '../components/Header/Header';
import Navigation from './Navigation/Navigation';

const SharedLayoutPrivate = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Link to="login">
          <ButtonSecondary text="DEV BUTTON skip login and go to LOGIN" />
        </Link>
      </Suspense>
    </div>
  );
};

export default SharedLayoutPrivate;
