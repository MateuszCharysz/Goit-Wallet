import React from 'react';
import { useState } from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => setValue(ev.target.value);
  const handleOnClick = () => setValue('');

  return (
    <div className={css.dashboard}>
      <form className={css.loginForm}>
        <Input
          text='Email'
          value={value}
          onChange={handleOnChange}
        />
        <Input
          text='Password'
          value={value}
          onChange={handleOnChange}
        />
        <ButtonMain text='LOG IN' onClick={handleOnClick} />
        <ButtonSecondary
          text='REGISTER'
          onClick={handleOnClick}
        />
      </form>
    </div>
  );
};

export default LoginForm;
