import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';
import Header from '../components/Header/Header';
import Navigation from './Navigation/Navigation';
import useAuth from '../hook/useAuth';
import useTransactions from '../hook/useTransactions';
import css from './SharedLayout.module.css';
import LogoutModal from '../components/LogoutModal/LogoutModal';

const SharedLayoutPrivate = () => {
  const { isAuthLoading } = useAuth();
  const { isTransactionsLoading } = useTransactions();

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
          <Loader isVisible={isAuthLoading || isTransactionsLoading} />
        </Suspense>
      </div>
      <LogoutModal />
    </>
  );
};

export default SharedLayoutPrivate;
