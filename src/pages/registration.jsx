import React from 'react';
import { Routes, Route } from 'react-router-dom';

const RegistrationForm = () => {
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

export default RegistrationForm;
