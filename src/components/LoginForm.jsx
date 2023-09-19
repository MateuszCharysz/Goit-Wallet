import React from 'react';

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
        <button onClick={handleOnClick}>Login</button>
        <button onClick={handleOnClick}>Register</button>
      </label>
    </form>
  );
};

export default LoginForm;
