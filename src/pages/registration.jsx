import React from 'react';
import { useState } from 'react';
import css from '../components/RegistrationForm/RegistrationForm.module.css';
import logo from '../images/logo.svg';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => setValue(ev.target.value);

  const handleSubmit = ev => {
    ev.preventDefault();
  };

  const handleOnClick = () => console.log('register');

  return (
    <>
      <div className={css.logoContainer}>
        <img
          className={css.logo}
          src={logo}
          alt='wallet-logo'></img>
      </div>
      <RegistrationForm
        value={value}
        change={handleOnChange}
        onClick={handleOnClick}
        submit={handleSubmit}
      />
    </>
  );
};

export default Registration;
