import { Routes, Route } from 'react-router-dom';
import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SharedLayoutRestricted from './SharedLayoutRest';
import SharedLayoutPrivate from './SharedLayoutPriv';
import Login from '../pages/login';
import LogoutModal from '../components/LogoutModal/LogoutModal';
import { refreshUser } from '../redux/auth/actions';

const Registration = lazy(() => import('../pages/registration'));
const DashBoard = lazy(() => import('../pages/dashboard'));
const Currency = lazy(() => import('../components/Currency/Currency'));
const Statistics = lazy(() => import('../pages/statistics'));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      {/* <LogoutModal /> */}
      <Routes>
        <Route path="Goit-Wallet/" element={<SharedLayoutRestricted />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Route>
        <Route path="Goit-Wallet/dashboard" element={<SharedLayoutPrivate />}>
          <Route index element={<DashBoard />} />
          <Route path="diagram" element={<Statistics />} />
          <Route path="currency" element={<Currency />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
