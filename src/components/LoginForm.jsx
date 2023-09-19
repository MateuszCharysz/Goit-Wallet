import React from 'react';
import { useState } from 'react';

const LoginForm = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => setValue(ev.target.value);
  const handleOnClick = () => setValue('');

  return (
    <form>
      <label htmlFor='Enter Email'>
        <input
          type='text'
          value={value}
          placeholder='Email'
          onChange={handleOnChange}></input>
      </label>
      <label>
        <input
          type='text'
          value={value}
          placeholder='password'
          onChange={handleOnChange}></input>
      </label>
      <button onClick={handleOnClick}>LOG IN</button>
      <button onClick={handleOnClick}>REGISTER</button>
    </form>
  );
};

export default LoginForm;
