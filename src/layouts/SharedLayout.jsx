import React, { Suspense } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
// import PropTypes from 'prop-types'

const SharedLayout = props => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
