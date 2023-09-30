import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Header from '../components/Header/Header';
import Navigation from './Navigation/Navigation';
import useAuth from '../hook/useAuth';
import useTransactions from '../hook/useTransactions';
import css from './SharedLayout.module.css';
import LogoutModal from '../components/LogoutModal/LogoutModal';
import Notiflix from 'notiflix';

const SharedLayoutPrivate = () => {
  const { isAuthLoading } = useAuth();
  const { isTransactionsLoading, transactionsError } = useTransactions();

  useEffect(() => {
    if (transactionsError) Notiflix.Notify.failure(transactionsError);
  }, [transactionsError]);

  return (
    <>
      <Header />
      <div className={css.container}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Loader isVisible={isAuthLoading || isTransactionsLoading} />
        </Suspense>
      </div>
      <LogoutModal />
    </>
  );
};

export default SharedLayoutPrivate;
