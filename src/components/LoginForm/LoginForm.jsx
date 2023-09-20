import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
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
        {/* <label htmlFor='Enter Email'>
        <input
          type='text'
          value={value}
          placeholder='Email'
          onChange={handleOnChange}></input>
      </label> */}
        <TextField
          id='standard-basic'
          label='Email'
          variant='standard'
          value={value}
          onChange={handleOnChange}
        />
        {/* <label>
        <input
          type='text'
          value={value}
          placeholder='password'
          onChange={handleOnChange}></input>
      </label> */}
        <TextField
          id='standard-basic'
          label='Password'
          variant='standard'
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
