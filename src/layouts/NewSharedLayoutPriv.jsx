import React, { Fragment, Suspense, lazy } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';
import Header from '../components/Header/Header';
import useAuth from '../hook/useAuth';
import useTransactions from '../hook/useTransactions';
import css from './SharedLayout.module.css';
import LogoutModal from '../components/LogoutModal/LogoutModal';
import Navigation from '../layouts/Navigation/Navigation';
import BalanceComponent from '../components/Balance/Balance';
import Media from 'react-media';
import Currency from '../components/Currency/Currency';

// const Currency = lazy(() => import('../components/Currency/Currency'));

const NewSharedLayoutPrivate = () => {
  // Altarnate to DashboardPage
  const { isAuthLoading } = useAuth();
  const { isTransactionsLoading } = useTransactions();

  return (
    <>
      <Header />
      <div className={css.container}>
        <div className={css.smallContainer}>
          <Navigation />
          <Media queries={{ medium: '(min-width: 769px)' }}>
            {matches => (
              <Fragment>
                {matches.medium && <BalanceComponent />}
                {matches.medium && <Currency />}
              </Fragment>
            )}
          </Media>
        </div>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Link to="/Goit-Wallet/">
          <ButtonSecondary text="DEV BUTTON skip and go to LOGIN" />
        </Link>
        <Link to="/Goit-Wallet/dashboard">
          <ButtonSecondary text="DEV BUTTON skip and go to OldDASHBOARD" />
        </Link>
        <Loader isVisible={isAuthLoading || isTransactionsLoading} />
      </div>
      <LogoutModal />
    </>
  );
};

export default NewSharedLayoutPrivate;
