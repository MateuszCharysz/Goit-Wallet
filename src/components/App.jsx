import { Routes, Route } from 'react-router-dom';
import React, { useState, lazy } from 'react';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import { Dashboard } from './Dashboard/Dashboard';
import { ModalAddTransaction } from './ModalAddTransaction/ModalAddTransaction';

// const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
    {/* Tekst */}
    <Dashboard/>
    {/* <ModalAddTransaction/> */}
      {/* <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/register" element={<SignUp />} />
          <Route path="/wallet" element={<SharedLayout />}>
            <Route index element={<NavBar />} />
            <Route index element={<Transactions />}>
              <Route path="add" element={<AddTransaction />} />
              <Route
                path="/:transactionId/edit"
                element={<EditTransaction />}
              />
              <Route path="/:transactionId/delete" element={<DeleteTransaction />} />
            </Route>
            <Route path="/currency" element={<Currency />} />
            <Route path="/statistics" element={<Currency />} />
          </Route>
          <Route path="*" element={<Home trendingList={trendList} />} />
        </Route>
      </Routes> */}
    </>
  );
};

export default App;
