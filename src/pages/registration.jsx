// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => setValue(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  const handleOnClick = () => setValue('');

  return (
    <>
      <RegistrationForm
        value={value}
        change={handleOnChange}
        click={handleOnClick}
        submit={handleSubmit}
      />
    </>
  );
};

export default Registration;
