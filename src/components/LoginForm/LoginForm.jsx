import React from 'react';
import { useState } from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';
import emails from '../../images/email.svg';
import lock from '../../images/lock.svg';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = ev => {
    ev.preventDefault();
    const { name, value } = ev.currentTarget;
    // console.log(ev.currentTarget.value);
    setInputs(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (password.length >= 6 && password.length <= 12) {
      console.log('pswrd ok');
    } else {
      console.log('pswrd bad');
    }
    if (email.includes('@') && email.length >= 3) {
      console.log('email ok');
    } else {
      console.log('email bad');
    }
    if (!email || !password) {
      console.log('uzupełnij');
    }
    setInputs({ email: '', password: '' });
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <Input
        className={css.loginInput}
        text={
          <div className={css.loginLabel}>
            <img src={emails} alt='email'></img>
            <span>E-mail</span>
          </div>
        }
        name='email'
        type='email'
        value={inputs.email}
        onChange={handleChange}
        required
      />
      <Input
        text={
          <div className={css.loginLabel}>
            <img src={lock} alt='lock'></img>
            <span>Password</span>
          </div>
        }
        name='password'
        type='password'
        value={inputs.password}
        onChange={handleChange}
        required
      />
      <div className={css.spacingIn}></div>
      <div className={css.buttons}>
        <ButtonMain
          className={css.loginButton}
          text='LOG IN'
          type='submit'
        />
        <div className={css.spacingBt}></div>
        <Link to='/Goit-Wallet/register'>
          <ButtonSecondary text='REGISTER' />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
