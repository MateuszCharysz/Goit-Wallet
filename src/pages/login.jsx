import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginForm = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
};
