import { Routes, Route } from 'react-router-dom';
import React, { useState, lazy } from 'react';
import '../styles/App.css';
import Login from '../pages/Login';

// const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route
          path='/register'
          element={<Registration />}></Route>
      </Routes>
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
