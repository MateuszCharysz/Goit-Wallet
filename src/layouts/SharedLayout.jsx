import React, { Suspense } from 'react';
import Header from '../components/Header/Header';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';
// import PropTypes from 'prop-types'

const SharedLayout = props => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      <Link to='dashboard'><ButtonSecondary text='DEV BUTTON skip login and go to DASHBOARD'/></Link>
      </Suspense>
    </>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
