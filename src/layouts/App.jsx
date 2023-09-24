import { Routes, Route } from 'react-router-dom';
import React, { useState, lazy } from 'react';
import Login from '../pages/login';
import Registration from '../pages/registration';
import SharedLayout from './SharedLayout';
import { DashBoard } from '../pages/dashboard';

// import Statistics from '../pages/statistics';
// const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="Goit-Wallet/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="dashboard" element={<DashBoard />}>
            <Route path="diagram" element={<div>Diagram</div>} />
            <Route path="currency" element={<div>Currency</div>} />
          </Route>
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
      {/* <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route
          path='/register'
          element={<Registration />}></Route>
        <Route path='*' element={<Login />} />
      </Routes> */}
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
        </Route>
      </Routes> */}
    </>
  );
};

export default App;
