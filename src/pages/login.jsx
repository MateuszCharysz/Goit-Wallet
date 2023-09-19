import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
};

export default Login;
