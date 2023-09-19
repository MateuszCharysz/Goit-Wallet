import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/register'
          element={<RegistrationForm />}></Route>
      </Routes>
    </div>
  );
};

export default Registration;
