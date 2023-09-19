import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
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
      <label>
        <input
          type='text'
          value={value}
          placeholder='Confirm Password'
          onChange={handleOnChange}></input>
      </label>
      <label>
        <input
          type='text'
          value={value}
          placeholder='First name'
          onChange={handleOnChange}></input>
      </label>
      <button onClick={handleOnClick}>REGISTER</button>
      <button onClick={handleOnClick}>LOG IN</button>
    </form>
  );
};

export default RegistrationForm;
