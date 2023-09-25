import { Routes, Route } from "react-router-dom";
import React, { useState, lazy } from "react";
import Login from "../pages/login";
import Registration from "../pages/registration";
import { DashBoard } from "../pages/dashboard";
import Header from "../components/Header/Header";

// const Home = lazy(() => import('./pages/home/Home'));

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="Goit-Wallet/login" element={<Login />}></Route>
        <Route path="Goit-Wallet/register" element={<Registration />}></Route>
        <Route path="Goit-Wallet/dashboard" element={<DashBoard />}></Route>
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
