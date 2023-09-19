import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <Routes>
      <Route
        path='/register'
        element={<RegistrationForm />}></Route>
    </Routes>
  );
};

export default Registration;
