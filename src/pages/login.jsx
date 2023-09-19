import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />}></Route>
    </Routes>
  );
};

export default Login;
