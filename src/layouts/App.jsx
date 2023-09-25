import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Login from '../pages/login';
import Registration from '../pages/registration';
// import { DashBoard } from '../pages/dashboard';
import SharedLayoutRestricted from './SharedLayoutRest';
import SharedLayoutPrivate from './SharedLayoutPriv';

const DashBoard = lazy(() => import('../pages/dashboard'));
const Currency = lazy(() => import('../components/Currency/Currency'));
const Statistics = lazy(() => import('../pages/statistics'));

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
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
