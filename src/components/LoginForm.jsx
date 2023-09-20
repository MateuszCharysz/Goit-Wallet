import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import ButtonMain from '../components/ButtonMain';

const LoginForm = () => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => setValue(ev.target.value);
  const handleOnClick = () => setValue('');

  return (
    <form>
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
      {/* <button onClick={handleOnClick}>LOG IN</button> */}
      {/* <button onClick={handleOnClick}>REGISTER</button> */}
      <ButtonMain text='LOG IN' onClick={handleOnClick} />
      {/* <ColorButton
        variant='contained'
        onClick={handleOnClick}>
        LOG IN
      </ColorButton> */}
    </form>
  );
};

export default LoginForm;
