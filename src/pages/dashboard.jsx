import React from 'react';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { AddTransactionButton } from '../components/AddTransactionButton/AddTransactionButton';
import { SelectMenuModal } from '../components/SelectMenuModal/SelectMenuModal';
import { SelectStatisticsMenu } from '../components/SelectStatisticsMenu/SelectStatisticsMenu';
import { useMediaQuery } from '../hook/useMediaQuerry';
import Navigation from '../layouts/Navigation/Navigation';
import BalanceComponent from '../components/Balance/Balance';
import css from './pages.module.css';

export const DashBoard = (components) => {
  const isMobile = useMediaQuery('screen and (min-width: 768px)');

  return (
    <section className={css.container}>
      <div>
        <Navigation />
        <BalanceComponent />
        {isMobile ? <div>TUTAJ POWINNO BYĆ CURRENCY</div> : <div></div>}
      </div>
      
        <Dashboard />
        <AddTransactionButton />
        <SelectStatisticsMenu placeholder={'Month'} type={'month'} />
        <SelectStatisticsMenu placeholder={'Year'} type={'year'} />
      
    </section>
  );
};
