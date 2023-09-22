import React from 'react';
import { useState } from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';
import emails from '../../images/email.svg';
import lock from '../../images/lock.svg';
import { Link } from 'react-router-dom';

const LoginForm = ({ submit, onClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = ev => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = ev => {
    setPassword(ev.target.value);
  };

  // const handleChange = ev => {
  //   const {name, value} = e.currentTarget;
  //   setValues(v => ({...v, [name]:value}))
  // }

  return (
    <form className={css.loginForm} onSubmit={submit}>
      <Input
        className={css.loginInput}
        text={
          <div className={css.loginLabel}>
            <img src={emails} alt='email'></img>
            <span>E-mail</span>
          </div>
        }
        name='email'
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        text={
          <div className={css.loginLabel}>
            <img src={lock} alt='lock'></img>
            <span>Password</span>
          </div>
        }
        name='password'
        value={password}
        onChange={handlePasswordChange}
      />
      <div className={css.spacingIn}></div>
      <div className={css.buttons}>
        <ButtonMain
          className={css.loginButton}
          text='LOG IN'
          onClick={onClick}
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
